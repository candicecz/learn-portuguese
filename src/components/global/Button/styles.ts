import styled from "@emotion/styled";
import {css} from "@emotion/react";

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
  variant,
} from "styled-system";

interface StyledSystemProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export type StyledButtonProps = StyledSystemProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: string | string[];
    isSelected?: boolean;
  };

export interface StyledIconButtonProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

const StyledSystemButton = styled("button")<StyledSystemProps>(
  {
    background: "transparent",
    "&:hover": {cursor: "pointer"},
    border: "none",
  },
  background,
  border,
  color,
  layout,
  position,
  space,
  variant({
    variants: {
      solid: {},
      outline: {
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "50px",
        transition: "all 0.2s ease-in-out",
      },
    },
  }),
  props => {
    if (props.variant === "outline") {
      return {
        "&:hover": {
          background: "#fff",
          color: props.theme.colors.secondary,
          transition: "all 0.2s ease-in-out",
        },
      };
    }
  },
);

export const StyledButton = styled(StyledSystemButton)<StyledButtonProps>`
  ${props =>
    props.variant === "outline" &&
    props.isSelected &&
    css`
      color: ${props.theme.colors.secondary};
      background: #fff;
    `}
`;

StyledButton.defaultProps = {
  mb: 4,
  minWidth: ["100%", "120px"],
};

export const StyledIconButton = styled(
  StyledSystemButton,
)<StyledIconButtonProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }
`;
