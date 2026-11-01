import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb28: OrbDefinition = {
  "slug": "orb-28",
  "title": "ORB-28",
  "note": "nested binary grids shuttering on a tumbling bit-sphere",
  "entryPoint": "orb28Fragment",
  "uniformSize": 160,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_base": {
      "offset": 4,
      "size": 3
    },
    "c_lineA": {
      "offset": 8,
      "size": 3
    },
    "c_lineB": {
      "offset": 12,
      "size": 3
    },
    "c_rim": {
      "offset": 16,
      "size": 3
    },
    "inputVol": {
      "offset": 19,
      "size": 1
    },
    "outputVol": {
      "offset": 20,
      "size": 1
    },
    "p_body": {
      "offset": 21,
      "size": 1
    },
    "p_contrast": {
      "offset": 22,
      "size": 1
    },
    "p_edge": {
      "offset": 23,
      "size": 1
    },
    "p_edgeFade": {
      "offset": 24,
      "size": 1
    },
    "p_gain": {
      "offset": 25,
      "size": 1
    },
    "p_gridScale": {
      "offset": 26,
      "size": 1
    },
    "p_levels": {
      "offset": 27,
      "size": 1
    },
    "p_lineW": {
      "offset": 28,
      "size": 1
    },
    "p_radius": {
      "offset": 29,
      "size": 1
    },
    "p_rim": {
      "offset": 30,
      "size": 1
    },
    "p_rimPow": {
      "offset": 31,
      "size": 1
    },
    "p_shutter": {
      "offset": 32,
      "size": 1
    },
    "p_speed": {
      "offset": 33,
      "size": 1
    },
    "p_spin": {
      "offset": 34,
      "size": 1
    },
    "p_tilt": {
      "offset": 35,
      "size": 1
    },
    "res": {
      "offset": 36,
      "size": 2
    },
    "time": {
      "offset": 38,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Shutter drift",
      "default": 0.5,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "spin",
      "label": "Tumble rate",
      "default": 0.15,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": true
    },
    {
      "key": "tilt",
      "label": "Tumble tilt",
      "default": 0.5,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "radius",
      "label": "Radius",
      "default": 0.9,
      "min": 0.1,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "gridScale",
      "label": "Grid scale",
      "default": 2,
      "min": 0.5,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "levels",
      "label": "Bit depth",
      "default": 12,
      "min": 4,
      "max": 20,
      "step": 1,
      "integrate": false
    },
    {
      "key": "lineW",
      "label": "Line width",
      "default": 2,
      "min": 0.5,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "shutter",
      "label": "Shutter",
      "default": 1,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Line gain",
      "default": 1,
      "min": 0.05,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "body",
      "label": "Body glow",
      "default": 1,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim light",
      "default": 0.6,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "rimPow",
      "label": "Rim tightness",
      "default": 3,
      "min": 0.3,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1,
      "min": 0.15,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "edge",
      "label": "Edge sharpness",
      "default": 1,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "edgeFade",
      "label": "Halo falloff",
      "default": 0.98,
      "min": 0.1,
      "max": 0.985,
      "step": 0.015,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "lineA",
      "label": "X lines",
      "default": "#ff5a4d"
    },
    {
      "key": "lineB",
      "label": "Y lines",
      "default": "#59d8ff"
    },
    {
      "key": "base",
      "label": "Body",
      "default": "#101528"
    },
    {
      "key": "rim",
      "label": "Rim",
      "default": "#bcd8ff"
    }
  ],
  "statePresets": {
    "idle": {
      "body": 0.9,
      "contrast": 1.2,
      "gain": 1,
      "levels": 10,
      "lineW": 2.5,
      "rim": 0.6,
      "rimPow": 5.2,
      "shutter": 1.02,
      "speed": 1,
      "spin": 0.1
    },
    "speaking": {
      "body": 0.27,
      "contrast": 1.45,
      "gain": 0.95,
      "gridScale": 10.3,
      "levels": 17,
      "rim": 1.53,
      "rimPow": 10,
      "shutter": 1.2,
      "speed": 3,
      "spin": 1.1
    },
    "thinking": {
      "body": 0.85,
      "gain": 1.2,
      "lineW": 2.9,
      "rim": 0.7,
      "shutter": 0.94,
      "speed": 2.4,
      "spin": 0.81
    }
  },
  "stateColors": {
    "idle": {
      "base": "#000000",
      "lineA": "#ff1100",
      "lineB": "#ffffff",
      "rim": "#000000"
    },
    "speaking": {
      "base": "#000000",
      "lineA": "#ff0000",
      "lineB": "#ffffff",
      "rim": "#000000"
    },
    "thinking": {
      "base": "#000000",
      "lineA": "#ff0000",
      "lineB": "#ffffff",
      "rim": "#000000"
    }
  },
  "wgsl": "struct orb28Params {\n  anim: f32,\n  c_base: vec3f,\n  c_lineA: vec3f,\n  c_lineB: vec3f,\n  c_rim: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_body: f32,\n  p_contrast: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_gain: f32,\n  p_gridScale: f32,\n  p_levels: f32,\n  p_lineW: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_rimPow: f32,\n  p_shutter: f32,\n  p_speed: f32,\n  p_spin: f32,\n  p_tilt: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb28Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb28Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb28Fragment(_arg_0: orb28Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let bitdumbGain = ((*u).p_gain * (1f + (0.6f * (*u).inputVol)));\n  let bitdumbBody = ((*u).p_body * (1f + (0.8f * (*u).outputVol)));\n  let duv = (orbUv / (*u).p_radius);\n  let r2 = dot(duv, duv);\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep((1f - band), 1.005f, length(duv)));\n  let zc = sqrt(max((1f - r2), 0f));\n  let n = vec3f(duv, zc);\n  var sp = n;\n  let tilted = (rot2((*u).p_tilt) * vec2f(sp.y, sp.z));\n  sp = vec3f(sp.x, tilted);\n  let spun = (rot2((*u).p_spin) * vec2f(sp.x, sp.z));\n  sp = vec3f(spun.x, sp.y, spun.y);\n  var p = ((sp.xy / (abs(sp.z) + 1f)) * (*u).p_gridScale);\n  var px = ((((2f / min((*u).res.x, (*u).res.y)) / (*u).p_radius) / max(zc, 0.2f)) * (*u).p_gridScale);\n  var acc = vec4f();\n  let phase = ((*u).p_speed * 0.2f);\n  for (var i = 0u; i < 20u; i += 1u) {\n    let fi = (f32(i) + 1f);\n    if ((fi > (*u).p_levels)) {\n      break;\n    }\n    p = (p + p);\n    px += px;\n    let v = ceil(p);\n    let f = fract(p);\n    let e2 = (vec2f(1) - smoothstep(vec2f(), vec2f((px * (*u).p_lineW)), min(f, (vec2f(1) - f))));\n    let edgeCol = (((*u).c_lineA * e2.x) + ((*u).c_lineB * e2.y));\n    let aBit = (fract(((length(v) / fi) - phase)) * (*u).p_shutter);\n    acc = (acc + (vec4f(edgeCol, aBit) * (1f - acc.w)));\n    if ((acc.w > 0.996f)) {\n      break;\n    }\n  }\n  var col = (acc.xyz * bitdumbGain);\n  let L = vec3f(-0.4056161046028137, 0.507020115852356, 0.7605301737785339);\n  let shade = (0.25f + (0.75f * clamp(dot(n, L), 0f, 1f)));\n  col = (col + ((*u).c_base * (shade * bitdumbBody)));\n  col = (col + ((*u).c_rim * (pow((1f - zc), (*u).p_rimPow) * (*u).p_rim)));\n  col = pow(max(col, vec3f()), vec3f((*u).p_contrast));\n  let fade = edgeFade((*u).p_edgeFade, length(orbUv));\n  let a = (mask * fade);\n  return vec4f((col * a), a);\n}"
};
