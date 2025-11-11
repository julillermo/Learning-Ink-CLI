import { Text, useIsScreenReaderEnabled } from "ink";

/**
 * Returns whether a screen reader is enabled.
 * This is useful when you want to render different output for screen readers.
 */

export function HookUseIsScreenReaderEnabled() {
  // This doesn't appear to work for my linux mint installation
  const isScreenReaderEnabled = useIsScreenReaderEnabled();

  return (
    <Text>
      {isScreenReaderEnabled
        ? "Screen reader is enabled"
        : "Screen reader is disabled"}
    </Text>
  );
}
