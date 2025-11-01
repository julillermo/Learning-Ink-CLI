import { Box, Static, Text, useApp, useInput } from "ink";
import { setTimeout } from "node:timers/promises";
import { useRef, useState } from "react";

type inputString = { id: string; key: string };

export function HookUseApp() {
  const [inputStringList, setInputStringList] = useState<inputString[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const idCounter = useRef(0);
  const { exit } = useApp();

  useInput(
    (input, _key) => {
      if (input === "q") {
        handleKeyboardInput(input);
        handleDelayedExit();
      } else if (input === "e") {
        handleKeyboardInput(input);
        // The following only works when used with waitUntilExit()
        // https://github.com/vadimdemedes/ink?tab=readme-ov-file#waituntilexit
        const newError = new Error("exited with error message");
        handleDelayedExit(1000, { error: newError });
      } else {
        handleKeyboardInput(input);
      }
      setCounter((prev) => prev + 1);
    },
    { isActive: true }
  );

  const handleKeyboardInput = (inputString: string) => {
    setInputStringList((prev: inputString[]) => [
      ...prev,
      { id: `${inputString}-${idCounter.current}`, key: inputString },
    ]);
    idCounter.current = idCounter.current + 1;
  };

  const handleDelayedExit = async (
    ms?: number,
    options?: Partial<{ error: Error }>
  ) => {
    await setTimeout(ms !== undefined ? ms : 300);
    exit(options?.error);
  };

  return (
    <>
      <Static items={inputStringList}>
        {(inputString) => (
          <Box key={inputString.id}>
            <Text color="green">{`Keyboard input: ${inputString.key}`}</Text>
          </Box>
        )}
      </Static>
      <Text>characters entered: {counter}</Text>
      <Text>q - exit</Text>
      <Text>e - exit with error </Text>
    </>
  );
}
function useEffecct(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
