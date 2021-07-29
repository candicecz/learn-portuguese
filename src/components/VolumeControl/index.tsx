import React from "react";
import {Heading, IconButton} from "src/components/global";
import {BsFillVolumeMuteFill, BsFillVolumeUpFill} from "react-icons/bs";
import {StyledVolumeControl} from "./styles";

interface VolumeControlProps {
  isMuted: boolean;
  setIsMuted: (arg: boolean) => void;
}

// Controls for user so they can toggle the volume on and off. Defaults to off.
const VolumeControl: React.FC<VolumeControlProps> = ({isMuted, setIsMuted}) => {
  return (
    <StyledVolumeControl>
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
    </StyledVolumeControl>
  );
};
export default VolumeControl;
