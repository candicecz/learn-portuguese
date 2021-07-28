import React, {useState} from "react";
import {StyledMain, StyledMainProps} from "./styles";
import {Box, Heading} from "src/components/global";
import AnswerOption from "src/components/AnswerOption";
import {useTheme} from "@emotion/react";

interface MainProps extends StyledMainProps {
  // answer : {portuguese: "", english:""}
  // options: answer[]
}

const Main: React.FC<MainProps> = ({children}) => {
  const theme = useTheme();

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);
  // answerIsValid state if answer.english = option.text.english null, true, false // or portuguese
  // Might put below in separate quiz component
  // answer in Portugues or english state. show audio on different elements depending on that state.
  return (
    <StyledMain flex={1} justifyContent={"center"}>
      <Heading
        fontFamily={"Muli-Bold"}
        fontSize={["3rem", "6rem"]}
        opacity={0.8}
        textAlign={"center"}
      >
        Big Word
      </Heading>
      {/* <Box> */}
      {/* map through options */}
      {/* <button> */}
      <AnswerOption />
      {/* </button> */}
      {/* </Box> */}
      <Box mt={4}>
        {/* map through options */}
        <button onClick={() => theme.colors.updateGradient()}>
          {isAnswerCorrect === null ? "Check answer" : "Next Question"}
        </button>
      </Box>
    </StyledMain>
  );
};

export default Main;
