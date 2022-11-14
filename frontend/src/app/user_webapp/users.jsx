import React from "react";
import { Outlet } from "react-router";
import SideNav from "../components/sideNav";

function users() {
  return (
    <>
      <SideNav />
      <Outlet />
    </>
  );
}

export default users;
