import React from "react";

const Circle = ({ lang, color, myClass, rtlClass }) => {
  return (
    <div
      className={`${myClass} ${lang === "kr" && rtlClass}`}
      style={{ background: color }}
    >1321323</div>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="500"
    //   height="500"
    //   viewBox="0 0 100 100"
    //   fill="none"
    //   className={`${myClass} ${lang === "kr" && rtlClass}`}
    // >
    //   <path
    //     d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z"
    //     fill={color || "#E3EEFF"}
    //   />
    // </svg>
  );
};

export default Circle;
