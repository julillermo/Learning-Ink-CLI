import { Box, useStderr } from "ink";
import { useEffect } from "react";

export function HookUseStderr() {
  const { stderr, write: writeErr } = useStderr();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // Write a single message to stderr, above Ink's output
    writeErr("Hello from Ink to stderr\n");
  }, []);

  return <Box flexDirection="column" paddingX={2} paddingY={1}></Box>;
}
