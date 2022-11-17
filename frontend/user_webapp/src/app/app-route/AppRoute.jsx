import React from "react";

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import Home from "../homePage/Home";

//user
import Users from "../userPages/users";

//error page
import ErrorPage from "../homePage/errorPage";

function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={Users} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoute;
