import { Command } from "@oclif/core";
import { render } from "ink";
import { BoxBackgrounds } from "../../examples/separate-examples-folder/BoxBackground.js";

export default class BoxBackgroundsObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(BoxBackgroundsObj);

    render(<BoxBackgrounds />);
  }
}
