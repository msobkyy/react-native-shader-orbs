# Security policy

## Supported versions

`react-native-shader-orbs` is an alpha. Only the latest published version gets fixes.

## Reporting a vulnerability

Please **don't open a public issue** for a security problem.

Use GitHub's private reporting instead: go to the **Security** tab of this repository and choose **Report a vulnerability**. If that isn't available, message [@msobkyy on X](https://x.com/msobkyy) and ask for a private way to send the details.

Include what you found, how to reproduce it, and which version it affects. You should get an answer within a week. This is a small project, so there is no bounty, but you will be credited in the fix if you want to be.

## What counts

The library runs shader code on the GPU and has no network access of its own, so the realistic issues are in the tooling around it: the MCP server and its `init` command (which writes files into a project), the build scripts, and the docs site. Reports about those are welcome.
