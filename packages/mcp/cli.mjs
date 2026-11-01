#!/usr/bin/env node
// npx react-native-shader-orbs-mcp          start the MCP server (stdio)
// npx react-native-shader-orbs-mcp init     set up MCP config, the skill and agent instructions in the current project
const [command] = process.argv.slice(2);
if (command === "init") {
  await import("./init.mjs");
} else if (command === "--help" || command === "-h") {
  console.log("Usage: react-native-shader-orbs-mcp [init [--dry-run] [--force] [--only=mcp,skill,rules]]\n\nNo arguments: run the MCP server over stdio.");
} else {
  await import("./server.mjs");
}
