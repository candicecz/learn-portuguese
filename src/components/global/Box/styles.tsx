import styled from "@emotion/styled";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
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
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export const StyledBox = styled("div")<StyledBoxProps>(
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  background,
  border,
  flexbox,
  layout,
  position,
  space,
);
