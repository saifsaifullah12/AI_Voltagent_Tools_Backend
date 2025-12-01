import { createTool } from "@voltagent/core";
import { z } from "zod";

let notes: string[] = [];

export const notesTool = createTool({
  name: "notes_manager",
  description: "Add or list notes",
  parameters: z.object({
    action: z.enum(["add", "list"]),
    content: z.string().optional()
  }),
  execute: async ({ action, content }) => {
    if (action === "add" && content) {
      notes.push(content);
      return { message: "Note added!" };
    }
    return { notes };
  }
});
