import React, { useEffect, useState } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { Route, Redirect } from "react-router-dom";
import Admin from "../adminPages/admin";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
  marginTop: "20%",
};

function Login() {
  const {
    state,
    signIn,
    signOut,
    getBasicUserInfo,
    getIDToken,
    getDecodedIDToken,
    on,
  } = useAuthContext();

  const [derivedAuthenticationState, setDerivedAuthenticationState] =
    useState(null);

  useEffect(() => {
    console.log(state?.isAuthenticated);
    if (!state?.isAuthenticated) {
      return;
    }

    localStorage.setItem("stateKey", state.isAuthenticated);

    (async () => {
      const basicUserInfo = await getBasicUserInfo();
      const idToken = await getIDToken();
      const decodedIDToken = await getDecodedIDToken();

      const derivedState = {
        authenticateResponse: basicUserInfo,
        idToken: idToken.split("."),
        decodedIdTokenHeader: JSON.parse(atob(idToken.split(".")[0])),
        decodedIDTokenPayload: decodedIDToken,
      };

      setDerivedAuthenticationState(derivedState);
      console.log(derivedState);

      localStorage.setItem("area", basicUserInfo.Area);

      fetch("https://sts.choreo.dev/oauth2/token", {
        body:
          "grant_type=urn:ietf:params:oauth:grant-type:token-exchange&subject_token=" +
          idToken +
          "&subject_token_type=urn:ietf:params:oauth:token-type:jwt&requested_token_type=urn:ietf:params:oauth:token-type:jwt",
        headers: {
          Authorization:
            "Basic eDA1QjM1V2ZjNmZwdlZ4ZWVBdDBYQk12bm5jYTpsRTg3ZmVUNndGdDNEZmVyU0NMNVYySzl0Qzhh",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      })
        .then((response) => response.json())
        .then((resJson) => {
          console.log("resJson");
          console.log(resJson.access_token);

          localStorage.setItem("API_TOKEN", resJson.access_token);
        });
    })();
  }, [state.isAuthenticated]);

  useEffect(() => {
    if (!localStorage.getItem("stateKey")) {
      signIn();
    }
  }, []);

  if (localStorage.getItem("stateKey")) {
    return (
      <>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/" component={Admin}>
          <Redirect to="/admin" />
        </Route>
      </>
    );
  }

  return <PuffLoader color="#09ad58" size={100} cssOverride={override} />;
}

export default Login;
