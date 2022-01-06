import React from "react";

function BookmarkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56">
      <g fill="none" fillRule="evenodd">
        <circle cx="28" cy="28" r="28" fill="#2F2F2F"></circle>
        <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"></path>
      </g>
    </svg>
  );
}

export default React.memo(BookmarkIcon);
