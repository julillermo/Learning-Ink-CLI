import { Command } from "@oclif/core";
import { render } from "ink";
import { StaticExample } from "../../examples/separate-examples-folder/Static.js";

export default class StaticExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(StaticExampleObj);

    render(<StaticExample />);
  }
}
