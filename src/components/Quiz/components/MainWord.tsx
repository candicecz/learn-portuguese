import React from "react";
import {StyledMainWord, StyledLine, StyledIcon, StyledHeading} from "../styles";
import {Heading} from "src/components/global";
import {BsFillVolumeUpFill} from "react-icons/bs";

interface MainWordProps {
  isInPortuguese: boolean;
  isMuted: boolean;
}

const MainWord: React.FC<MainWordProps> = ({
  children,
  isMuted,
  isInPortuguese,
}) => {
  return (
    <StyledMainWord>
      <StyledHeading>
        {children}
        {isInPortuguese && (
          <StyledLine opacity={isMuted ? 0.25 : 0.8}></StyledLine>
        )}
        {isInPortuguese && (
          <StyledIcon>
            <Heading variant={"sm"} opacity={isMuted ? 0.25 : 0.8}>
              <BsFillVolumeUpFill />
            </Heading>
          </StyledIcon>
        )}
      </StyledHeading>
    </StyledMainWord>
  );
};

export default MainWord;
