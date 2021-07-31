import React from "react";
import {
  StyledInstructions,
  StyledClose,
  StyledTextBox,
  StyledInstructionsWrapper,
} from "./styles";
import {
  Box,
  Heading,
  IconButton,
  StyledIconWrapper,
} from "src/components/global";
import {CgCloseR} from "react-icons/cg";
import {GiBurningSkull} from "react-icons/gi";
import {BsFillVolumeUpFill} from "react-icons/bs";
import Image from "next/image";
import portugal from "../../../public/portugal.svg";
import {useLocalStorage} from "src/hooks/useLocalStorage";

const Instructions = () => {
  // const [showInstructions, setShowInstructions] = useState(true);
  const [showInstructions, setShowInstructions] = useLocalStorage(
    "showInstructions",
    true,
  );

  return showInstructions === false ? null : (
    <StyledInstructionsWrapper>
      <StyledInstructions>
        {/* close instructions */}
        <StyledClose>
          <IconButton
            onClick={() => {
              setShowInstructions(false);
            }}
          >
            <Heading m={1} variant={"sm"}>
              <CgCloseR />
            </Heading>
          </IconButton>
        </StyledClose>
        {/* header */}
        <Box flexDirection={["column", "row"]} justifyContent={["center"]}>
          <StyledIconWrapper
            width={"2rem"}
            minWidth={"2rem"}
            height={"2rem"}
            mr={3}
          >
            <Box width={"1.2rem"} height={"1.2rem"} position="relative" p={2}>
              <Image layout={"fill"} src={portugal} alt="Portugal flag." />
            </Box>
          </StyledIconWrapper>
          <Heading variant={["sm", "md"]} my={2} textAlign={"center"}>
            Become a Portuguese mestra(e).
          </Heading>
        </Box>

        <StyledTextBox>
          <Heading variant={"xs"} my={2}>
            Learn 1000 of the most common Portuguese words and become a fluent
            speaker quickly.
          </Heading>
          <Box flexDirection={"column"} alignItems={"flex-start"}>
            <Heading variant={"sm"} m={0}>
              How it works:
            </Heading>
            <Heading variant={"xs"} mt={0}>
              A word will appear in the center of the screen in either English
              or Portuguese. Choose the correct translation from the options
              below.
            </Heading>
          </Box>
          <Box flexDirection={"column"} alignItems={"flex-start"}>
            <Heading variant={"md"} m={0}>
              <BsFillVolumeUpFill />
            </Heading>
            <Heading variant={"xs"} mt={0}>
              Press and hold any Portuguese word to hear it slowed down. Make
              sure the sound is on first though.
            </Heading>
            <Heading variant={"md"} m={0}>
              <GiBurningSkull />
            </Heading>
            <Heading variant={"xs"} mt={0}>
              If you&apos;re feeling particularly diabólica(o), give hard mode a
              try.
              <br /> Tap on the score board to view your best attempts.
            </Heading>
          </Box>

          <Heading variant={"xs"} my={[1, 2]}>
            Boa sorte!
          </Heading>
        </StyledTextBox>
      </StyledInstructions>
    </StyledInstructionsWrapper>
  );
};

export default Instructions;
