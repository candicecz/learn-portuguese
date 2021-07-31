import styled from "@emotion/styled";
import {css, keyframes} from "@emotion/react";
import {Box, Button, Heading} from "src/components/global";
export interface StyledQuizProps {}

export const StyledQuiz = styled(Box)<StyledQuizProps>`
  flex-direction: column;
  width: 100%;
  overflow: hidden;
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

export const StyledMainWord = styled(Box)``;

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

export const StyledChoiceButton = styled(Button)``;

StyledChoiceButton.defaultProps = {};

interface StyledQuizControlsProps {
  animate: boolean;
}

export const StyledBanner = styled(Box)<StyledQuizControlsProps>`
  position: absolute;
  top: 0;
  right: 0;
  text-transform: capitalize;
  ${props =>
    props.animate &&
    css`
      animation: ${slideIn} 1s ease 1;
      transform: translate3d(0, -50px, 0);
    `};
`;

StyledBanner.defaultProps = {};

export const StyledQuizControls = styled(Box)<StyledQuizControlsProps>`
  ${props =>
    props.animate &&
    css`
      animation: ${shake} 1s ease 1;
    `};
`;

StyledQuizControls.defaultProps = {
  mt: [2, 4],
  width: "100%",
  p: [4],
  justifyContent: "center",
  alignItems: ["flex-start", "center"],
};

export const StyledHeading = styled(Heading)``;

StyledHeading.defaultProps = {
  fontFamily: "Muli-Bold",
  fontSize: ["12vw", "6rem"],
  textAlign: "center",
  opacity: 0.8,
  position: "relative",
};

// Keyframe definitions.

const shake = keyframes`
  from, 20%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(30px, 0, 0);
  }

  70% {
    transform: translate3d(-15px, 0, 0);
  }

  90% {
    transform: translate3d(-10px, 0, 0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translate3d(0,0,0);
    opacity:0;
  }

  50%,to {
    transform: translate3d(0,-50px,0);
  }
`;
