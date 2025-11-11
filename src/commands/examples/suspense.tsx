import { Command } from "@oclif/core";
import { render } from "ink";
import { Suspense } from "react";

import {
  SuspenseExample,
  SuspenseFallback,
} from "../../examples/separate-examples-folder/Suspense.js";

export default class SuspenseExampleObj extends Command {
  static override summary = "Ink example for the <Text> and <Box> components";
  static override description = "";

  public async run(): Promise<void> {
    const { args: _args, flags: _flags } = await this.parse(SuspenseExampleObj);

    render(
      <Suspense fallback={<SuspenseFallback />}>
        {/* If this is in a promise state, use the  */}
        <SuspenseExample />
      </Suspense>
    );
  }
}
