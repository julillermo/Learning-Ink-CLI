import { Box, Text, useStdout } from "ink";
import { useEffect } from "react";

/**
 * Write any string to stdout while preserving Ink's output.
 * It's useful when you want to display external information outside of Ink's rendering
 *  and ensure there's no conflict between the two.
 * It's similar to <Static>, except it can't accept components; it only works with strings.
 */

export function HookUseStdout() {
  const { stdout, write } = useStdout();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const timer = setInterval(() => {
      write("Hello from Ink to stdout\n");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box flexDirection="column" paddingX={2} paddingY={1}>
      {/* Comment the follwing out if you'd like to view what you can read */}
      {/* <Text>{JSON.stringify(stdout, null, 2)}</Text> */}

      <Text bold underline>
        Terminal dimensions:
      </Text>

      <Box marginTop={1}>
        <Text>
          Width: <Text bold>{stdout.columns}</Text>
        </Text>
      </Box>
      <Box>
        <Text>
          Height: <Text bold>{stdout.rows}</Text>
        </Text>
      </Box>
    </Box>
  );
}
