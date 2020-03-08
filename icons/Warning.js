import React from 'react';

const Warning = () => (
  <svg
    version="1.2"
    baseProfile="tiny"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    className="icon--fill">
    <defs>
      <linearGradient id="e" x1="48.828%" x2="48.828%" y1="4.25%" y2="97.209%">
        <stop offset="0%" stopColor="#f7245b" />
        <stop offset="100%" stopColor="#c81b74" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fillRule="nonzero" d="M0 0h24v24H0z" />
      <g transform="translate(4 4)">
        <circle cx="8" cy="8" r="8" fill="url(#e)" fillRule="nonzero" />
        <path
          fill="#FFF"
          d="M8.96 9.263H7.04l-.303-5.895h2.526l-.302 5.895zm-2.223 2.105c0-.368.12-.671.361-.908.241-.236.542-.355.902-.355s.66.119.902.355c.24.237.361.54.361.908 0 .37-.12.672-.361.909-.241.236-.542.355-.902.355s-.66-.119-.902-.355c-.24-.237-.361-.54-.361-.909z"
        />
      </g>
    </g>
  </svg>
);

export default Warning;
