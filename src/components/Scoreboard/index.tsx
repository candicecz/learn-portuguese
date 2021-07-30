import React from "react";
import {Box, Heading, Text} from "src/components/global";
import Image from "next/image";
import fire from "../../../public/fire.png";
import {StyledScoreBoard} from "./styles";

interface ScoreBoardProps {
  score: number;
  streak: number;
}

const Scoreboard: React.FC<ScoreBoardProps> = ({score, streak}) => {
  return (
    <StyledScoreBoard px={[3, 4]} py={[1, 2]} justifyContent={"space-between"}>
      <Heading variant={["xs", "sm"]}>Score: {score}</Heading>
      <Box>
        <Box
          background={"#ffffff80"}
          width={"1.5rem"}
          height={"1.5rem"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"50%"}
          mr={2}
        >
          <Box width={"1rem"} height={"1rem"} position="relative">
            <Image layout={"fill"} src={fire} alt="Picture of the author" />
          </Box>
        </Box>
        <Heading variant={["xs", "sm"]}>Streak: {streak}</Heading>
      </Box>
    </StyledScoreBoard>
  );
};

export default Scoreboard;
