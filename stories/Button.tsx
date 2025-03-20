import React from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary"
          ? "mt-4 w-full bg-blue-500 text-white p-2 px-4 rounded-lg"
          : "mt-4  w-full  text-indigo-500 border border-2 p-2 border-indigo-500 rounded"
      }`}
    >
      {label}
    </button>
  );
};
