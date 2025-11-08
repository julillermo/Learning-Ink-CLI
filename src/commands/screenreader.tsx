import { Command } from "@oclif/core";
import { render } from "ink";
import { InkScreenReader } from "../examples/ScreenReader.js";

export default class ScreenReaderObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(ScreenReaderObj);

    // Change to true / false to inspect the diffence between these
    const isScreenReaderEnabled = true;

    render(<InkScreenReader />, { isScreenReaderEnabled });
  }
}
