import React from "react";

const GlowBG = ({ width, height, color, top, right, bottom, left }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: width || "320px",
        height: height || "320px",
        background: color || "#F0A22F",
        borderRadius: "100%",
        filter: "blur(280px)",
        opacity:.5,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        zIndex: -1,
      }}
    ></div>
  );
};

export default GlowBG;
