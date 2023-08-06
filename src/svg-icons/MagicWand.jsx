import React from "react";

const MagicWand = ({
  lang,
  width,
  height,
  color,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "25"}
      viewBox="0 0 24 25"
      fill="none"
      style={{
        position: "relative",
        top: "-4px",
        left: lang === "kr" && "15px",
      }}
    >
      <path
        d="M7.50006 6.46719L5.00006 7.86719L6.40006 5.36719L5.00006 2.86719L7.50006 4.26719L10.0001 2.86719L8.60006 5.36719L10.0001 7.86719L7.50006 6.46719ZM19.5001 16.2672L22.0001 14.8672L20.6001 17.3672L22.0001 19.8672L19.5001 18.4672L17.0001 19.8672L18.4001 17.3672L17.0001 14.8672L19.5001 16.2672ZM22.0001 2.86719L20.6001 5.36719L22.0001 7.86719L19.5001 6.46719L17.0001 7.86719L18.4001 5.36719L17.0001 2.86719L19.5001 4.26719L22.0001 2.86719ZM13.3401 13.6472L15.7801 11.2072L13.6601 9.08719L11.2201 11.5272L13.3401 13.6472ZM14.3701 8.15719L16.7101 10.4972C17.1001 10.8672 17.1001 11.5172 16.7101 11.9072L5.04006 23.5772C4.65006 23.9672 4.00006 23.9672 3.63006 23.5772L1.29006 21.2372C0.900059 20.8672 0.900059 20.2172 1.29006 19.8272L12.9601 8.15719C13.3501 7.76719 14.0001 7.76719 14.3701 8.15719Z"
        fill={color || "white"}
      />
    </svg>
  );
};

export default MagicWand;