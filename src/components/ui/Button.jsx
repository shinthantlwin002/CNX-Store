import React from "react";

const Button = ({ className, onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
