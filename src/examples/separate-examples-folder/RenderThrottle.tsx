import { Box, Text } from "ink";
import { useEffect, useState } from "react";

export function RenderThrottleExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 10); // Update every 10ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box flexDirection="column" padding={1}>
      <Text>Counter: {count}</Text>
      <Text>This updates every 10ms but renders are throttled</Text>
      <Text>Press Ctrl+C to exit</Text>
    </Box>
  );
}
