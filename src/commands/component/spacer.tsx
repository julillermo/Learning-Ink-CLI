import { Command } from "@oclif/core";
import { render } from "ink";
import { ExampleSpacer } from "../../examples/readme-examples/components/index.js";

export default class Spacer extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(Spacer);

    render(<ExampleSpacer />);
  }
}
