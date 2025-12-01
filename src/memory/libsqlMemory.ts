import { Memory } from "@voltagent/core";
import { LibSQLMemoryAdapter } from "@voltagent/libsql";

export const memory = new Memory({
  storage: new LibSQLMemoryAdapter({
    url: "file:ai-memory.db",
  }),
});
