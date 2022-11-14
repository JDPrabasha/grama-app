import React from "react";
import errorImage from "../../images/404.svg";

function errorPage() {
  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        paddingLeft: "25%",
        paddingTop: "5%",
      }}
    >
      <img src={errorImage} />
    </div>
  );
}

export default errorPage;
