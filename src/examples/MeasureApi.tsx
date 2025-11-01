import { Box, type DOMElement, measureElement, Text } from "ink";
import { useEffect, useRef, useState } from "react";

/**
 * Other important API to take note of
 *  - render(tree, options)
 *    > options
 *      ~ onRender - run a callback on each rerender
 *      ~ maxFps - (default: 30)
 *  - instance - the object that `render()` returns
 *    > rerender(tree) - Replace the previous root node with a new one or
 *                  update props of the current root node
 *    > unmount() - Manually unmount the whole Ink app.
 *    > waitUntilExit() - Returns a promise that resolves when the app is unmounted.
 *                        Related to Exit(error)
 *    > clear() - clear output
 */

export const InkMeasure = () => {
  const ref = useRef<DOMElement | null>(null);
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    if (ref.current !== null) {
      const { width, height } = measureElement(ref.current);
      setDimensions({ height, width });
      // width = 100, height = 1
    }
  }, []);

  return (
    <Box width={100}>
      <Box ref={ref}>
        <Text>height: {dimensions.height}</Text>
        <Text>{` `}</Text>
        <Text>width: {dimensions.width}</Text>
      </Box>
    </Box>
  );
};
