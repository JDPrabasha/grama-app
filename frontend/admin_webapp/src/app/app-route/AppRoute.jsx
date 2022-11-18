import React from "react";

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import Home from "../homePage/login";

//admin
import Admin from "../adminPages/admin";
import ErrorPage from "../homePage/errorPage";

function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoute;
