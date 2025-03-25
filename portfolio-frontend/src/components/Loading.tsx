import React from "react";

function Loading() {
  const centeredStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#0d1116",
  };

  return (
    <div style={centeredStyle}>
      <img
        style={{ width: "200px" }}
        src="/images/Logo.png"
        alt="Logo loading ..."
      />
    </div>
  );
}

export default Loading;
