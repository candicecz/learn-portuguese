import styled from "@emotion/styled";
import {Box} from "src/components/global";

export interface StyledScoreBoardProps {}

export const StyledScoreBoard = styled(Box)<StyledScoreBoardProps>`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }
`;
