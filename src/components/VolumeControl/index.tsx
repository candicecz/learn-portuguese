import React, {useState} from "react";
import {Box, Heading, IconButton} from "src/components/global";

import {BsFillVolumeMuteFill, BsFillVolumeUpFill} from "react-icons/bs";

interface VolumeControlProps {
  isMuted: boolean;
  setIsMuted: (arg: boolean) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({isMuted, setIsMuted}) => {
  // answerIsValid state if answer.english = option.text.english null, true, false // or portuguese

  return (
    <Box width={"100%"} height={"4rem"} justifyContent={"flex-end"} p={2}>
      <IconButton
        aria-label={"Button for volume control."}
        onClick={() => setIsMuted(!isMuted)}
        height={"100%"}
        opacity={isMuted ? 0.5 : 1}
      >
        <Heading variant={"md"} m={0}>
          {isMuted ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
        </Heading>
      </IconButton>
    </Box>
  );
};
export default VolumeControl;
