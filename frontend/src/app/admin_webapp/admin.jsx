import React from "react";
import { Outlet } from "react-router";
import SideNav from "../components/sideNav";

function admin() {
  return (
    <>
      <SideNav index={1} />
      <Outlet />
    </>
  );
}

export default admin;
