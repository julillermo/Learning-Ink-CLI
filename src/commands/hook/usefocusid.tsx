import { Command } from "@oclif/core";
import { render } from "ink";
import { HookUseFocusId } from "../../examples/hooks/index.js";

export default class UseApp extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(UseApp);

    render(<HookUseFocusId />);
  }
}
