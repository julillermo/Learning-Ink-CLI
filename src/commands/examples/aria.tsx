import { Command } from "@oclif/core";
import { render } from "ink";
import { AriaExample } from "../../examples/separate-examples-folder/Aria.js";

export default class AriaExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(AriaExampleObj);

    render(<AriaExample />);
  }
}
