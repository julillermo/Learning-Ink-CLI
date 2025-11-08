import { Text } from "ink";
import { render } from "ink-testing-library";
import { describe, expect, test } from "vitest";

// From what I understand,
//  this is primarily for verifying the output text
//  as it ink is for CLI tools

const Counter = ({ count }: { count: number }) => <Text>Count: {count}</Text>;

describe("sample test", () => {
  const { lastFrame, rerender, frames } = render(<Counter count={0} />);

  test("should sample test 0", () => {
    expect(lastFrame()).toBe("Count: 0");
    console.log("frames check for test 0", JSON.stringify(frames, null, 2));
  });

  test("should sample test 1", () => {
    rerender(<Counter count={1} />);
    expect(lastFrame()).toBe("Count: 1");
    console.log("frames check for test 1", JSON.stringify(frames, null, 2));
  });
  test("should sample test 1", () => {
    rerender(<Counter count={2} />);
    expect(lastFrame()).toBe("Count: 2");
    console.log("frames check for test 2", JSON.stringify(frames, null, 2));
  });
});
