import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "./Header";

export function Page({ children, className = "" }) {
  return (
    <div
      className={className + " text-dark px-3"}
      style={{ width: "100%", height: "100%" }}
    >
      <Helmet>
        <style type="text/css">
          {`
            html, body{
                overflow-x:hidden;
                min-height:100vh;
            }
          `}
        </style>
      </Helmet>
      <Header />
      {children}
    </div>
  );
}
