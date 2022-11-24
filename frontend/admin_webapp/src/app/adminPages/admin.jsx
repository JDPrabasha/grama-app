import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import SideNav from "../components/sideNav";
import Dashboard from "../adminPages/dashboard";
import Requests from "../adminPages/requests";
import { useAuthContext } from "@asgardeo/auth-react";

import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
  marginTop: "20%",
};

function Admin() {
  if (!localStorage.getItem("stateKey")) {
    return <Redirect to="/" />;
  }

  // if (state.isLoading) {
  //   return <PuffLoader color="#09ad58" size={100} cssOverride={override} />;
  // }

  return (
    <>
      <SideNav index={0} />

      <Route path="/admin">
        <Redirect to="/admin/dashboard" />
      </Route>
      <Route path="/admin/dashboard" component={Dashboard} />
      <Route path="/admin/requests" component={Requests} />
    </>
  );
}

export default Admin;
