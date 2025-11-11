import { Command } from "@oclif/core";
import { render } from "ink";
import { RenderThrottleExample } from "../../examples/separate-examples-folder/RenderThrottle.js";

/**
 * I'm not sure how to measure this
 */

export default class RenderThrottleExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(
      RenderThrottleExampleObj
    );

    // Example with custom maxFps
    render(<RenderThrottleExample />, {
      maxFps: 10, // Only render at 10fps (every ~100ms) instead of default 30fps
    });
  }
}
