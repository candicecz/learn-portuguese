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
  height: ["unset", "calc(100vh - 80px)"],
};
export const StyledScroll = styled(Box)`
  overflow-y: auto;
  flex-direction: column;
  height: 100%;
  flex: 1;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fffefe7d;
    border-radius: 100px;
    margin: 2rem 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffffad;
    border-radius: 100px;
  }
`;

export const StyledInstructions = styled(Box)`
  width: 100%;
  justify-content: center;
  background: ${props => props.theme.colors.gradient};
`;

StyledInstructions.defaultProps = {
  border: "1px solid #fff",
  px: [3, 4, 6],
  py: [3, 4, 5],

  pr: [2],

  position: "relative",
  flexDirection: "column",
  maxWidth: ["500px", "500px", "800px"],
  height: ["calc(100vh - 70px)", "unset"],
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
