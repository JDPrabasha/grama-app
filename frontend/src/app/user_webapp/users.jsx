import React from "react";
import { Route } from "react-router-dom";

import SideNav from "../components/sideNav";
import UserDashboard from "../user_webapp/dashboard";
import ApplyCertificate from "../user_webapp/applyCertificate";
import CheckStatus from "../user_webapp/checkStatus";
import Help from "../user_webapp/help";

function users() {
  return (
    <>
      <SideNav index={0} />

      <Route path="/user/dashboard" component={UserDashboard} />
      <Route path="/user/apply-certificate" component={ApplyCertificate} />
      <Route path="/user/status" component={CheckStatus} />
      <Route path="/user/help" component={Help} />

      {/* <Outlet /> */}
    </>
  );
}

export default users;
