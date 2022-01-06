import React from "react";

function IconMenu({ ...props }) {
  return (
    <svg { ...props } xmlns="http://www.w3.org/2000/svg" width="16" height="15">
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M0 0h16v3H0zm0 6h16v3H0zm0 6h16v3H0z"
      ></path>
    </svg>
  );
}

export default React.memo(IconMenu);
