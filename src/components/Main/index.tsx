import React from "react";
import {StyledMain, StyledMainProps} from "./styles";
import {Heading} from "src/components/global";

interface MainProps extends StyledMainProps {}

const Main: React.FC<MainProps> = ({children}) => {
  return (
    <StyledMain flex={1} justifyContent={"center"}>
      <Heading
        fontFamily={"Muli-Bold"}
        fontSize={["4rem", "6rem"]}
        opacity={0.8}
        textAlign={"center"}
      >
        Big Word
      </Heading>
    </StyledMain>
  );
};

export default Main;
