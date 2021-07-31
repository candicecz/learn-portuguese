import React from "react";
import {Button, ButtonProps} from "src/components/global";
import {useAudioPlayback} from "src/hooks/useAudioPlayback";
import {StyledChoiceButton} from "../styles";

interface ChoiceProps extends ButtonProps {
  word: string;
  isPortugueseWord: boolean;
  isCorrect?: boolean;
  isMuted: boolean;
  onClick?: () => void;
  variant?: string;
}

// Possible answer to the quiz question.
const Choice: React.FC<ChoiceProps> = ({
  word,
  children,
  isPortugueseWord,
  isCorrect,
  isMuted,
  onClick,
  variant,
  ...props
}) => {
  // only play audio if word is in portuguese and audio is turned on.
  let text = !isMuted && isPortugueseWord ? word : null;

  const {getOnMouseDownProps, getOnClickProps, getOnTouchStartProps} =
    useAudioPlayback();

  return (
    <StyledChoiceButton
      aria-label={word}
      variant={variant || "outline"}
      // only play audio if word is in portuguese and audio is turned on.
      {...getOnMouseDownProps({
        text,
      })}
      {...getOnClickProps({
        text,
        onClick,
      })}
      {...getOnTouchStartProps({
        text,
      })}
      {...props}
    >
      {children}
    </StyledChoiceButton>
  );
};

export default Choice;
