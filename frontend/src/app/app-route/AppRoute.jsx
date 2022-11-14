import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../homePage/Home";

//user
import Users from "../user_webapp/users";
import UserDashboard from "../user_webapp/dashboard";
import ApplyCertificate from "../user_webapp/applyCertificate";
import CheckStatus from "../user_webapp/checkStatus";
import Help from "../user_webapp/help";

//admin
import Admin from "../admin_webapp/admin";
import AdminDashboard from "../admin_webapp/dashboard";
import AdminRequests from "../admin_webapp/requests";

function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={Users} />
        <Route path="/admin" component={Admin} />

        {/* <Route path="/user" element={<Users />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="apply-certificate" element={<ApplyCertificate />} />
        <Route path="status" element={<CheckStatus />} />
        <Route path="help" element={<Help />} />
      </Route>

      <Route path="/admin" element={<Admin />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="requests" element={<AdminRequests />} />
      </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoute;
