import React from "react";
import {StyledButton, StyledButtonProps} from "../styles";

type ButtonProps = StyledButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
export default Button;
