import { Box, Text, useInput } from "ink";
import { useState } from "react";

/**
 * From what I understand, for the aria text to display, you
 *  must also pass `{ isScreenReaderEnabled: true }` as part of the render:
 *
 *  render(<InkScreenReader />, { isScreenReaderEnabled: true });
 *
 * Note that running it in with { isScreenReaderEnabled: true } results in a
 *  text outputs to the terminal that is more accessibility-focused (less UI)
 */

export const InkScreenReader = () => {
  const [checked, setChecked] = useState(false);

  useInput((key) => {
    if (key === " ") {
      setChecked(!checked);
    }
  });

  return (
    <Box flexDirection="column">
      <Text>
        Press spacebar to toggle the checkbox. This example is best experienced
        with a screen reader.
      </Text>
      <Box marginTop={1}>
        <Box aria-role="checkbox" aria-state={{ checked }}>
          <Text>{checked ? "[x]" : "[ ]"}</Text>
        </Box>
      </Box>
      <Box marginTop={1}>
        <Text aria-hidden="true">This text is hidden from screen readers.</Text>
      </Box>
    </Box>
  );
};
