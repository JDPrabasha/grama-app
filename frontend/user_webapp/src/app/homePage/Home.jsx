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

      setDerivedAuthenticationState(derivedState);
      console.log(derivedState);
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
        <Box sx={{ mt: 0 }}>
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
                  }}
                >
                  Get your police clearance certificate without any{" "}
                  <span style={{ color: "#09ad58" }}> hassle.</span>
                </Typography>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mt: 2, color: "#7a7979", fontFamily: "Segoe UI" }}
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
