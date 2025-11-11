import {
  type Key,
  Text,
  useFocus,
  useFocusManager,
  useInput,
  useStdout,
} from "ink";
import type { ReactNode } from "react";
import { FocusBox } from "../components/custom/FocusBox.js";

/**
 * This hook exposes methods to enable or disable focus management for
 *  all components or manually switch focus to next or previous components.
 */
export function HookUseFocusManager() {
  const { isFocused: isFocusedBox } = useFocus({
    // Apparently, setting `isActive: false` can cause the CLI to not persist
    isActive: true,
    id: "parent-component",
  });
  const {
    enableFocus,
    disableFocus,
    focus,
    focusNext, // will still work even when focus (via tab) is disabled
    focusPrevious, // will still work even when focus (via tab) is disabled
  } = useFocusManager();
  const { write } = useStdout();

  const handleUserInput = async (input: string, key: Key) => {
    if (key.shift) {
      if (input === "F") {
        write("INFO: disabled focus\n");
        disableFocus();
      }
    } else if (key.rightArrow || key.downArrow) {
      focusNext();
    } else if (key.leftArrow || key.upArrow) {
      focusPrevious();
    } else {
      if (input === "f") {
        write("INFO: enabled focus\n");
        enableFocus();
      }
      if (input === "1") {
        write("INFO: focus component with id: 'parent'\n");
        focus("parent-component");
      }
      if (input === "2") {
        write("INFO: focus component with id: 'child-A'\n");
        focus("child-A");
      }
      if (input === "3") {
        write("INFO: focus component with id: 'child-B'\n");
        focus("child-B");
      }
    }
  };

  useInput(handleUserInput, {
    isActive: true,
  });

  return (
    <>
      {/* This is for react-devtools
          I couldn't get it to work. I'll just revisit this in the future
            if ever I need it.
          This is also possibly complicated by the fact that I'm using 
            oclif to manage my cli input
          This appears to break after I run `npx react-devtools` in a
            separate terminal
      */}
      <script src="http://localhost:8097"></script>
      {/* <script src="http://192.168.100.19:8097"></script> */}
      <Text> pageLeft / pageUp - focus previous component</Text>
      <Text> pageRight / pageDown - focus next component</Text>
      <FocusBox
        id="parent"
        borderStyle="classic"
        flexDirection="column"
        backgroundColor={isFocusedBox ? "green" : "red"}
      >
        <Focusable id="child-A" text="f - enable focus" />
        <Focusable id="child-B" text="F - disable focus" />
      </FocusBox>
    </>
  );
}

function Focusable({ id, text }: { id?: string; text: string }): ReactNode {
  const { isFocused } = useFocus({ id: id });

  return <Text backgroundColor={isFocused ? "green" : "red"}>{text}</Text>;
}
