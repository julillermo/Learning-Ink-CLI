import { Command } from "@oclif/core";
import { render } from "ink";
import { JustifyContentExample } from "../../examples/separate-examples-folder/JustifyContent.js";

export default class JustifyContentExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(
      JustifyContentExampleObj
    );

    render(<JustifyContentExample />);
  }
}
