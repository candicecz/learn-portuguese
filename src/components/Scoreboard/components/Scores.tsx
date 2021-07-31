import React from "react";
import {Box, Heading, StyledIconWrapper} from "src/components/global";
import Image from "next/image";
import fire from "../../../../public/fire.png";
import trophy from "../../../../public/trophy.png";
import {ScoreBoardProps} from "../index";

const Scores: React.FC<ScoreBoardProps> = ({score, streak}) => {
  return (
    <>
      <Box>
        <StyledIconWrapper>
          <Box width={"1.2rem"} height={"1.2rem"} position="relative">
            <Image layout={"fill"} src={trophy} alt="Trophy image." />
          </Box>
        </StyledIconWrapper>

        <Heading variant={["xs", "sm"]}>Score: {score}</Heading>
      </Box>

      <Box>
        <StyledIconWrapper>
          <Box width={"1rem"} height={"1rem"} position="relative">
            <Image layout={"fill"} src={fire} alt="fire image" />
          </Box>
        </StyledIconWrapper>

        <Heading variant={["xs", "sm"]}>Streak: {streak}</Heading>
      </Box>
    </>
  );
};

export default Scores;
