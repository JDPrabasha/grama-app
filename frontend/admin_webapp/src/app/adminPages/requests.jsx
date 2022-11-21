import React from "react";
import Header from "../components/header";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Table from "../components/reqTable"

function requests() {
  return (
    <>
      <Header name={"Requests"} />
      <Box href="/admin/requests"
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: "70vw",
          height: "90vh",
          ml: "22%",
        }}
      >
        <Toolbar />
        <Table />
      </Box>
    </>
  );
}

export default requests;
