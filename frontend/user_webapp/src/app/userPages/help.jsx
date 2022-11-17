import React from "react";
import Box from "@mui/material/Box";
import Header from "../components/header";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function help() {
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
              sx={{ width: "35vw", mb: 3 }}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Button
            variant="outlined"
            sx={{
              ml: "25%",
              mt: 1,
              width: "12vw",
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
      </Box>
    </>
  );
}

export default help;
