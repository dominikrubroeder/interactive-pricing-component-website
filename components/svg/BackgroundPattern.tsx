import React from 'react';

const BackgroundPattern: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-[50vh] -z-10"
    >
      <path
        fill="#F1F5FE"
        fillRule="evenodd"
        d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"
      />
    </svg>
  );
};

export default BackgroundPattern;
