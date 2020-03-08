import React from 'react';

const TrucksVsOrders = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30">
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#22ADCF" />
        <stop offset="100%" stopColor="#6FC6D9" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle
        cx="15"
        cy="15"
        r="15"
        fill="#6FC6D9"
        fillRule="nonzero"
        opacity=".297"
      />
      <circle cx="15" cy="15" r="11.25" fill="#6FC6D9" fillRule="nonzero" />
      <path
        fill="#FFF"
        d="M19.667 20.083h-9.334V9.417h1.334v2h6.666v-2h1.334v10.666zM15 8.083a.666.666 0 1 1 0 1.333.666.666 0 0 1 0-1.333zm4.667 0h-2.79A1.994 1.994 0 0 0 15 6.75c-.87 0-1.602.559-1.877 1.333h-2.79C9.597 8.083 9 8.681 9 9.417v10.666c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V9.417c0-.736-.597-1.334-1.333-1.334z"
      />
    </g>
  </svg>
);

export default TrucksVsOrders;
