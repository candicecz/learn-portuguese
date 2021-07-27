import React from "react";
import {StyledText, StyledTextProps} from "../styles";

interface TextProps extends StyledTextProps {
  variant?: string;
  color?: string;
}

const Text: React.FC<TextProps> = ({children, color, ...props}) => {
  return (
    <StyledText color={color || "#fff"} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
