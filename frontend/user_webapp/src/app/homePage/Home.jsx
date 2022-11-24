import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from "react";

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

//mui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//components
import Nabar from "../components/Navbar";
import Users from "../userPages/users";

//image
import homeImage from "../../images/homepageimg.svg";

//asgardeo
import { useAuthContext } from "@asgardeo/auth-react";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
  marginTop: "20%",
};

function Home() {
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

      localStorage.setItem("email", basicUserInfo.email);

      setDerivedAuthenticationState(derivedState);
      console.log(derivedState);

      fetch("https://sts.choreo.dev/oauth2/token", {
        body:
          "grant_type=urn:ietf:params:oauth:grant-type:token-exchange&subject_token=" +
          idToken +
          "&subject_token_type=urn:ietf:params:oauth:token-type:jwt&requested_token_type=urn:ietf:params:oauth:token-type:jwt",
        headers: {
          Authorization:
            "Basic aWV2dlBINFh4M0RpWHVGTV9ueFhBcGg4Qzc4YTpfQWNDTk1ZY1BvUkFnSWdwdHR0U2RBNjlVWjhh",
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

  if (localStorage.getItem("stateKey")) {
    return (
      <>
        <Route exact path="/user" component={Users} />
        <Route exact path="/" component={Users}>
          <Redirect to="/user" />
        </Route>
      </>
    );
  }

  if (state.isLoading) {
    return <PuffLoader color="#09ad58" size={100} cssOverride={override} />;
  }

  return (
    <div
      style={{
        backgroundColor: "#f3fbfb",
        maxHeight: "100vh",
        minHeight: "100vh",
      }}
    >
      <Nabar />
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: {
              xs: 10,
              sm: 8,
              md: 6,
              lg: 0,
            },
          }}
        >
          <Grid container>
            <Grid
              xs={7}
              sx={{
                alignContent: "center",
                alignItems: " center",
                display: "flex",
                pr: 5,
                pl: 6,
              }}
            >
              <div style={{ marginTop: "20%" }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Segoe UI",
                    fontSize: {
                      xs: 30,
                      sm: 42,
                      md: 48,
                    },
                  }}
                >
                  Get your police clearance certificate without any{" "}
                  <span style={{ color: "#09ad58" }}> hassle.</span>
                </Typography>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    mt: 2,
                    color: "#7a7979",
                    fontFamily: "Segoe UI",
                    fontSize: {
                      xs: 13,
                      sm: 16,
                      md: 20,
                    },
                  }}
                >
                  Get your police clearance certificate in a few days in the
                  comfort of your own home!
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mr: 1,
                    mt: 3,
                    backgroundColor: "#09ad58",
                    ":hover": {
                      backgroundColor: "#09914b",
                    },
                    fontSize: {
                      xs: 9,
                      sm: 11,
                      md: 13,
                    },
                  }}
                  onClick={() => signIn()}
                >
                  Sign in
                </Button>

                {/* <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#09ad58",
                    mt: 3,
                    color: "#09ad58",
                    ":hover": {
                      borderColor: "#09914b",
                      color: "#09ad58",
                    },
                  }}
                  onClick={() => signIn()}
                >
                  Login
                </Button> */}
              </div>
            </Grid>

            <Grid xs={5} sx={{ marginTop: "8%", pr: 5 }}>
              <img src={homeImage} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
