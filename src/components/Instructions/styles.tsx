import {Box} from "src/components/global";
import styled from "@emotion/styled";

export const StyledInstructionsWrapper = styled(Box)``;

StyledInstructionsWrapper.defaultProps = {
  position: "absolute",
  width: "100%",
  p: [2],
  zIndex: 100,
  justifyContent: "center",
  top: 0,
};

export const StyledInstructions = styled(Box)`
  width: 100%;
  justify-content: center;
  background: ${props => props.theme.colors.gradient};
`;

StyledInstructions.defaultProps = {
  border: "1px solid #fff",
  p: [3],
  position: "relative",
  flexDirection: "column",
  maxWidth: "500px",
};

export const StyledClose = styled(Box)``;
StyledClose.defaultProps = {
  position: "absolute",
  top: 0,
  right: 0,
};

export const StyledTextBox = styled(Box)``;
StyledTextBox.defaultProps = {
  flexDirection: "column",
};
