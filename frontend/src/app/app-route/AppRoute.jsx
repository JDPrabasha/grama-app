import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../homePage/Home";

//user
import Users from "../user_webapp/users";
import UserDashboard from "../user_webapp/dashboard";
import ApplyCertificate from "../user_webapp/applyCertificate";
import CheckStatus from "../user_webapp/checkStatus";
import Help from "../user_webapp/help";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/user" element={<Users />}>
        <Route index element={<Navigate to={"dashboard"} replace />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="apply-certificate" element={<ApplyCertificate />} />
        <Route path="status" element={<CheckStatus />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
