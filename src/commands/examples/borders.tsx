import { Command } from "@oclif/core";
import { render } from "ink";
import { BordersExample } from "../../examples/separate-examples-folder/Borders.js";

export default class BordersExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(BordersExampleObj);

    render(<BordersExample />);
  }
}
