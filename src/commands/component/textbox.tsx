import { Command } from "@oclif/core";
import { render } from "ink";
import { ExampleTextBox } from "../../examples/readme-examples/components/index.js";

export default class TextBox extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(TextBox);

    render(<ExampleTextBox />);
  }
}
