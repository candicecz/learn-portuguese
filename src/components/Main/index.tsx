import React, {useState} from "react";
import {StyledMain, StyledMainProps} from "./styles";
import Quiz from "src/components/Quiz";
import Scoreboard from "src/components/Scoreboard";
import VolumeControl from "../VolumeControl";

interface MainProps extends StyledMainProps {}

const answer = {rank: 1, portuguese: "não", english: "not"};
const options = [
  {rank: 1, portuguese: "não", english: "not"},
  {rank: 3, portuguese: "é", english: "it's"},
  {rank: 4, portuguese: "você", english: "you"},
  {rank: 5, portuguese: "também", english: "also"},
];

const Main: React.FC<MainProps> = ({children, ...props}) => {
  // Default to sound off.
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      <Scoreboard />
      <StyledMain>
        <VolumeControl isMuted={isMuted} setIsMuted={setIsMuted} />
        <Quiz isMuted={isMuted} answer={answer} options={options} />
      </StyledMain>
    </>
  );
};

export default Main;
