import React from "react";
import { Redirect, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import errorImage from "../../images/404.svg";

function errorPage() {
  const handleGoBack = () => {
    <Redirect to="/" />;
  };

  return (
    <>
      <div
        style={{
          padding: 0,
          margin: 0,
          marginLeft: "30%",
          marginTop: "5%",
        }}
      >
        <img src={errorImage} style={{ width: "50%" }} />
      </div>

      <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
        <Button
          variant="contained"
          sx={{
            margin: 0,
            marginLeft: "44%",
            marginTop: "5%",
            backgroundColor: "#09ad58",
            ":hover": {
              backgroundColor: "#09914b",
            },
          }}
          onClick={() => handleGoBack()}
        >
          Go back
        </Button>
      </Link>
    </>
  );
}

export default errorPage;
