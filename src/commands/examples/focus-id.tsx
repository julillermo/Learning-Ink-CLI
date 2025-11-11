import { Command } from "@oclif/core";
import { render } from "ink";
import { FocusWithIdExample } from "../../examples/separate-examples-folder/UseFocusWithId.js";

export default class FocusWithIdExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(
      FocusWithIdExampleObj
    );

    render(<FocusWithIdExample />);
  }
}
