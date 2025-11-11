import { Command } from "@oclif/core";
import { render } from "ink";
import { HookUseIsScreenReaderEnabled } from "../../examples/readme-examples/hooks/index.js";

export default class UseReader extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(UseReader);

    render(<HookUseIsScreenReaderEnabled />);
  }
}
