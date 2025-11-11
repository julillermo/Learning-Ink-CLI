import { Box, Text, useFocus, useFocusManager, useInput } from "ink";

export function HookUseFocusId() {
  const { focus } = useFocusManager();

  //? Personal note:
  // I don't think that the `tab` key inherently fires 1, 2, nor 3, etc.
  // The `tab` key is likely the default behaviro for focusing.
  // You can just capture the keypress
  useInput((input) => {
    if (input === "1") {
      focus("1");
    }
    if (input === "2") {
      focus("2");
    }
    if (input === "3") {
      focus("3");
    }
    if (input === "4") {
      focus("4");
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      <Box marginBottom={1}>
        <Text>
          Press Tab to focus next element, Shift+Tab to focus previous element,
          Esc to reset focus.
        </Text>
      </Box>
      <Item id="1" label="Press 1 to focus" />
      <Item id="2" label="Press 2 to focus" />
      <Item id="3" label="Press 3 to focus" />
      <Item id="4" label="Press 4 to focus" />
    </Box>
  );
}

type ItemProperties = {
  readonly id: number | string;
  readonly label: string;
};

function Item({ label, id }: ItemProperties) {
  const { isFocused } = useFocus({ id: id.toString() });

  return (
    <Text>
      {label} {isFocused && <Text color="green">(focused)</Text>}
    </Text>
  );
}
