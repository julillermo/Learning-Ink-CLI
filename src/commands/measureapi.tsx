import { Command } from "@oclif/core";
import { render } from "ink";
import { InkMeasure } from "../examples/MeasureApi.js";

export default class UseMeasureApi extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(UseMeasureApi);

    render(<InkMeasure />);
  }
}
