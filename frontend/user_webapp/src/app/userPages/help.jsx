import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "../components/header";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Axios from "axios";

import Toast from "../components/Toast";

function Help() {
  const [issue, setIssue] = useState("");
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(-1);

  const handleSubmit = () => {
    if (issue == "") {
      setOpen(true);
      setMode(1);
    } else {
      setMode(0);

      // const payload = {};
      // Axios.post("", payload).then().catch();
    }
  };

  return (
    <>
      <Header name={"Help"} />
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
            // width: "100%",
            width: { xs: "100%", md: "100%", lg: "100%" },
            ml: { xs: "5%", md: "0%" },
          }}
        >
          <Grid container>
            <Typography
              variant="h4"
              component="div"
              sx={{
                mb: { xs: "20%", sm: "15%", md: "10%", lg: "5%" },
                mt: { xs: "15%", sm: "0%", md: "0%" },
                ml: { xs: "10%", md: "0%" },

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
              How can we <span style={{ color: "#09ad58" }}> help</span> you
              with?
            </Typography>
          </Grid>

          <Grid>
            <TextField
              id="outlined-basic"
              label="Type your issue"
              variant="outlined"
              size="small"
              multiline
              rows={5}
              sx={{ width: { xs: "57vw", sm: "50vw" }, mb: 3 }}
              onChange={(newValue) => setIssue(newValue.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Button
            variant="outlined"
            sx={{
              ml: { xs: "15%", sm: "14.5%" },
              mt: 1,
              width: "12vw",
              borderColor: "#09ad58",
              color: "#09ad58",
              ":hover": {
                borderColor: "#09914b",
                color: "#09ad58",
              },
              fontSize: {
                xs: 9,
                sm: 11,
                md: 10,
                lg: 12,
              },
            }}
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
          <Toast open={open} setOpen={setOpen} mode={mode} />
        </Grid>
      </Box>
    </>
  );
}

export default Help;
