import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import SideNav from "../components/sideNav";
import Dashboard from "../adminPages/dashboard";
import Requests from "../adminPages/requests";

import { useAuthContext } from "@asgardeo/auth-react";
function admin() {
  return (
    <>
      <SideNav index={0} />

      <Route exact path="/admin">
        <Redirect to="/admin/dashboard" />
      </Route>
      <Route path="/admin/dashboard" component={Dashboard} />
      <Route path="/admin/requests" component={Requests} />
    </>
  );
}

export default admin;
