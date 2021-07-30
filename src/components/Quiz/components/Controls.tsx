import React, {useEffect, useState} from "react";
import {Box, Button, Heading} from "src/components/global";
import {StyledQuizControls, StyledBanner} from "../styles";
import {BsArrowRight} from "react-icons/bs";
import {getRandomNum} from "src/utils/helpers";
// import data from "../../public/data/congratulations.json";

interface QuizControlsProps {
  isAnswerCorrect: boolean;
  isSelectionMade: boolean;
  showAnswer: boolean;
  setShowAnswer: (args: boolean) => void;
  resetQuestion: () => void;
}

const QuizControls: React.FC<QuizControlsProps> = ({
  isAnswerCorrect,
  isSelectionMade,
  showAnswer,
  setShowAnswer,
  resetQuestion,
}) => {
  const [data, setData] = useState<string[]>([]);
  const [congrats, setCongrats] = useState<string>("");
  useEffect(() => {
    const getData = () =>
      fetch("data/congratulations.json")
        .then(d => d.json())
        .then(result => setData(result.congratulations));
    getData();
  }, []);

  useEffect(() => {
    setCongrats(data[getRandomNum(data.length)]);
  }, [isAnswerCorrect, data]);

  return (
    <StyledQuizControls animate={showAnswer && !isAnswerCorrect}>
      <Button
        variant={"solid"}
        disabled={!isSelectionMade}
        isSelected={showAnswer}
        onClick={() => (!showAnswer ? setShowAnswer(true) : resetQuestion())}
      >
        <Box width={"100%"} justifyContent={"center"} position={"relative"}>
          <Heading color={"inherit"} p={2} m={2}>
            {showAnswer ? "Next Question" : "Check Answer"}
          </Heading>
          {showAnswer && <BsArrowRight size={"1.5rem"} />}

          {showAnswer && isAnswerCorrect && (
            <StyledBanner animate={showAnswer}>
              <Heading color={"#fff"}>{congrats}!</Heading>
            </StyledBanner>
          )}
        </Box>
      </Button>
    </StyledQuizControls>
  );
};

export default QuizControls;
