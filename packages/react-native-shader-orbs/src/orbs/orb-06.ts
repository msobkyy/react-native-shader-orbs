import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb06: OrbDefinition = {
  "slug": "orb-06",
  "title": "ORB-06",
  "note": "a hundred glowing lattices stacked through the ball, interfering",
  "entryPoint": "orb06Fragment",
  "uniformSize": 128,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_sheen": {
      "offset": 4,
      "size": 3
    },
    "c_tint": {
      "offset": 8,
      "size": 3
    },
    "inputVol": {
      "offset": 11,
      "size": 1
    },
    "outputVol": {
      "offset": 12,
      "size": 1
    },
    "p_bulge": {
      "offset": 13,
      "size": 1
    },
    "p_contrast": {
      "offset": 14,
      "size": 1
    },
    "p_depth": {
      "offset": 15,
      "size": 1
    },
    "p_drift": {
      "offset": 16,
      "size": 1
    },
    "p_exposure": {
      "offset": 17,
      "size": 1
    },
    "p_freq": {
      "offset": 18,
      "size": 1
    },
    "p_glowSize": {
      "offset": 19,
      "size": 1
    },
    "p_hueRate": {
      "offset": 20,
      "size": 1
    },
    "p_light": {
      "offset": 21,
      "size": 1
    },
    "p_radius": {
      "offset": 22,
      "size": 1
    },
    "p_rim": {
      "offset": 23,
      "size": 1
    },
    "p_saturation": {
      "offset": 24,
      "size": 1
    },
    "p_scale": {
      "offset": 25,
      "size": 1
    },
    "p_speed": {
      "offset": 26,
      "size": 1
    },
    "res": {
      "offset": 28,
      "size": 2
    },
    "time": {
      "offset": 30,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Anim speed",
      "default": 0.5,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "drift",
      "label": "Layer walk",
      "default": 0.02,
      "min": 0,
      "max": 0.3,
      "step": 0.002,
      "integrate": false
    },
    {
      "key": "radius",
      "label": "Radius",
      "default": 0.9,
      "min": 0.15,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "scale",
      "label": "Pattern scale",
      "default": 4,
      "min": 0.3,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "bulge",
      "label": "Dome bulge",
      "default": 0.3,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "depth",
      "label": "Stack depth",
      "default": 0.7,
      "min": 0,
      "max": 1.6,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "freq",
      "label": "Lattice spacing",
      "default": 0.7,
      "min": 0.05,
      "max": 5,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "glowSize",
      "label": "Glow size",
      "default": 0.05,
      "min": 0.002,
      "max": 1,
      "step": 0.002,
      "integrate": false
    },
    {
      "key": "hueRate",
      "label": "Hue per layer",
      "default": 0.037,
      "min": 0,
      "max": 0.5,
      "step": 0.002,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 4,
      "min": 0.05,
      "max": 200,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.1,
      "min": 0.15,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "saturation",
      "label": "Saturation",
      "default": 1.2,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.45,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim sheen",
      "default": 0.4,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "tint",
      "label": "Tint",
      "default": "#ffffff"
    },
    {
      "key": "sheen",
      "label": "Sheen",
      "default": "#bcd8ff"
    }
  ],
  "statePresets": {
    "idle": {
      "contrast": 1.1,
      "depth": 0.7,
      "drift": 0.02,
      "exposure": 4,
      "glowSize": 0.05,
      "hueRate": 0.037,
      "speed": 0.5
    },
    "speaking": {
      "contrast": 0.9,
      "depth": 0.26,
      "drift": 0.13,
      "exposure": 2.7,
      "glowSize": 0.062,
      "hueRate": 0.045,
      "light": 1.11,
      "speed": 4.5
    },
    "thinking": {
      "bulge": 2.18,
      "contrast": 1.55,
      "depth": 1.25,
      "drift": 0.105,
      "exposure": 6.5,
      "glowSize": 0.016,
      "hueRate": 0.095,
      "speed": 2.6
    }
  },
  "stateColors": {
    "idle": {
      "sheen": "#bcd8ff",
      "tint": "#ffffff"
    },
    "speaking": {
      "sheen": "#ffb277",
      "tint": "#ffc492"
    },
    "thinking": {
      "sheen": "#7ea9ff",
      "tint": "#9db8ff"
    }
  },
  "wgsl": "struct orb06Params {\n  anim: f32,\n  c_sheen: vec3f,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_bulge: f32,\n  p_contrast: f32,\n  p_depth: f32,\n  p_drift: f32,\n  p_exposure: f32,\n  p_freq: f32,\n  p_glowSize: f32,\n  p_hueRate: f32,\n  p_light: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_saturation: f32,\n  p_scale: f32,\n  p_speed: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb06Params;\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn moireRender(fragCoord: vec2f, moireDrift: f32, moireGlow: f32, moireHue: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let R = max((*u).p_radius, 1e-3f);\n  let pl = (uv / R);\n  let z = sqrt(max((1f - dot(pl, pl)), 0f));\n  let t = (*u).p_speed;\n  let bulge = (1f + (*u).p_bulge);\n  let den0 = (z + bulge);\n  var w = ((pl / den0) * (*u).p_scale);\n  var acc = vec3f();\n  for (var i = 0u; i < 100u; i += 1u) {\n    let f = (f32(i) + 1f);\n    let layerT = (f / 100f);\n    let depth = (layerT * (*u).p_depth);\n    let denu = ((z - depth) + (bulge * sqrt(max(((1f - ((2f * depth) * z)) + (depth * depth)), 0f))));\n    let q = (w * (den0 / max(denu, 0.05f)));\n    let k = (sin((vec2f(11.300000190734863, 12.869999885559082) + f)) / max((*u).p_freq, 1e-3f));\n    let g = max(length(sin((q * k))), moireGlow);\n    let hue = (cos((vec3f(0, 1, 3) + (f * moireHue))) + 1.1f);\n    acc = (acc + (hue / g));\n    w = (w + (sin((w.yx + t)) * moireDrift));\n  }\n  let v = (acc / 100f);\n  var col = tanh(((v * v) / max((*u).p_exposure, 1e-4f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  let n = vec3f(pl, z);\n  let lambert = clamp(dot(n, vec3f(-0.4448256194591522, 0.5436757802963257, 0.7117210030555725)), 0f, 1f);\n  col = (col * (0.6f + ((*u).p_light * lambert)));\n  let fres = (1f - z);\n  let fresCubed = ((fres * fres) * fres);\n  col = (col + ((*u).c_sheen * ((*u).p_rim * fresCubed)));\n  return col;\n}\n\nstruct orb06Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb06Fragment(_arg_0: orb06Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let moireDrift = ((*u).p_drift * (1f + (0.6f * (*u).inputVol)));\n  let moireGlow = max(((*u).p_glowSize * (1f - (0.3f * (*u).outputVol))), 2e-3f);\n  let moireHue = ((*u).p_hueRate * (1f + (0.35f * (*u).outputVol)));\n  let mask = smoothstep(0.012f, -0.012f, (length(orbUv) - max((*u).p_radius, 1e-3f)));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let col = moireRender(fragCoord, moireDrift, moireGlow, moireHue);\n  return vec4f((max(col, vec3f()) * mask), mask);\n}"
};
