import { Box, Static, Text, useApp, useInput } from "ink";
import { setTimeout } from "node:timers/promises";
import { useRef, useState } from "react";

type inputString = { id: string; key: string };

export const HookUseInput = () => {
  const [inputStringList, setInputStringList] = useState<inputString[]>([]);
  const idCounter = useRef(0);
  const { exit } = useApp();

  useInput(
    async (input, key) => {
      if (input) {
        handleKeyboardInput(input);
      }

      if (key.upArrow) {
        handleKeyboardInput("upArrow");
      }
      if (key.downArrow) {
        handleKeyboardInput("downArrow");
      }
      if (key.leftArrow) {
        handleKeyboardInput("leftArrow");
      }
      if (key.rightArrow) {
        handleKeyboardInput("rightArrow");
      }
      if (key.pageDown) {
        handleKeyboardInput("pageDown");
      }
      if (key.pageUp) {
        handleKeyboardInput("pageUp");
      }
      if (key.return) {
        handleKeyboardInput("return");
      }
      if (key.escape) {
        handleKeyboardInput("escape");
        await handleDelayedExit();
      }
      if (key.ctrl) {
        handleKeyboardInput("ctrl");
      }
      if (key.shift) {
        handleKeyboardInput("shift");
      }
      if (key.tab) {
        handleKeyboardInput("tab");
      }
      if (key.backspace) {
        handleKeyboardInput("backspace");
      }
      if (key.delete) {
        handleKeyboardInput("delete");
      }
      if (key.meta) {
        handleKeyboardInput("meta");
      }
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

  const handleDelayedExit = async (ms?: number) => {
    await setTimeout(ms !== undefined ? ms : 300);
    exit();
  };

  return (
    <Static items={inputStringList}>
      {(inputString) => (
        <Box key={inputString.id}>
          <Text color="green">{`Keyboard input: ${inputString.key}`}</Text>
        </Box>
      )}
    </Static>
  );
};
