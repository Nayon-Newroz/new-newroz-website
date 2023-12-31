import React from "react";

const Cloud = ({
  lang,
  color,
  myClass,
  rtlClass, 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57 28"
      fill="none"
      className={`${myClass} ${lang === "kr" && rtlClass}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.5799 25.2587C34.5451 26.3769 31.0344 27.0156 27.2935 27.0156C24.112 27.0156 21.097 26.5537 18.3996 25.7276C16.5529 26.5437 14.3706 27.0154 12.0326 27.0154C5.38718 27.0154 0 23.2049 0 18.5045C0 15.1099 2.80979 12.1794 6.8741 10.8132C8.80615 4.65238 17.2141 0.015625 27.2935 0.015625C37.031 0.015625 45.2085 4.34312 47.4941 10.1916C52.8937 11.0301 56.9347 14.4335 56.9347 18.5045C56.9347 23.2049 51.5475 27.0154 44.9021 27.0154C42.147 27.0154 39.6082 26.3604 37.5799 25.2587Z"
        fill={color || "white"}
      />
    </svg>
  );
};

export default Cloud;
