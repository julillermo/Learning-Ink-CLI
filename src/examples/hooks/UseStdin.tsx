import { Text, useStdin } from "ink";
import { useEffect } from "react";

//! genereated this with an LLM
// I wasn't able to ge this to work.
// From what I understand with the LLM, you should usually prefer useInput
//  for keyboard inputs. this useStdin() is primarily for input "streams"

// I think there might also be complication that I'm using oclif with Ink.
// I might just handle the stdin through oclif
export function HookUseStdin() {
  const { stdin, setRawMode, isRawModeSupported } = useStdin();

  useEffect(() => {
    // Only enable raw mode on TTYs that support it
    console.log("isRawModeSupported", isRawModeSupported);
    if (isRawModeSupported) setRawMode(true);

    const onData = (chunk: (string | number)[]) => {
      // chunk is a Buffer when in raw mode
      console.log("raw data:", chunk);
      // Example: exit on Ctrl-C when in raw mode (0x03)
      if (chunk && chunk[0] === 3) process.exit();
    };

    stdin.on("data", onData);

    return () => {
      stdin.off("data", onData);
      if (isRawModeSupported) setRawMode(false);
    };
  }, [stdin, setRawMode, isRawModeSupported]);

  return (
    <>
      <Text>Reading raw stdin (check console). Press Ctrl+C to quit.</Text>
      <Text>{JSON.stringify(stdin, null, 2)}</Text>
    </>
  );
}
