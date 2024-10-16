import React from "react";
import { PrimaryButtonProps } from "./interfaces/primary-button-props.interface";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
