import React from "react";

function IconClose({ ...props }) {
  return (
    <svg { ...props } xmlns="http://www.w3.org/2000/svg" width="14" height="15">
      <g fill="#FFF" fillRule="evenodd">
        <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"></path>
        <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"></path>
      </g>
    </svg>
  );
}

export default React.memo(IconClose);
