import { Command } from "@oclif/core";
import { render } from "ink";
import { ChatAppExample } from "../../examples/separate-examples-folder/Chat.js";

export default class ChatAppExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(ChatAppExampleObj);

    render(<ChatAppExample />);
  }
}
