import { Command } from "@oclif/core";
import { render } from "ink";
import { ExampleBigTextGradient } from "../../examples/components/index.js";

export default class BigTextGradient extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(BigTextGradient);

    render(<ExampleBigTextGradient />);
  }
}
