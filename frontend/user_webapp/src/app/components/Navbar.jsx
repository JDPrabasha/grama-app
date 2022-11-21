import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

import logo from "../../images/logo.svg";
import { useAuthContext } from "@asgardeo/auth-react";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const {
    state,
    signIn,
    signOut,
    getBasicUserInfo,
    getIDToken,
    getDecodedIDToken,
    on,
  } = useAuthContext();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "#f3fbfb",
            color: "#2f374e",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Container maxWidth="xl">
              <Grid container spacing={2}>
                <Grid container xs={10}>
                  <Grid xs={1}>
                    <img src={logo} style={{ height: "60px" }} />
                  </Grid>

                  <Grid xs={11}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 500,
                        mt: {
                          xs: 3,
                          sm: 2,
                          md: 1,
                          lg: 2.5,
                          xl: 2.5,
                        },
                        ml: {
                          xs: 4,
                          sm: 2,
                          md: -2,
                          lg: -2,
                          xl: -6,
                        },
                        fontSize: {
                          xs: 16,
                          sm: 20,
                          md: 24,
                        },
                        mr: {
                          xs: 0,
                          sm: 18,
                          md: 30,
                        },
                      }}
                    >
                      EzGrama
                    </Typography>
                  </Grid>
                </Grid>
                <Grid xs={2}>
                  <Button
                    variant="contained"
                    sx={{
                      pl: {
                        xs: "10%",
                        sm: "0%",
                      },

                      pr: {
                        xs: "10%",
                        sm: "0%",
                      },
                      mt: 1,
                      fontSize: {
                        xs: 10,
                        sm: 14,
                      },
                      backgroundColor: "#09ad58",
                      ":hover": {
                        backgroundColor: "#09914b",
                      },
                      width: {
                        xs: "100%",
                        sm: "130%",
                        md: "75%",
                        lg: "60%",
                        xl: "50%",
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
                      color: "#09ad58",
                      ":hover": {
                        borderColor: "#09914b",
                        color: "#09ad58",
                      },
                    }}
                  >
                    Login
                  </Button> */}
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
