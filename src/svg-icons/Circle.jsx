import React from "react";

const Circle = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "175"}
      height={height || "175"}
      viewBox="0 0 176 175"
      fill="none"
    >
      <circle
        cx="50"
        cy="50"
        r="50"
        transform="matrix(-1 0 0 1 138.007 0)"
        fill={color || "#ABCCFE"}
      />
    </svg>
  );
};

export default Circle;
