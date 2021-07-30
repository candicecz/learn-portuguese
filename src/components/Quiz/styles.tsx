import styled from "@emotion/styled";
import {Box, Button} from "src/components/global";
export interface StyledQuizProps {}

export const StyledQuiz = styled(Box)<StyledQuizProps>`
  flex-direction: column;
  width: 100%;
  > * {
    flex: 1;
  }
`;

StyledQuiz.defaultProps = {
  px: [0, 0, 6, "10%"],
  flex: 1,
};

export const StyledMultipleChoice = styled(Box)(props => {
  return {flexWrap: "wrap", justifyContent: "center"};
});

StyledMultipleChoice.defaultProps = {
  px: [4, 5, 4, "15%"],
  width: "100%",
  flex: [1, "unset"],
};

export const StyledMainWord = styled(Box)(props => {
  return {};
});

StyledMainWord.defaultProps = {
  flexDirection: "column",
  position: "relative",
};

export const StyledLine = styled(Box)`
  opacity: ${props => props.opacity};
`;

StyledLine.defaultProps = {
  width: "100%",
  height: "2px",
  background: "#fff",
};

export const StyledIcon = styled(Box)``;
StyledIcon.defaultProps = {
  position: "absolute",
  width: "100%",
  justifyContent: "center",
};

export const StyledQuizControls = styled(Box)(props => {
  return {};
});

StyledQuizControls.defaultProps = {};

export const StyledChoiceButton = styled(Button)``;

StyledChoiceButton.defaultProps = {};
