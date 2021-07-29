import React from "react";
import {Button} from "src/components/global";
import {StyledQuizControls} from "../styles";

interface QuizControlsProps {
  isSelectionMade: boolean;
  showAnswer: boolean;
  setShowAnswer: (args: boolean) => void;
  resetQuestion: () => void;
}

const QuizControls: React.FC<QuizControlsProps> = ({
  isSelectionMade,
  showAnswer,
  setShowAnswer,
  resetQuestion,
}) => {
  return (
    <StyledQuizControls mt={4} width={"100%"} p={4} justifyContent={"center"}>
      <Button
        variant={"solid"}
        disabled={!isSelectionMade}
        onClick={() => {
          if (!showAnswer) {
            console.log(1);
            setShowAnswer(true);
          } else {
            console.log(2);

            resetQuestion();
          }
        }}
      >
        {showAnswer ? "Next Question" : "Check Answer"}
      </Button>
    </StyledQuizControls>
  );
};

export default QuizControls;
