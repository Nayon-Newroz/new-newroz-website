import React from "react";

const GlowBG = ({myClass, width, height, color, top, right, bottom, left }) => {
  return (
    <div
      style={{
        background: color || "#F0A22F",
        // position: "absolute",
        // width: width || "320px",
        // height: height || "320px",
        // borderRadius: "100%",
        // filter: "blur(280px)",
        // opacity:.5,
        // top: top,
        // right: right,
        // bottom: bottom,
        // left: left,
        // zIndex: -1,
      }}
      className={`${myClass}`}
    ></div>
  );
};

export default GlowBG;
