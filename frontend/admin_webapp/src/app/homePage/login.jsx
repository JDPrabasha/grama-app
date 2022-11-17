import React, { useEffect, useState } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { Route, Redirect } from "react-router-dom";
import Admin from "../adminPages/admin";

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
    })();
  }, [state.isAuthenticated]);

  useEffect(() => {
    signIn();
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

  return (
    <>
      <div>error</div>
    </>
  );
}

export default Login;
