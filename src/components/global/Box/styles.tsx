import styled from "@emotion/styled";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  position,
  PositionProps,
} from "styled-system";

export interface StyledBoxProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export const StyledBox = styled.div<StyledBoxProps>(
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
);
