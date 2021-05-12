import React from "react";

export function Section({ children, className = "", fullHeight = false, id }) {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        height: "100vh",
        maxHeight: "100vh",
        borderBottom: "1px solid",
      }}
      className={`${className} px-3`}
      id={id}
    >
      {children}
    </div>
  );
}
