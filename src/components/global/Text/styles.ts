import styled from "@emotion/styled";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
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
    LayoutProps,
    PositionProps,
    SpaceProps {}

export const StyledText = styled.p<StyledTextProps>(
  {},
  color,
  layout,
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
    LayoutProps,
    PositionProps,
    SpaceProps {
  style?: any;
}

export const StyledHeading = styled.h3<StyledHeadingProps>`
  ${color};
  ${typography};
  ${layout};
  ${position};
  ${space};
  ${variant({
    variants: {
      xs: {fontSize: "0.75rem"},
      sm: {fontSize: "1rem"},
      md: {fontSize: "1.5rem"},
      lg: {fontSize: "2rem"},
      xl: {fontSize: "4rem"},
    },
  })};
`;
