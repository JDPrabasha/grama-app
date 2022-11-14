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
                    <img src={logo} style={{ height: "40px" }} />
                  </Grid>

                  <Grid xs={11}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 500, mt: 1, ml: 2 }}
                    >
                      EzGrama
                    </Typography>
                  </Grid>
                </Grid>
                <Grid xs={2}>
                  <Button
                    variant="contained"
                    sx={{
                      mr: 1,
                      backgroundColor: "#09ad58",
                      ":hover": {
                        backgroundColor: "#09914b",
                      },
                    }}
                  >
                    Signup
                  </Button>
                  <Button
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
                  </Button>
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
