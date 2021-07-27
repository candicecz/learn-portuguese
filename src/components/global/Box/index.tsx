import React from "react";
import {StyledBox, StyledBoxProps} from "./styles";

interface BoxProps extends StyledBoxProps {}

const Box: React.FC<BoxProps> = ({children, ...props}) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
