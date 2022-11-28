import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import SideNav from "../components/sideNav";
import ApplyCertificate from "../userPages/applyCertificate";
import CheckStatus from "../userPages/checkStatus";
import Help from "../userPages/help";
import ErrorPage from "../homePage/errorPage";
import { useAuthContext } from "@asgardeo/auth-react";
import Axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
  // marginTop: "18%",
  // marginLeft: "53%",

  marginTop: "20%",
};

function Users() {
  const [loadingScreen, setLoadingScreen] = useState(true);

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
        localStorage.setItem("reqStatus", res.data.status);
        setLoadingScreen(false);
      })
      .catch();
  }, []);

  if (!localStorage.getItem("stateKey")) {
    return <Redirect to="/" />;
  }

  if (loadingScreen) {
    return <PuffLoader color="#09ad58" size={100} cssOverride={override} />;
  }

  if (
    localStorage.getItem("reqStatus") === "Processing" ||
    // localStorage.getItem("reqStatus") === "Confirmed" ||
    localStorage.getItem("reqStatus") === "Missing Info"
  ) {
    return (
      <>
        <SideNav index={0} />
        <Route path="/user">
          <Redirect to="/user/status" />
        </Route>
        <Route path="/user/status" component={CheckStatus} />
        <Route path="/user/help" component={Help} />
      </>
    );
  }

  return (
    <>
      <SideNav index={0} />
      <Route path="/user">
        <Redirect to="/user/apply-certificate" />
      </Route>
      <Route path="/user/apply-certificate" component={ApplyCertificate} />
      <Route path="/user/status" component={CheckStatus} />
      <Route path="/user/help" component={Help} />
    </>
  );
}

export default Users;
