import React from "react";

const Start = ({ width, height, color, top, right, bottom, left }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "38"}
      height={height || "38"}
      viewBox="0 0 38 38"
      fill="none"
      style={{
        position: "absolute",
        top: top,
        right: right,
        bottom: bottom,
        left: left,
      }}
    >
      <path
        d="M19 0L22.923 15.077L38 19L22.923 22.923L19 38L15.077 22.923L0 19L15.077 15.077L19 0Z"
        fill={color || "#FFC93C"}
      />
    </svg>
  );
};

export default Start;
