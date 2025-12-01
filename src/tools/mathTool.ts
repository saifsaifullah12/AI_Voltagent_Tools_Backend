import { createTool } from "@voltagent/core";
import { z } from "zod";

export const mathTool = createTool({
  name: "calculate",
  description: "Solve basic math expression",
  parameters: z.object({
    expression: z.string()
  }),
  execute: async ({ expression }) => {
    return { result: eval(expression) };
  }
});
