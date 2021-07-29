import styled from "@emotion/styled";
import {
  compose,
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
    SpaceProps {
  opacity?: number;
}

export const StyledBox = styled.div<StyledBoxProps>(
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  compose(background, border, flexbox, layout, position, space),
);
