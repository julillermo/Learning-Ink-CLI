import { Box, Text, useFocus } from "ink";

/**
 * A component that uses the useFocus hook becomes "focusable" to Ink,
 *  so when the user presses Tab, Ink will switch focus to this component.
 * If there are multiple components that execute the useFocus hook,
 *  focus will be given to them in the order in which these components are rendered.
 * This hook returns an object with an isFocused boolean property,
 *  which determines whether this component is focused.
 */

export function HookUseFocus() {
  const { isFocused: isFocusedParent } = useFocus({
    autoFocus: true, // whether it's focused on load. May not work as expected if a lot are autofocused.
    isActive: true, // setting to `false` will prevent the component from being focused
  });

  // press that on the component to focus it.
  return (
    <Box
      borderStyle={"classic"}
      gap={10}
      backgroundColor={isFocusedParent ? "green" : "red"}
      justifyContent="space-between"
      alignItems="center"
    >
      <FocusChild1 />
      <Text color={isFocusedParent ? "black" : "white"}>
        {`Parent component is ${isFocusedParent ? "" : "not"} focused.`}
      </Text>
      <FocusChild2 />
    </Box>
  );
}

function FocusChild1() {
  const { isFocused: isFocused1 } = useFocus();
  return (
    <Box borderStyle={"classic"} backgroundColor={isFocused1 ? "green" : "red"}>
      <Text color={isFocused1 ? "black" : "white"}>{`Child component 1 is ${
        isFocused1 ? "focused" : "not focused"
      }`}</Text>
    </Box>
  );
}

function FocusChild2() {
  const { isFocused: isFocused2 } = useFocus();
  return (
    <Box borderStyle={"classic"} backgroundColor={isFocused2 ? "green" : "red"}>
      <Text color={isFocused2 ? "black" : "white"}>{`Child component 2 is ${
        isFocused2 ? "focused" : "not focused"
      }`}</Text>
    </Box>
  );
}
