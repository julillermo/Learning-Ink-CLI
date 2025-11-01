import { Command } from "@oclif/core";
import { render } from "ink";
import { HookUseStderr } from "../../examples/hooks/index.js";

export default class UseStdErr extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(UseStdErr);

    render(<HookUseStderr />);
  }
}
