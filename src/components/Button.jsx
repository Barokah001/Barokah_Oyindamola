import React from "react";

const Button = ({ name, style }) => {
  return (
    <div className="flex">
      <button
        className={`px-5 py-2  text-l font-normal font-space cursor-pointer ${style}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
