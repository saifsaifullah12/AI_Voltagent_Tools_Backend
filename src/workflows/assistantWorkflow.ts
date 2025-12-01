import { createWorkflowChain } from "@voltagent/core";
import { assistantAgent } from "../agent";
import { z } from "zod";

export const assistantWorkflow = createWorkflowChain({
  id: "assistant-chat",
  name: "Assistant Chat Workflow",
  purpose: "Talk with the assistant and use tools + memory",

  input: z.object({
    message: z.string(),
  }),

  result: z.object({
    reply: z.string(),
  }),
})
.andThen({
  id: "chat",
  execute: async ({ data }) => {
    console.log("USER MESSAGE:", data.message);

    const res = await assistantAgent.generateText([
      { role: "user", content: data.message },
    ]);

    console.log("AGENT RAW RESPONSE:", JSON.stringify(res, null, 2));
    console.log("AGENT TEXT:", res.text);

    const replyText = res.text ?? "No reply from agent";
    console.log("RETURNING REPLY:", replyText);

    return {
      reply: replyText  // Return directly, not nested in result
    };
  },
});