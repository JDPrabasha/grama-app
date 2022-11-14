import * as React from "react";

//mui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//components
import Nabar from "../components/Navbar";

//image
import homeImage from "../../images/homepageimg.svg";

function Home() {
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
                >
                  Signup
                </Button>

                <Button
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
                >
                  Login
                </Button>
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
