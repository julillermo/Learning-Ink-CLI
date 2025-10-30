import { Command } from "@oclif/core";
import { render } from "ink";
import { ExampleBoxBorder } from "../../examples/components/index.js";

export default class BoxBorder extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(BoxBorder);

    render(<ExampleBoxBorder />);
  }
}
