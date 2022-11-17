import React from "react";
import ReactDOM from "react-dom/client";
import APpRoute from "./app/app-route/AppRoute";
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider
    config={{
      signInRedirectURL: "http://localhost:3000/auth",
      signOutRedirectURL: "http://localhost:3000/auth",
      clientID: "qkNIUmZvuuai886RfrXaw8mOzoka",
      baseUrl: "https://api.asgardeo.io/t/ezgrama",
      scope: ["openid", "profile"],
    }}
  >
    <APpRoute />
  </AuthProvider>
);
