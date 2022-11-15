import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./app/app-route/AppRoute";
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>

  <AuthProvider
    config={{
      signInRedirectURL: "https://localhost:3000",
      signOutRedirectURL: "https://localhost:3000",
      clientID: "9f0iCjC69XCWPcFfgsJm_xbOItsa",
      baseUrl: "https://api.asgardeo.io/t/ezgrama",
      scope: ["openid", "profile"],
    }}
  >
    <AppRoute />
  </AuthProvider>
);
