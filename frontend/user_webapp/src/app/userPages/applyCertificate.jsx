import React from "react";
import Box from "@mui/material/Box";
import Header from "../components/header";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

function applyCertificate() {
  return (
    <>
      <Header name={"Apply Certificate"} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: "70vw",
          ml: "22%",
          mt: "5%",
        }}
      >
        <Grid
          container
          direction="column"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid container>
            <Typography
              variant="h4"
              component="div"
              sx={{
                mb: "3%",
                fontWeight: 700,
                fontFamily: "Segoe UI",
              }}
            >
              Hi ! You can apply for your{" "}
              <span style={{ color: "#09ad58" }}>
                police clearance certificate
              </span>{" "}
              by filling the information
              <span style={{ color: "#09ad58" }}> below.</span>
            </Typography>
          </Grid>

          <Grid>
            <TextField
              id="outlined-basic"
              label="NIC or Passport ID"
              variant="outlined"
              size="small"
              sx={{ width: "35vw", mb: 3 }}
            />
          </Grid>

          <Grid>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              size="small"
              multiline
              rows={5}
              sx={{ width: "35vw", mb: 3 }}
            />
          </Grid>

          <Grid>
            <Button
              variant="contained"
              component="label"
              sx={{
                width: "35vw",
                backgroundColor: "#09ad58",
                ":hover": {
                  backgroundColor: "#09914b",
                },
              }}
            >
              Upload proof of address
              <input type="file" hidden />
            </Button>
          </Grid>

          <Grid>
            <Button
              variant="outlined"
              sx={{
                mt: 6,
                width: "17.5vw",
                borderColor: "#09ad58",
                color: "#09ad58",
                ":hover": {
                  borderColor: "#09914b",
                  color: "#09ad58",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default applyCertificate;
