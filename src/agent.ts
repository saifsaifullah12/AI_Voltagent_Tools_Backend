import { Agent } from "@voltagent/core";
import { createOpenAI } from "@ai-sdk/openai";
import { mathTool } from "./tools/mathTool";
import { notesTool } from "./tools/notesTool";
import { weatherTool } from "./tools/weatherTool";

const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
});

export const assistantAgent = new Agent({
  id: "assistant",
  name: "Assistant Agent",
  
  instructions: `You are a helpful assistant with access to tools and persistent memory.

When user says "remember", "save this", "store this", 
save that information into MEMORY using agent memory APIs.

When user asks something like 
"what do you know about me?" or "what is my name?",
retrieve it from MEMORY.

Do NOT use tools for personal information.

Use tools ONLY for:
- get_weather - weather questions
- calculate - math questions
- notes_manager - note-related actions

Be conversational and helpful.`,

  model: openrouter("x-ai/grok-4.1-fast:free"), 

  tools: [
    mathTool,
    notesTool,
    weatherTool,
  ],

});