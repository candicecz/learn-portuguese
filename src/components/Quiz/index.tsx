import React, {useEffect, useCallback, useState} from "react";
import {StyledQuiz, StyledQuizProps, StyledMultipleChoice} from "./styles";
import Choice from "./components/Choice";
import MainWord from "./components/MainWord";
import QuizControls from "./components/Controls";
import {useTheme} from "@emotion/react";
import {Box} from "src/components/global";
import {getRandomNum} from "src/utils/helpers";

type Option = {
  rank: number;
  portuguese: string;
  english: string;
};
interface QuizProps extends StyledQuizProps {
  options: Option[];
  isMuted: boolean;
  handleScore: (arg: number) => void;
  getNextQuestion: () => void;
}

const Quiz: React.FC<QuizProps> = ({
  isMuted,
  options,
  getNextQuestion,
  handleScore,
}) => {
  const [answer, setAnswer] = useState<Option | null>(null);
  // Where null state corresponds to waiting for a selection.
  const [selection, setSelection] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // The language in which the main word is in that the user must guess the meaning.
  const [guessPortugueseWord, setGuessPortugueseWord] = useState(true);
  const theme = useTheme();

  const handleReset = () => {
    setGuessPortugueseWord(Math.random() < 0.5);
    setSelection(null);
    setShowAnswer(false);
  };

  const isAnswerCorrect = (value: string, answer: Option) => {
    if (!answer || !value) {
      return false;
    }
    return guessPortugueseWord
      ? answer.english === value
      : answer.portuguese === value;
  };

  useEffect(() => {
    // Reset quiz state.
    handleReset();
    // Select a random option for the answer.
    setAnswer(() => (options ? options[getRandomNum(options.length)] : null));
  }, [options]);

  return !answer ? null : (
    <StyledQuiz>
      <Box justifyContent={"center"}>
        <Choice
          word={answer.portuguese}
          isMuted={isMuted}
          isPortugueseWord={guessPortugueseWord}
          variant={"none"}
          mb={0}
          disabled={isMuted || !guessPortugueseWord} // disable if muted or word is in english
        >
          <MainWord isInPortuguese={guessPortugueseWord} isMuted={isMuted}>
            {guessPortugueseWord ? answer.portuguese : answer.english}
          </MainWord>
        </Choice>
      </Box>
      <StyledMultipleChoice>
        {options.map(o => {
          // if answer is in portuguese, we show options in english and vice versa.
          const word = guessPortugueseWord ? o.english : o.portuguese;
          return (
            <Choice
              key={o.rank}
              word={word}
              isMuted={isMuted}
              isPortugueseWord={!guessPortugueseWord}
              onClick={() => !showAnswer && setSelection(word)}
              isSelected={word === selection}
              isValid={showAnswer && isAnswerCorrect(word, answer)}
              isDisabled={!!showAnswer}
            >
              {word}
            </Choice>
          );
        })}
      </StyledMultipleChoice>
      {/* Submit Answer */}
      <QuizControls
        isMuted={isMuted}
        isSelectionMade={!!selection}
        isAnswerCorrect={isAnswerCorrect(selection!, answer)}
        resetQuestion={() => {
          getNextQuestion();
          theme.colors.updateGradient();
          // Update points when next question appears. (could put this in setShowAnswer prop if you want it to update the score as soon as the answer appears)
          const points = isAnswerCorrect(selection!, answer) ? 1 : 0;
          handleScore(points);
        }}
        showAnswer={showAnswer}
        setShowAnswer={show => {
          if (!selection) {
            return;
          }
          setShowAnswer(show);
        }}
      />
    </StyledQuiz>
  );
};

export default Quiz;
