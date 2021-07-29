import React, {useEffect, useState} from "react";
import {StyledQuiz, StyledQuizProps} from "./styles";
import {Heading} from "src/components/global";
import AnswerOption from "src/components/AnswerOption";

interface QuizProps extends StyledQuizProps {
  // answer : {portuguese: "", english:""}
  // options: answer[]
  isMuted: boolean;
}

const answer = {rank: 1, portuguese: "não", english: "not"};
const words = [
  {rank: 1, portuguese: "não", english: "not"},
  {rank: 2, portuguese: "de", english: "in"},
  {rank: 3, portuguese: "é", english: "it's"},
  {rank: 4, portuguese: "você", english: "you"},
  {rank: 5, portuguese: "também", english: "also"},
];
const Quiz: React.FC<QuizProps> = ({children, isMuted}) => {
  const [showPortugueseWord, setShowPortugueseWord] = useState(false);

  useEffect(() => {
    // Decide randomly whether to show word in portuguese or english each time.
    setShowPortugueseWord(Math.random() < 0.5);
  }, []);

  // answer in Portugues or english state. show audio on different elements depending on that state.
  return (
    <StyledQuiz flex={1} justifyContent={"center"}>
      <Heading
        fontFamily={"Muli-Bold"}
        fontSize={["3rem", "6rem"]}
        opacity={0.8}
        textAlign={"center"}
      >
        {showPortugueseWord ? answer.portuguese : answer.english}
      </Heading>

      {words.map(w => {
        return (
          <AnswerOption
            key={w.rank}
            word={w.portuguese}
            isLanguagePortuguese={!showPortugueseWord}
            isCorrect={true}
            isMuted={isMuted}
          >
            {/* if answer is in portuguese, we show options in english and vice versa. */}
            {showPortugueseWord ? w.english : w.portuguese}
          </AnswerOption>
        );
      })}
    </StyledQuiz>
  );
};

export default Quiz;
