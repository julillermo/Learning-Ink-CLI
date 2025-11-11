import { Command } from "@oclif/core";
import { render } from "ink";

import { TableExample } from "../../examples/separate-examples-folder/Table.js";

export default class TableExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(TableExampleObj);

    render(<TableExample />);
  }
}
