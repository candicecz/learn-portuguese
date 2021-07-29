import React, {useEffect, useState} from "react";
import {StyledQuiz, StyledQuizProps, StyledMultipleChoice} from "./styles";
import Choice from "./components/Choice";
import MainWord from "./components/MainWord";

type Option = {
  rank: number;
  portuguese: string;
  english: string;
};
interface QuizProps extends StyledQuizProps {
  answer: Option;
  options: Option[];
  isMuted: boolean;
}

const Quiz: React.FC<QuizProps> = ({children, isMuted, answer, options}) => {
  const [selection, setSelection] = useState<string | null>(null);
  // Where null state corresponds to waiting for an answer.
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  // The language in which the main word is in that the user must guess the meaning.
  const [guessPortugueseWord, setGuessPortugueseWord] = useState(true);

  useEffect(() => {
    // Decide randomly whether to show word in portuguese or english each time.
    setGuessPortugueseWord(Math.random() < 0.5);
  }, []);

  return (
    <StyledQuiz>
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
      <StyledMultipleChoice>
        {options.map(o => {
          // if answer is in portuguese, we show options in english and vice versa.
          let word = guessPortugueseWord ? o.english : o.portuguese;
          return (
            <Choice
              key={o.rank}
              word={word}
              isMuted={isMuted}
              isPortugueseWord={!guessPortugueseWord}
              onClick={() => setSelection(word)}
              // isCorrect={true}
            >
              {word}
            </Choice>
          );
        })}
      </StyledMultipleChoice>
      {/* Submit Answer */}
    </StyledQuiz>
  );
};

export default Quiz;
