import { Command } from "@oclif/core";
import { render } from "ink";
import { SubprocessOutputExample } from "../../examples/separate-examples-folder/Subprocess.js";

export default class SubprocessOutputExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(
      SubprocessOutputExampleObj
    );

    render(<SubprocessOutputExample />);
  }
}
