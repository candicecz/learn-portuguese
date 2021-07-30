import React, {useEffect, useState} from "react";
import {StyledMain, StyledMainProps, StyledControls} from "./styles";
import {DataProps} from "src/pages/index";
import Quiz from "src/components/Quiz";
import Scoreboard from "src/components/Scoreboard";
import VolumeControl from "src/components/VolumeControl";
import DifficultyControl from "src/components/DifficultyControl";
import {Box, Loading} from "src/components/global";
import {useOptions} from "src/hooks/useOptions";

interface MainProps extends StyledMainProps {
  data: DataProps[];
  toggleHardMode: () => void;
}

const answer = {rank: 1, portuguese: "não", english: "not"};

const Main: React.FC<MainProps> = ({
  children,
  data,
  toggleHardMode,
  ...props
}) => {
  // Default to sound off.
  const [isMuted, setIsMuted] = useState(true);
  // Default to easy mode.
  const [isHardMode, setIsHardMode] = useState(false);
  const [score, setScore] = useState(0);
  const {options, setOptions} = useOptions(Array(4));

  useEffect(() => {
    setOptions(data);
  }, [data, setOptions]);

  return (
    <>
      <Scoreboard />
      {/* [TO DO] add instructions */}
      <StyledMain>
        {!data ? (
          <Loading />
        ) : (
          <>
            <StyledControls>
              <Box flexDirection={"column"}>
                <VolumeControl isMuted={isMuted} setIsMuted={setIsMuted} />
                <DifficultyControl
                  isHardMode={isHardMode}
                  setIsHardMode={() => {
                    setIsHardMode(!isHardMode);
                    // update data with harder questions
                    toggleHardMode();
                  }}
                />
              </Box>
            </StyledControls>
            <Quiz isMuted={isMuted} options={options} />
          </>
        )}
      </StyledMain>
    </>
  );
};

export default Main;
