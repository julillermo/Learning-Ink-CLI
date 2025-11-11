import { Command } from "@oclif/core";
import { render } from "ink";
import { SelectInputExample } from "../../examples/separate-examples-folder/SelectInput.js";

export default class SelectInputExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(
      SelectInputExampleObj
    );

    render(<SelectInputExample />);
  }
}
