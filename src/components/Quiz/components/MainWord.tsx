import React from "react";
import {StyledMainWord, StyledLine, StyledIcon} from "../styles";
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
      <Heading
        fontFamily={"Muli-Bold"}
        fontSize={["3rem", "6rem"]}
        textAlign={"center"}
        opacity={0.8}
      >
        {children}
        {isInPortuguese && (
          <StyledLine opacity={isMuted ? 0.25 : 0.8}></StyledLine>
        )}
      </Heading>
      {isInPortuguese && (
        <StyledIcon>
          <Heading variant={"sm"} opacity={isMuted ? 0.25 : 0.8}>
            <BsFillVolumeUpFill />
          </Heading>
        </StyledIcon>
      )}
    </StyledMainWord>
  );
};

export default MainWord;
