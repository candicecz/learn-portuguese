import {checkIsMobile} from "src/utils/helpers";

const callFnsInSequence =
  (...fns: ((() => void) | undefined)[]) =>
  (...args: any[]) => {
    // @ts-ignore
    return fns.forEach(fn => fn && fn?.(...args));
  };

// handles audio play back when user mouses down / click an audio element
export const useAudioPlayback = () => {
  // Set up audio
  const message = new window.SpeechSynthesisUtterance();
  message.lang = "pt-PT";
  message.pitch = 1; // From 0 to 2
  message.rate = 1;
  message.volume = 1;
  message.voice =
    window.speechSynthesis
      .getVoices()
      .find(voice => /pt(-|_)PT/.test(voice.lang)) || null;

  let playSlowly = false;

  let timeout: ReturnType<typeof setTimeout>;

  const handleAudio = (rate: number, text: string) => {
    message.text = text;
    message.rate = rate;
    // Only play audio if the options are in portuguese.
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(message);
    timeout && clearTimeout(timeout);
    return void 0;
  };
  const handleMouseDown = (text: string | null) => {
    if (!text) {
      return;
    }
    // if button is held play audio slowly.
    timeout = setTimeout(() => {
      playSlowly = true;
      handleAudio(0.5, text);
    }, 500);
    return void 0;
  };

  const getOnMouseDownProps = ({
    onMouseDown,
    text = null,
    ...props
  }: {
    onMouseDown?: () => void | null;
    text?: string | null;
  } = {}) => {
    if (checkIsMobile()) {
      return {
        onTouchStart: callFnsInSequence(onMouseDown, () =>
          handleMouseDown(text),
        ),
        ...props,
      };
    }

    return {
      onMouseDown: callFnsInSequence(onMouseDown, () => handleMouseDown(text)),

      ...props,
    };
  };

  const handleClick = (text: string | null) => {
    if (!text) {
      return;
    }
    !playSlowly && handleAudio(1, text);
    playSlowly = false;
    timeout && clearTimeout(timeout);

    return void 0;
  };

  const getOnClickProps = ({
    onClick,
    text = null,
    ...props
  }: {
    onClick?: () => void | null;
    text?: string | null;
  } = {}) => {
    if (checkIsMobile()) {
      return {
        onTouchEnd: callFnsInSequence(onClick, () => handleClick(text)),
        ...props,
      };
    }
    return {onClick: callFnsInSequence(onClick, () => handleClick(text))};
  };

  return {
    message,
    onMouseDown: handleMouseDown,
    getOnMouseDownProps,
    onClick: handleClick,
    getOnClickProps,
  };
};
