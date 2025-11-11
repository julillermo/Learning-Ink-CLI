import { Text } from "ink";

let promise: Promise<void> | undefined;
let state: string | undefined;
let value: string | undefined;

const read = () => {
  if (!promise) {
    promise = new Promise((resolve) => {
      setTimeout(resolve, 500);
    });

    state = "pending";

    (async () => {
      await promise;
      state = "done";
      value = "Hello World";
    })();
  }

  if (state === "pending") {
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw promise;
  }

  if (state === "done") {
    return value;
  }

  throw promise;
};

export function SuspenseExample() {
  const message = read();
  return <Text>{message}</Text>;
}

export function SuspenseFallback() {
  return <Text>Loading...</Text>;
}
