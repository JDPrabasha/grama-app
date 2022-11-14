import React from "react";
import { Route, Redirect } from "react-router-dom";
import SideNav from "../components/sideNav";

import AdminDashboard from "../admin_webapp/dashboard";
import AdminRequests from "../admin_webapp/requests";

function admin() {
  return (
    <>
      <SideNav index={1} />

      <Route exact path="/admin">
        <Redirect to="/admin/dashboard" />
      </Route>
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/requests" component={AdminRequests} />

      {/* <Outlet /> */}
    </>
  );
}

export default admin;
