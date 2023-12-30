import React from "react";

const NewsIcon = ({ color }: {color: string}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0.639893L6.23 2.99989H3V4.99989L0.97 6.28989C0.39 6.63989 0 7.26989 0 7.99989V17.9999C0 19.1099 0.9 19.9999 2 19.9999H18C19.11 19.9999 20 19.1099 20 17.9999V7.99989C20 7.26989 19.61 6.63989 19.03 6.28989L17 4.99989V2.99989H13.77M5 4.99989H15V9.87989L10 12.9999L5 9.87989M6 5.99989V7.49989H14V5.99989M3 7.37989V8.62989L2 7.99989M17 7.37989L18 7.99989L17 8.62989M6 8.49989V9.99989H14V8.49989H6Z"
        fill={color}
      />
    </svg>
  );
};

export default NewsIcon;
