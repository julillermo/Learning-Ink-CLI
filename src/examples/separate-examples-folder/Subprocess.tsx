import { Box, Text } from "ink";
import childProcess from "node:child_process";
import React, { useEffect } from "react";
import stripAnsi from "strip-ansi";

export function SubprocessOutputExample() {
  const [output, setOutput] = React.useState("");

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const subProcess = childProcess.spawn("pnpm", ["version"]);

    // eslint-disable-next-line @typescript-eslint/ban-types
    subProcess.stdout.on("data", (newOutput: Buffer) => {
      const lines = stripAnsi(newOutput.toString("utf8")).split("\n");
      setOutput(lines.slice(-5).join("\n"));
    });
  }, [setOutput]);

  return (
    <Box flexDirection="column" padding={1}>
      <Text>Command output:</Text>
      <Box marginTop={1}>
        <Text>{output}</Text>
      </Box>
    </Box>
  );
}
