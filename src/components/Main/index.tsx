import React, {useEffect, useState} from "react";
import {StyledMain, StyledMainProps} from "./styles";
import {Box, Heading} from "src/components/global";
import {useTheme} from "@emotion/react";

import Quiz from "src/components/Quiz";
import Scoreboard from "src/components/Scoreboard";
import {BsFillVolumeMuteFill, BsFillVolumeUpFill} from "react-icons/bs";
import VolumeControl from "../VolumeControl";

interface MainProps extends StyledMainProps {}

const Main: React.FC<MainProps> = ({children, ...props}) => {
  const theme = useTheme();
  // answerIsValid state if answer.english = option.text.english null, true, false // or portuguese

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);

  // Default to sound off.
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      <Scoreboard />
      <VolumeControl isMuted={isMuted} setIsMuted={setIsMuted} />
      <Quiz isMuted={isMuted} />
      <Box mt={4}>
        <button onClick={() => theme.colors.updateGradient()}>
          {isAnswerCorrect === null ? "Check answer" : "Next Question"}
        </button>
      </Box>
    </>
  );
};

export default Main;
