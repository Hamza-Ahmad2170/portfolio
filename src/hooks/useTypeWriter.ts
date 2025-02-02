import { useState, useEffect, useCallback } from "react";

interface TypeWriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  initialDelay?: number;
  loop?: boolean | number;
}

interface TypeWriterState {
  text: string;
  isDeleting: boolean;
  wordIndex: number;
  loopCount: number;
}

const useTypeWriter = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  initialDelay = 0,
  loop = true,
}: TypeWriterOptions) => {
  const [state, setState] = useState<TypeWriterState>({
    text: "",
    isDeleting: false,
    wordIndex: 0,
    loopCount: 0,
  });

  const [isRunning, setIsRunning] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[state.wordIndex];
    const shouldDelete = state.isDeleting;
    const currentText = state.text;

    setState((prevState) => {
      // Handle deletion
      if (shouldDelete) {
        if (currentText === "") {
          const nextIndex = (prevState.wordIndex + 1) % words.length;
          const shouldContinue =
            typeof loop === "boolean" ? loop : prevState.loopCount < loop;

          if (nextIndex === 0 && !shouldContinue) {
            setIsRunning(false);
            return prevState;
          }

          return {
            ...prevState,
            isDeleting: false,
            wordIndex: nextIndex,
            loopCount:
              nextIndex === 0 ? prevState.loopCount + 1 : prevState.loopCount,
          };
        }

        return {
          ...prevState,
          text: currentText.slice(0, -1),
        };
      }

      // Handle typing
      if (currentText === currentWord) {
        return {
          ...prevState,
          isDeleting: true,
        };
      }

      return {
        ...prevState,
        text: currentWord.slice(0, currentText.length + 1),
      };
    });
  }, [words, state, loop]);

  // Handle initial delay before starting the typewriter
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRunning(true);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  // Main typewriter effect
  useEffect(() => {
    if (!isRunning) return;

    const timeout = setTimeout(
      tick,
      state.isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    tick,
    state.text,
    state.isDeleting,
    typeSpeed,
    deleteSpeed,
    isRunning,
    state.loopCount,
    state.wordIndex,
  ]);

  return {
    text: state.text,
    isDeleting: state.isDeleting,
    isDone: !isRunning,
    loopCount: state.loopCount,
  };
};

export default useTypeWriter;
