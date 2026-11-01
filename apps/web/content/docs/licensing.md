# Licensing and credits

> **Read this before you ship.** The library code is MIT, but the shaders are not free for commercial use.

## The shaders

All 33 orb shaders are original work by **[XorDev](https://x.com/XorDev)**, used with permission through shadercn. The
header of each shader carries this notice, and it has to stay with the file:

> Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's permission. Non-commercial use only, with
> attribution to XorDev; keep this notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.

In practice that means:

- **Non-commercial use** is allowed, with **attribution to XorDev**.
- **Commercial use is not covered.** If you want to use these shaders in a paid or commercial product, ask XorDev.
- Keep the notice in the generated files. Don't strip it when bundling or minifying source you distribute.

## The library

The runtime, the component, the drive logic and the codegen in this repository are released under the **MIT license**.
The MIT license applies to that code. It does not change the terms attached to the shaders above, so a project that uses
the orbs is bound by the shader terms even though the package around them is MIT.

## shadercn

The shaders and their parameter definitions come from
[shadercn](https://github.com/shadcn-labs/shadercn) by Shadcn Labs (MIT, copyright 2026). This project is a derivative
work: it re-targets those shaders to React Native. It is **not affiliated with or endorsed by** shadercn, Shadcn Labs or
XorDev.

shadercn's own credits file lists XorDev as the author of every orb: "All 33 orb shaders are based on original work by
@XorDev. Used with permission."

## The React Native port

The React Native port (the component, the renderer, the drive logic, the codegen, the docs site and the MCP server) is by
**[@msobkyy](https://x.com/msobkyy)**. That is credit for the port, not a change to the shader terms above: the shaders
remain XorDev's work.

## Other software

| Package | License | Used for |
|---|---|---|
| `react-native-webgpu` | MIT | WebGPU on React Native. |
| `typegpu` and `unplugin-typegpu` | See their repositories | Compiling the shaders (build time only). |

If you redistribute the package, include `NOTICE.md` from the package folder.

## Using these in your own app

A reasonable attribution line, for an app that uses them non-commercially:

```text
Orb shaders by XorDev (https://x.com/XorDev), via shadercn and {{pkg}}.
```

This page is a plain-language summary, not legal advice. When in doubt, read the notices in the source files and ask the
author.
