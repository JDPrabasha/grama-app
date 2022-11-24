import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import SideNav from "../components/sideNav";
import ApplyCertificate from "../userPages/applyCertificate";
import CheckStatus from "../userPages/checkStatus";
import Help from "../userPages/help";
import ErrorPage from "../homePage/errorPage";
import { useAuthContext } from "@asgardeo/auth-react";
import Axios from "axios";

function Users() {
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
        // setSpinnerLloading(false);
        localStorage.setItem("reqStatus", res.data.status);
      })
      .catch();
  }, []);

  if (!localStorage.getItem("stateKey")) {
    return <Redirect to="/" />;
  }

  if (
    localStorage.getItem("reqStatus") === "Processing" ||
    localStorage.getItem("reqStatus") === "Confirmed" ||
    localStorage.getItem("reqStatus") === "Missing Info"
  ) {
    return (
      <>
        <SideNav index={0} reqSent={1} />
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
      <SideNav index={0} reqSent={0} />
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
