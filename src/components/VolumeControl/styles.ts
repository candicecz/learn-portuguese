import styled from "@emotion/styled";
import {Box} from "src/components/global";

interface StyledVolumeControlProps {}
export const StyledVolumeControl = styled(Box)<StyledVolumeControlProps>``;

StyledVolumeControl.defaultProps = {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1000,
};
