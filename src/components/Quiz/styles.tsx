import styled from "@emotion/styled";
import {Box} from "src/components/global";
export interface StyledQuizProps {}

export const StyledQuiz = styled(Box)<StyledQuizProps>`
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const StyledMultipleChoice = styled(Box)(props => {
  return {
    flexDirection: "column",
  };
});

StyledMultipleChoice.defaultProps = {
  px: [4, 6],
  width: "100%",
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
  bottom: 0,
};
