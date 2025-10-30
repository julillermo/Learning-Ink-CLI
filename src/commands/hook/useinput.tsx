import { Command } from "@oclif/core";
import { render } from "ink";
import { HookUseInput } from "../../examples/hooks/index.js";

export default class UseInput extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(UseInput);

    render(<HookUseInput />);
  }
}
