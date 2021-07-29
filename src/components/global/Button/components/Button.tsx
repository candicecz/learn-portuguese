import React from "react";
import {StyledButton, StyledButtonProps} from "../styles";
import {Heading} from "src/components/global";
import {useTheme} from "@emotion/react";

export interface ButtonProps extends StyledButtonProps {}

const Button: React.FC<ButtonProps> = ({
  children,
  isSelected = false,
  ...props
}) => {
  const theme = useTheme();
  return (
    <StyledButton theme={theme} isSelected={isSelected} {...props}>
      <Heading color={"inherit"}>{children}</Heading>
    </StyledButton>
  );
};
export default Button;
