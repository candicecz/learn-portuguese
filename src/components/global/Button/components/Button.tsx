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
      {typeof children === "string" ? (
        <Heading color={"inherit"} p={[1, 2]} m={[1, 2]} variant={["sm"]}>
          {children}
        </Heading>
      ) : (
        children
      )}
    </StyledButton>
  );
};
export default Button;
