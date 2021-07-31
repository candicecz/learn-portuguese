import React, {useEffect, useState} from "react";
import {StyledMain, StyledMainProps, StyledControls} from "./styles";
import {DataProps} from "src/pages/index";
import Quiz from "src/components/Quiz";
import Scoreboard from "src/components/Scoreboard";
import VolumeControl from "src/components/VolumeControl";
import DifficultyControl from "src/components/DifficultyControl";
import {Box, Loading} from "src/components/global";
import {useOptions} from "src/hooks/useOptions";
import Instructions from "../Instructions";

interface MainProps extends StyledMainProps {
  data: DataProps[];
  toggleHardMode: () => void;
}

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
  // Handles scoreboard.
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const {options, setOptions} = useOptions(Array(4));

  useEffect(() => {
    setOptions(data);
  }, [data, setOptions]);

  const handleScore = (pointValue: number) => {
    setScore(score + pointValue);
    setStreak(pointValue > 0 ? streak + pointValue : pointValue);
  };

  return (
    <>
      <Scoreboard score={score} streak={streak} />
      <StyledMain>
        {!data ? (
          <Loading />
        ) : (
          <>
            <Instructions></Instructions>
            <StyledControls>
              <VolumeControl isMuted={isMuted} setIsMuted={setIsMuted} />
              <DifficultyControl
                isHardMode={isHardMode}
                setIsHardMode={() => {
                  setIsHardMode(!isHardMode);
                  // update data with harder questions
                  toggleHardMode();
                }}
              />
            </StyledControls>
            <Quiz
              isMuted={isMuted}
              options={options}
              handleScore={handleScore}
              getNextQuestion={() => setOptions(data)}
            />
          </>
        )}
      </StyledMain>
    </>
  );
};

export default Main;
