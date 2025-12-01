import { VoltAgent, Agent, Memory } from "@voltagent/core";
import { honoServer } from "@voltagent/server-hono";
import { createPinoLogger } from "@voltagent/logger";

import { assistantAgent } from "./agent";
import { assistantWorkflow } from "./workflows/assistantWorkflow";

const logger = createPinoLogger({
  name: "my-agent-server",
  level: "info",
});

new VoltAgent({
  agents: {
    assistant: assistantAgent   
  },

  workflows: {
    assistantWorkflow
  },

  server: honoServer({ port: 3141 }),
  logger,
});

