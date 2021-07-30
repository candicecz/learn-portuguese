import styled from "@emotion/styled";
import {Box, Button} from "src/components/global";

export interface StyledScoreBoardProps {}

export const StyledScoreBoard = styled(Button)<StyledScoreBoardProps>`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }
`;

StyledScoreBoard.defaultProps = {
  mx: 0,
  my: 0,
  width: ["100%"],
  minWidth: "unset",
  flex: "unset",
  px: [3, 4],
  py: [1, 2],
  display: "flex",

  justifyContent: "space-between",
};

export const StyledScoreDrawer = styled(Box)<StyledScoreBoardProps>`
  transform: translate(0, 100%);
  border-top: 2px solid ${props => props.theme.colors.secondary};
  border-bottom: 2px solid ${props => props.theme.colors.secondary};

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => props.theme.colors.secondary};
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: -1;
  }
`;

StyledScoreDrawer.defaultProps = {
  position: "absolute",
  flexDirection: "column",
  alignItems: "flex-start",
  bottom: 0,
  width: "100%",
  zIndex: 100,
};

export interface StyledIconWrapperProps {}

export const StyledIconWrapper = styled(Box)<StyledIconWrapperProps>``;
StyledIconWrapper.defaultProps = {
  background: "#ffffff80",
  width: "1.5rem",
  height: "1.5rem",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  mr: 2,
};
