import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb08: OrbDefinition = {
  "slug": "orb-08",
  "title": "ORB-08",
  "note": "mother-of-pearl contour bands, each layer its own hue",
  "entryPoint": "orb08Fragment",
  "uniformSize": 176,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_crest": {
      "offset": 4,
      "size": 3
    },
    "c_deep": {
      "offset": 8,
      "size": 3
    },
    "c_low": {
      "offset": 12,
      "size": 3
    },
    "c_sheen": {
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
    "p_beat": {
      "offset": 21,
      "size": 1
    },
    "p_bulge": {
      "offset": 22,
      "size": 1
    },
    "p_contrast": {
      "offset": 23,
      "size": 1
    },
    "p_floor": {
      "offset": 24,
      "size": 1
    },
    "p_flow": {
      "offset": 25,
      "size": 1
    },
    "p_gain": {
      "offset": 26,
      "size": 1
    },
    "p_iris": {
      "offset": 27,
      "size": 1
    },
    "p_irisScale": {
      "offset": 28,
      "size": 1
    },
    "p_light": {
      "offset": 29,
      "size": 1
    },
    "p_radius": {
      "offset": 30,
      "size": 1
    },
    "p_rim": {
      "offset": 31,
      "size": 1
    },
    "p_scale": {
      "offset": 32,
      "size": 1
    },
    "p_speed": {
      "offset": 33,
      "size": 1
    },
    "p_split": {
      "offset": 34,
      "size": 1
    },
    "p_swirl": {
      "offset": 35,
      "size": 1
    },
    "p_thick": {
      "offset": 36,
      "size": 1
    },
    "p_view": {
      "offset": 37,
      "size": 1
    },
    "p_warp": {
      "offset": 38,
      "size": 1
    },
    "res": {
      "offset": 40,
      "size": 2
    },
    "time": {
      "offset": 42,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Boil",
      "default": 0.35,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "flow",
      "label": "Band drift",
      "default": 0.25,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": true
    },
    {
      "key": "swirl",
      "label": "Swirl",
      "default": 0.06,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": true
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
      "default": 5.5,
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
      "key": "warp",
      "label": "Warp",
      "default": 1,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "beat",
      "label": "Warp beat",
      "default": 0,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "thick",
      "label": "Band width",
      "default": 0.2,
      "min": 0.02,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "split",
      "label": "Chromatic split",
      "default": 0.1,
      "min": 0,
      "max": 1,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "iris",
      "label": "Iridescence",
      "default": 0.7,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "irisScale",
      "label": "Iridescence scale",
      "default": 0.315,
      "min": 0,
      "max": 2,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "view",
      "label": "Angle shift",
      "default": 1.34,
      "min": 0,
      "max": 3,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "floor",
      "label": "Body fill",
      "default": 0.8,
      "min": 0,
      "max": 3,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Brightness",
      "default": 1.1,
      "min": 0.05,
      "max": 5,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.15,
      "min": 0.15,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.75,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim sheen",
      "default": 0.5,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "deep",
      "label": "Shell body",
      "default": "#0d1430"
    },
    {
      "key": "low",
      "label": "Dim layer",
      "default": "#2fb8c6"
    },
    {
      "key": "crest",
      "label": "Bright layer",
      "default": "#fff1de"
    },
    {
      "key": "sheen",
      "label": "Sheen",
      "default": "#bfe4ff"
    }
  ],
  "statePresets": {
    "idle": {
      "bulge": 0.8,
      "contrast": 1.65,
      "floor": 0.57,
      "flow": 0.24,
      "gain": 2.45,
      "iris": 1.02,
      "rim": 0.495,
      "speed": 0.37,
      "split": 0.1,
      "swirl": 0.06,
      "thick": 0.54,
      "warp": 0.96
    },
    "speaking": {
      "beat": 1,
      "contrast": 0.78,
      "flow": 2.49,
      "gain": 1.75,
      "iris": 0.45,
      "speed": 2,
      "split": 0.3,
      "swirl": 0.18,
      "thick": 0.27,
      "warp": 1.84
    },
    "thinking": {
      "contrast": 1.65,
      "floor": 0.77,
      "flow": 0.06,
      "gain": 0.85,
      "iris": 1.89,
      "irisScale": 0.26,
      "rim": 0.495,
      "speed": 1.61,
      "split": 0.3,
      "swirl": 0.015,
      "thick": 0.54,
      "view": 1.21,
      "warp": 1.56
    }
  },
  "stateColors": {
    "idle": {
      "crest": "#fff1de",
      "deep": "#0d1430",
      "low": "#2fb8c6",
      "sheen": "#bfe4ff"
    },
    "speaking": {
      "crest": "#fff0c9",
      "deep": "#2a0f22",
      "low": "#ff7a4d",
      "sheen": "#ffc9a8"
    },
    "thinking": {
      "crest": "#dfe8ff",
      "deep": "#0a0f2c",
      "low": "#6f7cff",
      "sheen": "#9fd0ff"
    }
  },
  "wgsl": "struct orb08Params {\n  anim: f32,\n  c_crest: vec3f,\n  c_deep: vec3f,\n  c_low: vec3f,\n  c_sheen: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_beat: f32,\n  p_bulge: f32,\n  p_contrast: f32,\n  p_floor: f32,\n  p_flow: f32,\n  p_gain: f32,\n  p_iris: f32,\n  p_irisScale: f32,\n  p_light: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_scale: f32,\n  p_speed: f32,\n  p_split: f32,\n  p_swirl: f32,\n  p_thick: f32,\n  p_view: f32,\n  p_warp: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb08Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn cotBands(x: vec3f, k: f32) -> vec3f {\n  let b = tanh(((cos(x) * k) / max(abs(sin(x)), vec3f(9.999999747378752e-5))));\n  return (b * b);\n}\n\nfn nacreRender(fragCoord: vec2f, nacreWarp: f32, nacreThick: f32, nacreGain: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let R = max((*u).p_radius, 1e-3f);\n  let pl = (uv / R);\n  let z = sqrt(max((1f - dot(pl, pl)), 0f));\n  let n = vec3f(pl, z);\n  let t = (*u).p_speed;\n  var p = ((n.xy / ((n.z + 1f) + (*u).p_bulge)) * (*u).p_scale);\n  let sw = (*u).p_swirl;\n  p = (rot2(sw) * p);\n  p = vec2f(p.x, (p.y - (*u).p_flow));\n  var q = p;\n  for (var i = 0u; i < 10u; i += 1u) {\n    let i_1 = (f32(i) + 1f);\n    q = (q + ((sin((((q.yx * i_1) + ((i_1 * i_1) + (t * i_1))) + vec2f(4.699999809265137, 2.299999952316284))) * nacreWarp) / i_1));\n  }\n  let band = cotBands((vec3f(q.y) + (vec3f(0, 1, 3) * (*u).p_split)), nacreThick);\n  let lev = dot(band, vec3f(0.3333333432674408));\n  var col = ((*u).c_deep * (*u).p_floor);\n  col = (col + ((band * mix((*u).c_low, (*u).c_crest, smoothstep(0.1f, 0.9f, lev))) * nacreGain));\n  let irid = ((cos(((vec3f(0, 0.33000001311302185, 0.6700000166893005) + (((q.y * (*u).p_irisScale) + ((1f - z) * (*u).p_view)) + (t * 0.03f))) * 6.28318530718f)) * 0.5f) + 0.5f);\n  col = mix(col, (col * ((irid * 1.9f) + 0.25f)), (*u).p_iris);\n  col = pow(max(col, vec3f()), vec3f((*u).p_contrast));\n  let lambert = clamp(dot(n, vec3f(-0.4448256194591522, 0.5436757802963257, 0.7117210030555725)), 0f, 1f);\n  col = (col * (0.35f + ((*u).p_light * lambert)));\n  let fres = (1f - z);\n  let fresCubed = ((fres * fres) * fres);\n  col = (col + ((*u).c_sheen * ((*u).p_rim * fresCubed)));\n  return col;\n}\n\nstruct orb08Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb08Fragment(_arg_0: orb08Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let beat = (0.5f - (0.5f * cos(((*u).anim * 5f))));\n  let nacreWarp = mix(((*u).p_warp * (1f + (0.45f * (*u).inputVol))), mix(0.6f, 1.8f, beat), (*u).p_beat);\n  let nacreThick = ((*u).p_thick * (1f + (0.6f * (*u).outputVol)));\n  let nacreGain = ((*u).p_gain * (0.85f + (0.4f * (*u).outputVol)));\n  let mask = smoothstep(0.012f, -0.012f, (length(orbUv) - max((*u).p_radius, 1e-3f)));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let col = nacreRender(fragCoord, nacreWarp, nacreThick, nacreGain);\n  return vec4f((max(col, vec3f()) * mask), mask);\n}"
};
