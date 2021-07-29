import React from "react";
import {Button} from "src/components/global";
import {useAudioPlayback} from "../hooks/useAudioPlayback";

interface AnswerOptionProps {
  // hasAudio
  word: string;
  isLanguagePortuguese: boolean;
  isCorrect: boolean;
  isMuted: boolean;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  word,
  isLanguagePortuguese,
  children,
  isCorrect,
  isMuted,
}) => {
  const {getOnMouseDownProps, getOnClickProps} = useAudioPlayback();
  // only play audio if word is in portuguese and audio is turned on.
  let text = !isMuted && isLanguagePortuguese ? word : null;
  return (
    <Button
      aria-label={word}
      // only play audio if word is in portuguese and audio is turned on.
      {...getOnMouseDownProps({
        text,
      })}
      {...getOnClickProps({
        text,
      })}
    >
      {children}
    </Button>
  );
};

export default AnswerOption;
