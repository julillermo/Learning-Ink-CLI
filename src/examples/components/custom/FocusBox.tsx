import { Box } from "ink";

type FocusBoxProps = Omit<
  React.ComponentPropsWithoutRef<typeof Box>,
  "children"
> & { id?: string; children?: React.ReactNode | undefined };

export function FocusBox({ id: _id, children, ...rest }: FocusBoxProps) {
  return <Box {...rest}>{children}</Box>;
}
