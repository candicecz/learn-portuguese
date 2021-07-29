import styled from "@emotion/styled";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  position,
  PositionProps,
} from "styled-system";

interface StyledSystemProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export interface StyledButtonProps extends StyledSystemProps {}

export const StyledButton = styled.button<StyledButtonProps>``;

export interface StyledIconButtonProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  ${background};
  ${border};
  ${color};
  ${layout};
  ${position};
  ${space};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }
`;
