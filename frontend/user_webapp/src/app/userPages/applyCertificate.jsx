import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "../components/header";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Axios from "axios";

import Toast from "../components/Toast";

function ApplyCertificate() {
  const [nic, setNIC] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(-1);

  const convertBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (nic == "" || address == "" || image == "") {
      setOpen(true);
      setMode(1);
    } else {
      setMode(0);

      console.log(nic);
      console.log(address);
      console.log(image);
      console.log(typeof image);

      const accessToken = "Bearer " + localStorage.getItem("API_TOKEN");

      const payload = {
        nic: nic,
        address: address,
        proof: image,
        key: accessToken,
        email: "test@gmail.com",
      };

      const config = {
        headers: {
          Authorization: accessToken,
        },
      };

      Axios.post(
        "https://8659e866-c03e-45d5-a713-14c3f8f0d831-dev.e1-us-east-azure.choreoapis.dev/vjmx/finalintegration/1.0.0/add",
        payload,
        config
      )
        .then((res) => {
          console.log(res);
        })
        .catch();
    }
  };

  return (
    <>
      <Header name={"Apply Certificate"} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: {
            sm: "70%",
            md: "70%",
            lg: "70vw",
          },
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
            alignItems: { sm: "center" },
            width: { xs: "100%", md: "100%", lg: "100%" },
            ml: { xs: "14%", md: "0%" },
          }}
        >
          <Grid container>
            <Typography
              variant="h4"
              component="div"
              sx={{
                mb: { xs: "20%", sm: "15%", md: "10%", lg: "5%" },
                mt: { xs: "15%", sm: "0%", md: "0%" },
                fontWeight: 700,
                fontFamily: "Segoe UI",
                fontSize: {
                  xs: 13,
                  sm: 20,
                  md: 30,
                  lg: 34,
                },
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
              onChange={(newValue) => setNIC(newValue.target.value)}
              sx={{ width: { xs: "57vw", sm: "50vw" }, mb: 3 }}
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
              onChange={(newValue) => setAddress(newValue.target.value)}
              sx={{ width: { xs: "57vw", sm: "50vw" }, mb: 3 }}
            />
          </Grid>

          <Grid>
            <Button
              variant="contained"
              component="label"
              sx={{
                width: { xs: "57vw", sm: "50vw" },

                backgroundColor: "#09ad58",
                ":hover": {
                  backgroundColor: "#09914b",
                },
                fontSize: {
                  xs: 9,
                  sm: 11,
                  md: 10,
                  lg: 12,
                },
              }}
            >
              Upload proof of address
              <input type="file" hidden onChange={(e) => convertBase64(e)} />
            </Button>
          </Grid>

          <Grid>
            <Button
              variant="outlined"
              onClick={() => handleSubmit()}
              sx={{
                mt: 6,
                width: { xs: "21vw", sm: "17.5vw" },
                fontSize: {
                  xs: 9,
                  sm: 11,
                  md: 10,
                  lg: 12,
                },
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
            <Toast open={open} setOpen={setOpen} mode={mode} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ApplyCertificate;
