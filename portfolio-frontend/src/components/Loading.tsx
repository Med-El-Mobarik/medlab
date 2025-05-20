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
      <picture>
        <source srcSet="/images/Logo.webp" type="image/webp" />
        <img
          src="/images/Logo.png"
          alt="Logo loading ..."
          style={{ width: "200px" }}
        />
      </picture>
    </div>
  );
}

export default Loading;
