import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import SideNav from "../components/sideNav";
// import UserDashboard from "../user_webapp/dashboard";
import ApplyCertificate from "../userPages/applyCertificate";
import CheckStatus from "../userPages/checkStatus";
import Help from "../userPages/help";

import { useAuthContext } from "@asgardeo/auth-react";

function users() {
  if (!localStorage.getItem("stateKey")) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <SideNav index={0} />

      <Route exact path="/user">
        <Redirect to="/user/apply-certificate" />
      </Route>
      <Route path="/user/apply-certificate" component={ApplyCertificate} />
      <Route path="/user/status" component={CheckStatus} />
      <Route path="/user/help" component={Help} />
    </>
  );
}

export default users;
