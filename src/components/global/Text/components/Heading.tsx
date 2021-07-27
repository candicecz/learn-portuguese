import React from "react";
import {StyledHeading, StyledHeadingProps} from "../styles";

interface HeadingProps extends StyledHeadingProps {
  variant?: string | string[];
  color?: string;
}

const Heading: React.FC<HeadingProps> = ({children, color, ...props}) => {
  return (
    <StyledHeading color={color || "#fff"} {...props}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
