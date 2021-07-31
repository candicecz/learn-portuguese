import React, {useState, useEffect, useCallback} from "react";
import Scores from "./components/Scores";
import {Box, Heading} from "src/components/global";
import {StyledScoreBoard, StyledScoreDrawer} from "./styles";
import {useLocalStorage} from "src/hooks/useLocalStorage";

export interface ScoreBoardProps {
  score: number;
  streak: number;
}

const Scoreboard: React.FC<ScoreBoardProps> = props => {
  const {score, streak} = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [localStorage, setLocalStorage] = useLocalStorage("scoreboard", {
    score,
    streak,
  });

  const handleLocalStorage = useCallback(() => {
    setLocalStorage((prev: any) => {
      let scoreboard = {...prev};
      if (score > prev.score) {
        scoreboard = {...scoreboard, score};
      }
      if (streak > prev.streak) {
        scoreboard = {...scoreboard, streak};
      }
      return scoreboard;
    });
  }, [score, setLocalStorage, streak]);
  useEffect(() => handleLocalStorage(), [handleLocalStorage, score, streak]);

  return (
    <Box position={"relative"}>
      <StyledScoreBoard
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <Scores {...props} />
      </StyledScoreBoard>
      {openDrawer && (
        <StyledScoreDrawer>
          <StyledScoreBoard
            flexDirection={["column", "row"]}
            alignItems={"center"}
            onClick={() => {
              setOpenDrawer(!openDrawer);
            }}
          >
            <Box flex={1}>
              <Heading variant={"sm"}>Your Best Scores</Heading>
            </Box>
            <Box flexDirection={"column"}>
              <Scores score={localStorage.score} streak={localStorage.streak} />
            </Box>
          </StyledScoreBoard>
        </StyledScoreDrawer>
      )}
    </Box>
  );
};

export default Scoreboard;
