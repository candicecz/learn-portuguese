import styled from "@emotion/styled";
import {Box} from "../global";

export interface StyledMainProps {}

export const StyledMain = styled(Box)<StyledMainProps>``;

StyledMain.defaultProps = {
  position: "relative",
  flex: 1,
  justifyContent: "center",
  flexDirection: "column",
};

interface StyledControlsProps {}
export const StyledControls = styled(Box)<StyledControlsProps>``;

StyledControls.defaultProps = {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1000,
};
