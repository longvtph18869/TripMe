import Button, { ButtonProps } from "shared/Button/Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-orange-400 hover:bg-orange-400 text-neutral-50 focus:ring-transparent ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
