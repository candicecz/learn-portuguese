import React from "react";
import {Heading, IconButton} from "src/components/global";
import {BsFillVolumeMuteFill, BsFillVolumeUpFill} from "react-icons/bs";

interface VolumeControlProps {
  isMuted: boolean;
  setIsMuted: (arg: boolean) => void;
}

// Controls for user so they can toggle the volume on and off.
const VolumeControl: React.FC<VolumeControlProps> = ({isMuted, setIsMuted}) => {
  return (
    <IconButton
      aria-label={"Button for volume control."}
      onClick={() => setIsMuted(!isMuted)}
      height={"100%"}
      opacity={isMuted ? 0.7 : 1}
    >
      <Heading variant={"md"} m={0}>
        {isMuted ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
      </Heading>
    </IconButton>
  );
};
export default VolumeControl;
