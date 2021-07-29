import styled from "@emotion/styled";
import {
  color,
  ColorProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from "styled-system";

export interface StyledTextProps
  extends TypographyProps,
    ColorProps,
    PositionProps,
    SpaceProps {}

export const StyledText = styled.p<StyledTextProps>(
  {},
  color,
  position,
  typography,
  space,
  variant({
    variants: {
      xs: {fontSize: "0.5rem"},
      sm: {fontSize: "0.75rem"},
      md: {fontSize: "1rem"},
      lg: {fontSize: "1.5rem"},
      xl: {fontSize: "2.5rem"},
    },
  }),
);

StyledText.defaultProps = {m: 0};

export interface StyledHeadingProps
  extends TypographyProps,
    ColorProps,
    PositionProps,
    SpaceProps {}

export const StyledHeading = styled.h3<StyledHeadingProps>`
  ${color};
  ${typography};
  ${position};
  ${space};
  ${variant({
    variants: {
      xs: {fontSize: "0.75rem"},
      sm: {fontSize: "1rem"},
      md: {fontSize: "2rem"},
      lg: {fontSize: "3rem"},
      xl: {fontSize: "5rem"},
    },
  })};
`;
