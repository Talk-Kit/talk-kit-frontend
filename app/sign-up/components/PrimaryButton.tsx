import React from "react";

interface PrimaryButtonProps {
  isActive: boolean;
  onClick: () => void;
  text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  isActive,
  onClick,
  text,
}) => {
  return (
    <div className="w-full max-w-[600px]">
      <button
        onClick={onClick}
        className={`flex w-full max-w-[600px] py-3 px-2 justify-center items-center gap-2 self-stretch rounded-lg border-[1px] border-gray-3 ${
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
};

export default PrimaryButton;
