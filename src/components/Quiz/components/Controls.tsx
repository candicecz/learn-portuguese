import {useTheme} from "@emotion/react";
import React from "react";
import {Box, Button} from "src/components/global";

interface QuizControlsProps {
  answerIsSelected: boolean;
}

const QuizControls: React.FC<QuizControlsProps> = ({answerIsSelected}) => {
  const {theme} = useTheme();

  return (
    <Box mt={4}>
      <Button
        variant={"solid"}
        disabled={!answerIsSelected}
        onClick={() => {
          // if (isAnswerCorrect !== null) {
          //   theme.colors.updateGradient();
          //   setIsAnswerCorrect(null);
          // }
        }}
      >
        check
        {/* {isAnswerCorrect === null ? "Check answer" : "Next Question"} */}
      </Button>
    </Box>
  );
};

export default QuizControls;
