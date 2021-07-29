import React from "react";
import {StyledIconButton, StyledIconButtonProps} from "../styles";

type IconButtonProps = StyledIconButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: React.FC<IconButtonProps> = ({children, ...props}) => {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
};
export default IconButton;
