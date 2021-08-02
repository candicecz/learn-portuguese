import React, {useEffect, useState} from "react";
import {Box, Button, Heading} from "src/components/global";
import {StyledQuizControls, StyledBanner} from "../styles";
import {BsArrowRight} from "react-icons/bs";
import {getRandomNum} from "src/utils/helpers";

interface QuizControlsProps {
  isAnswerCorrect: boolean;
  isMuted: boolean;
  isSelectionMade: boolean;
  showAnswer: boolean;
  setShowAnswer: (args: boolean) => void;
  resetQuestion: () => void;
}

const QuizControls: React.FC<QuizControlsProps> = ({
  isAnswerCorrect,
  isMuted,
  isSelectionMade,
  showAnswer,
  setShowAnswer,
  resetQuestion,
}) => {
  const [audio] = useState(new Audio("bing.mp3"));
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

  const playAudio = () => {
    audio.volume = 0.2;
    // if the user has selected and entered the correct answer, play a success sound(only if unmuted).
    if (!isMuted && isAnswerCorrect && !showAnswer) {
      audio.play();
    }
  };

  return (
    <StyledQuizControls animate={showAnswer && !isAnswerCorrect}>
      <Button
        variant={"solid"}
        disabled={!isSelectionMade}
        isSelected={showAnswer}
        onClick={() => {
          !showAnswer ? setShowAnswer(true) : resetQuestion();
          playAudio();
        }}
      >
        <Box width={"100%"} justifyContent={"center"} position={"relative"}>
          <Heading color={"inherit"}>
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
