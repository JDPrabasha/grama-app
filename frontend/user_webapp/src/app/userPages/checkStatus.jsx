import React, { useEffect, useState } from "react";
import SideNav from "../components/sideNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Header from "../components/header";
import { Grid } from "@mui/material";
import { Breakpoint, BreakpointProvider } from "react-socks";

import processingImage from "../../images/processing.svg";
import pendingImage from "../../images/pending.svg";
import completedImage from "../../images/completed.svg";
import noneImage from "../../images/none.svg";
import Axios from "axios";
import axiosInstance from "../config/axios";

function CheckStatus() {
  const arr = [
    ["No ", "requests", noneImage],
    ["Your request is ", "processing", processingImage],
    ["Your request is ", "completed", completedImage],
    // ["Your request is ", "completed", completedImage],
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const accessToken = "Bearer " + localStorage.getItem("API_TOKEN");

    const config = {
      headers: {
        Authorization: accessToken,
      },
    };

    const payload = {
      email: localStorage.getItem("email"),
      key: accessToken,
    };

    Axios.post(
      "https://8659e866-c03e-45d5-a713-14c3f8f0d831-dev.e1-us-east-azure.choreoapis.dev/vjmx/finalintegration/1.0.0/status",
      payload,
      config
    )
      .then((res) => {
        if (res.data.status === "Processing") setTextIndex(1);
        else if (res.data.status === "Confirmed") setTextIndex(2);
        else if (res.data.status === "Missing Info") setTextIndex(3);
        else setTextIndex(0);
      })
      .catch();
  }, []);

  return (
    <>
      <Header name={"Check Status"} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: "70vw",
          ml: "22%",
        }}
      >
        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                mt: { xs: "70%", sm: "40%" },
                ml: { xs: "55%", sm: "0%" },
                fontWeight: 700,
                fontFamily: "Segoe UI",
                fontSize: {
                  xs: 18,
                  sm: 34,
                },
              }}
            >
              {arr[textIndex][0]}
              <span style={{ color: "#09ad58" }}> {arr[textIndex][1]}.</span>
            </Typography>
          </Grid>

          <Grid
            xs={5}
            sx={{
              mt: { xs: "100%", sm: "8%" },
              pr: 5,
            }}
          >
            <Breakpoint medium up>
              <img
                src={arr[textIndex][2]}
                style={{ maxWidth: "100%", width: "100%" }}
              />
            </Breakpoint>

            <Breakpoint small down>
              <img
                src={arr[textIndex][1]}
                style={{
                  maxWidth: "300%",
                  width: "300%",
                  marginLeft: "-150%",
                }}
              />
            </Breakpoint>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CheckStatus;
