import styled from "@emotion/styled";
import {css} from "@emotion/react";

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
  variant,
} from "styled-system";

interface StyledSystemProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {
  variant?: string | string[];
  isDisabled?: boolean;
}

export type StyledButtonProps = StyledSystemProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: string | string[];
    isSelected?: boolean;
    isValid?: boolean;
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
    border: "none",
  },
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  variant({
    variants: {
      solid: {
        bg: "#fff",
      },
      outline: {
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "50px",
        transition: "all 0.2s ease-in-out",
      },
    },
  }),
  props => {
    if (props.variant === "outline" && !props.isDisabled) {
      return {
        "&:hover": {
          background: "#fff",
          color: props.theme.colors.secondary,
          transition: "all 0.2s ease-in-out",
          boxShadow: `0px 2px 2px 1px ${props.theme.colors.secondary}`,
        },
      };
    }
  },
);

const solid_button_hover = (props: any) => `
  background: #fff;
  color: ${props.theme.colors.secondary};
  transition: all 0.2s ease-in-out;
`;

export const StyledButton = styled(StyledSystemButton)<StyledButtonProps>`
  &:hover {
    cursor: ${props => (props.disabled ? "default" : "pointer")};
  }

  ${props =>
    props.variant === "outline" &&
    props.isSelected &&
    css`
      color: ${props.theme.colors.secondary};
      background: #fff;
      box-shadow: 0px 2px 2px 1px ${props.theme.colors.secondary};
    `}

  ${props =>
    props.variant === "outline" &&
    props.isValid &&
    css`
      color: #fff;
      background: ${props.theme.colors.success};
    `}

    ${props =>
    props.variant === "solid" &&
    css`
      border: 1px solid #fff;
      background: #ffd9d987;
      color: #fff;
      border-radius: 3px;
      transition: all 0.2s ease-in-out;
    `}

    ${props =>
    props.variant === "solid" &&
    props.disabled &&
    css`
      opacity: 0.5;
    `}

    ${props =>
    props.variant === "solid" &&
    !props.disabled &&
    css`
      &:hover {
        ${solid_button_hover(props)}
      }
    `}

    ${props =>
    props.variant === "solid" &&
    !props.disabled &&
    props.isSelected &&
    css`
      ${solid_button_hover(props)}
    `}
`;

StyledButton.defaultProps = {
  mx: [2, 4],
  my: [2, 3],
  width: ["100%"],
  minWidth: ["150px"],
  flex: ["unset", "unset", "0 0 40%"],
};

export const StyledIconButton = styled(
  StyledSystemButton,
)<StyledIconButtonProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.9;
    transition: opacity 0.2s ease-in-out;
  }
`;
