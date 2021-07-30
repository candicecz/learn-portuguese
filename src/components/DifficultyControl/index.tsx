import React from "react";
import {Heading, IconButton} from "src/components/global";
import {GiBurningSkull} from "react-icons/gi";

interface DifficultyControlProps {
  isHardMode: boolean;
  setIsHardMode: () => void;
}

// Controls for user so they can toggle the difficulty(easy/hard).
const DifficultyControl: React.FC<DifficultyControlProps> = ({
  isHardMode,
  setIsHardMode,
}) => {
  return (
    <IconButton
      aria-label={"Button for difficulty."}
      onClick={() => setIsHardMode()}
      height={"100%"}
      opacity={!isHardMode ? 0.7 : 1}
    >
      <Heading m={0} variant={"md"}>
        <GiBurningSkull />
      </Heading>
    </IconButton>
  );
};
export default DifficultyControl;
