import { Command } from "@oclif/core";
import { render } from "ink";
import { CounterExample } from "../../examples/separate-examples-folder/Counter.js";

export default class CounterExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(CounterExampleObj);

    render(<CounterExample />);
  }
}
