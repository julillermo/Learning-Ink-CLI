import { Command } from "@oclif/core";
import { render } from "ink";
import { ExampleStatic } from "../../examples/components/index.js";

export default class Static extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(Static);

    render(<ExampleStatic />);
  }
}
