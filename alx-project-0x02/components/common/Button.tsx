import { type ButtonProps } from "@/interfaces";
import React from "react";

const sizeClasses = {
  small: "text-sm px-3 py-1",
  medium: "text-base px-4 py-2",
  large: "text-lg px-6 py-3",
};

const  Button: React.FC <ButtonProps> = (
  {label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) =>  {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-600 transition duration-200`}
    >
      {label}
    </button>
  );
}

export default Button;
