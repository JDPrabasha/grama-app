import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../homePage/Home";

//user
import Users from "../user_webapp/users";

//admin
import Admin from "../admin_webapp/admin";

//error page
import ErrorPage from "../homePage/errorPage";

function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={Users} />
        <Route path="/admin" component={Admin} />
        <Route path="/*" component={ErrorPage} />

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
