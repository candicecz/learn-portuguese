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
}

const Quiz: React.FC<QuizProps> = ({isMuted, options}) => {
  const [answer, setAnswer] = useState<Option | null>(null);
  // Where null state corresponds to waiting for a selection.
  const [selection, setSelection] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // The language in which the main word is in that the user must guess the meaning.
  const [guessPortugueseWord, setGuessPortugueseWord] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    setAnswer(() => {
      if (options) {
        // Select a random option for the answer.
        return options[getRandomNum(options.length)];
      }
      return null;
    });
  }, [options]);

  const handleReset = useCallback(() => {
    setGuessPortugueseWord(Math.random() < 0.5);
    setSelection(null);
    setShowAnswer(false);
    theme.colors.updateGradient();
  }, []);

  useEffect(() => {
    // Decide randomly whether to show word in portuguese or english each time.
    handleReset();
  }, [handleReset]);

  return !answer ? null : (
    <StyledQuiz>
      <Box justifyContent={"center"}>
        <Choice
          word={answer.portuguese}
          isMuted={isMuted}
          isPortugueseWord={guessPortugueseWord}
          variant={"none"}
          mb={0}
        >
          <MainWord isInPortuguese={guessPortugueseWord} isMuted={isMuted}>
            {guessPortugueseWord ? answer.portuguese : answer.english}
          </MainWord>
        </Choice>
      </Box>
      <StyledMultipleChoice>
        {options.map(o => {
          // if answer is in portuguese, we show options in english and vice versa.
          let word = guessPortugueseWord ? o.english : o.portuguese;
          let answer_translation = guessPortugueseWord
            ? answer.english
            : answer.portuguese;
          return (
            <Choice
              key={o.rank}
              word={word}
              isMuted={isMuted}
              isPortugueseWord={!guessPortugueseWord}
              onClick={() => !showAnswer && setSelection(word)}
              isSelected={word === selection}
              isValid={showAnswer && word === answer_translation}
              disabled={!!showAnswer}
            >
              {word}
            </Choice>
          );
        })}
      </StyledMultipleChoice>
      {/* Submit Answer */}
      <QuizControls
        isSelectionMade={!!selection}
        resetQuestion={handleReset}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />
    </StyledQuiz>
  );
};

export default Quiz;
