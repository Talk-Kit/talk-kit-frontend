import React from "react";
import { ButtonProps } from "../../../_components/Button";

export default function PrimaryButton({
  isActive,
  onClick,
  text,
}: ButtonProps) {
  return (
    <div className="w-full max-w-[600px]">
      <button
        onClick={onClick}
        className={`signup-max-w-600 py-3 px-2 flex-center gap-2 self-stretch rounded-lg border-[1px] border-gray-3 ${
          isActive ? "bg-primary-1" : "bg-gray-0"
        }`}
      >
        <span
          className={`${
            isActive ? "text-gray-0" : "text-gray-3"
          } font-bold text-center`}
        >
          {text}
        </span>
      </button>
    </div>
  );
}
