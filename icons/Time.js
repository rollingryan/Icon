import React from 'react';

const Time = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30">
    <defs>
      <linearGradient id="d" x1="50%" x2="50%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#22ADCF" />
        <stop offset="100%" stopColor="#6FC6D9" />
      </linearGradient>
    </defs>
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#22ADCF"/>
        <stop offset="100%" stopColor="#6FC6D9"/>
      </linearGradient>
    </defs>
    <g fill="none" fillRule="nonzero">
      <circle cx="15" cy="15" r="15" fill="url(#d)" opacity=".297"/>
      <circle cx="15" cy="15" r="11.25" fill="url(#a)"/>
      <g fill="#FFF">
        <path d="M14.949 9A5.955 5.955 0 0 0 9 14.949a5.955 5.955 0 0 0 5.949 5.948 5.955 5.955 0 0 0 5.948-5.948A5.955 5.955 0 0 0 14.95 9zm0 10.631a4.688 4.688 0 0 1-4.683-4.682c0-2.583 2.1-4.683 4.683-4.683 2.582 0 4.683 2.1 4.683 4.683 0 2.582-2.101 4.682-4.683 4.682z"/>
        <path d="M18.049 14.765h-2.674V11.55a.49.49 0 0 0-.98 0v3.704c0 .27.22.49.49.49h3.164a.49.49 0 0 0 0-.98z"/>
      </g>
    </g>
  </svg>
);

export default Time;
