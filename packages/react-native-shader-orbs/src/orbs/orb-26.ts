import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb26: OrbDefinition = {
  "slug": "orb-26",
  "title": "ORB-26",
  "note": "a crazed web of coloured threads knotted to a cell grid",
  "entryPoint": "orb26Fragment",
  "uniformSize": 176,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_deep": {
      "offset": 4,
      "size": 3
    },
    "c_hot": {
      "offset": 8,
      "size": 3
    },
    "c_line": {
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
    "p_bulge": {
      "offset": 21,
      "size": 1
    },
    "p_contrast": {
      "offset": 22,
      "size": 1
    },
    "p_core": {
      "offset": 23,
      "size": 1
    },
    "p_drift": {
      "offset": 24,
      "size": 1
    },
    "p_floor": {
      "offset": 25,
      "size": 1
    },
    "p_gain": {
      "offset": 26,
      "size": 1
    },
    "p_light": {
      "offset": 27,
      "size": 1
    },
    "p_pole": {
      "offset": 28,
      "size": 1
    },
    "p_poleSoft": {
      "offset": 29,
      "size": 1
    },
    "p_pulse": {
      "offset": 30,
      "size": 1
    },
    "p_radius": {
      "offset": 31,
      "size": 1
    },
    "p_rim": {
      "offset": 32,
      "size": 1
    },
    "p_scale": {
      "offset": 33,
      "size": 1
    },
    "p_sharp": {
      "offset": 34,
      "size": 1
    },
    "p_speed": {
      "offset": 35,
      "size": 1
    },
    "p_split": {
      "offset": 36,
      "size": 1
    },
    "p_swirl": {
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
      "default": 0.4,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "swirl",
      "label": "Swirl",
      "default": 0.07,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": true
    },
    {
      "key": "drift",
      "label": "Crazing drift",
      "default": 0.18,
      "min": 0,
      "max": 5,
      "step": 0.03,
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
      "label": "Cell scale",
      "default": 9,
      "min": 0.3,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "bulge",
      "label": "Dome bulge",
      "default": 0.25,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "warp",
      "label": "Warp",
      "default": 0.85,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "pole",
      "label": "Knot strength",
      "default": 0.25,
      "min": 0,
      "max": 2,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "poleSoft",
      "label": "Knot size",
      "default": 0.012,
      "min": 0.001,
      "max": 1,
      "step": 0.001,
      "integrate": false
    },
    {
      "key": "pulse",
      "label": "Cell breathing",
      "default": 0.35,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "sharp",
      "label": "Thread width",
      "default": 4.5,
      "min": 0.3,
      "max": 20,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "split",
      "label": "Chromatic split",
      "default": 0.045,
      "min": 0,
      "max": 1,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "core",
      "label": "Hot core",
      "default": 0.45,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "floor",
      "label": "Body fill",
      "default": 0.9,
      "min": 0,
      "max": 3,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Brightness",
      "default": 1,
      "min": 0.05,
      "max": 5,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.35,
      "min": 0.15,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.7,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim sheen",
      "default": 0.45,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "deep",
      "label": "Glaze",
      "default": "#111a2e"
    },
    {
      "key": "line",
      "label": "Thread",
      "default": "#3fd2ff"
    },
    {
      "key": "hot",
      "label": "Hot thread",
      "default": "#fff4d6"
    },
    {
      "key": "sheen",
      "label": "Sheen",
      "default": "#a9d8ff"
    }
  ],
  "statePresets": {
    "idle": {
      "bulge": 3.28,
      "contrast": 1.35,
      "core": 2.235,
      "drift": 0.18,
      "floor": 0.26,
      "gain": 1,
      "light": 0.705,
      "pole": 0.13,
      "poleSoft": 0.001,
      "pulse": 0.35,
      "sharp": 4.5,
      "speed": 0.42,
      "split": 0.045,
      "swirl": 0.075,
      "warp": 2
    },
    "speaking": {
      "bulge": 0.78,
      "contrast": 1.95,
      "core": 1.08,
      "drift": 1.74,
      "floor": 0.48,
      "gain": 1.3,
      "pole": 0.195,
      "poleSoft": 0.001,
      "pulse": 1.39,
      "scale": 11,
      "sharp": 2.1,
      "speed": 6.45,
      "split": 0.045,
      "swirl": 0.555,
      "warp": 0.76
    },
    "thinking": {
      "bulge": 3.28,
      "contrast": 1.6,
      "core": 2.235,
      "drift": 0.51,
      "floor": 0.28,
      "gain": 1,
      "light": 0.705,
      "pole": 0.18,
      "poleSoft": 0.001,
      "pulse": 0.22,
      "sharp": 3.6,
      "speed": 1,
      "split": 0.03,
      "swirl": 0.3,
      "warp": 2
    }
  },
  "stateColors": {
    "idle": {
      "deep": "#111a2e",
      "hot": "#fff4d6",
      "line": "#3fd2ff",
      "sheen": "#a9d8ff"
    },
    "speaking": {
      "deep": "#111a2e",
      "hot": "#fff4d6",
      "line": "#3fd2ff",
      "sheen": "#a9d8ff"
    },
    "thinking": {
      "deep": "#111a2e",
      "hot": "#fff4d6",
      "line": "#3fd2ff",
      "sheen": "#a9d8ff"
    }
  },
  "wgsl": "struct orb26Params {\n  anim: f32,\n  c_deep: vec3f,\n  c_hot: vec3f,\n  c_line: vec3f,\n  c_sheen: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_bulge: f32,\n  p_contrast: f32,\n  p_core: f32,\n  p_drift: f32,\n  p_floor: f32,\n  p_gain: f32,\n  p_light: f32,\n  p_pole: f32,\n  p_poleSoft: f32,\n  p_pulse: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_scale: f32,\n  p_sharp: f32,\n  p_speed: f32,\n  p_split: f32,\n  p_swirl: f32,\n  p_warp: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb26Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn latticeRender(fragCoord: vec2f, latticePole: f32, latticeSharp: f32, latticeGain: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let R = max((*u).p_radius, 1e-3f);\n  let pl = (uv / R);\n  let z = sqrt(max((1f - dot(pl, pl)), 0f));\n  let n = vec3f(pl, z);\n  let t = (*u).p_speed;\n  var p = ((n.xy / ((n.z + 1f) + (*u).p_bulge)) * (*u).p_scale);\n  let sw = (*u).p_swirl;\n  p = (rot2(sw) * p);\n  p = vec2f((p.x + (*u).p_drift), p.y);\n  p = (p + vec2f(0.3700000047683716, 0.20999999344348907));\n  let cell = floor(p);\n  let breathe = (1f + ((*u).p_pulse * sin(((6.28318530718f * hash(cell)) + (t * 0.35f)))));\n  var c = p;\n  for (var i = 0u; i < 9u; i += 1u) {\n    let i_1 = (f32(i) + 1f);\n    let delta = (cell - c);\n    let pole = ((delta / ((delta * delta) + vec2f((*u).p_poleSoft))) * (latticePole * breathe));\n    c = (c + ((cos((((c.yx * i_1) + pole) + t)) * (*u).p_warp) / i_1));\n  }\n  let x = (vec3f(c.y) + (vec3f(0, 2, 1) * (*u).p_split));\n  let thread = exp((abs(sin(x)) * -(latticeSharp)));\n  let lev = dot(thread, vec3f(0.3333333432674408));\n  var col = ((*u).c_deep * (*u).p_floor);\n  col = (col + ((thread * mix((*u).c_line, (*u).c_hot, smoothstep(0.12f, 1f, lev))) * latticeGain));\n  var core = (lev * lev);\n  core *= core;\n  col = (col + ((*u).c_hot * (core * (*u).p_core)));\n  col = pow(max(col, vec3f()), vec3f((*u).p_contrast));\n  let lambert = clamp(dot(n, vec3f(-0.4448256194591522, 0.5436757802963257, 0.7117210030555725)), 0f, 1f);\n  col = (col * (0.35f + ((*u).p_light * lambert)));\n  let fres = (1f - z);\n  let fresCubed = ((fres * fres) * fres);\n  col = (col + ((*u).c_sheen * ((*u).p_rim * fresCubed)));\n  return col;\n}\n\nstruct orb26Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb26Fragment(_arg_0: orb26Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let latticePole = ((*u).p_pole * (1f + (0.8f * (*u).inputVol)));\n  let latticeSharp = ((*u).p_sharp * (1f - (0.25f * (*u).outputVol)));\n  let latticeGain = ((*u).p_gain * (0.85f + (0.4f * (*u).outputVol)));\n  let mask = smoothstep(0.012f, -0.012f, (length(orbUv) - max((*u).p_radius, 1e-3f)));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let col = latticeRender(fragCoord, latticePole, latticeSharp, latticeGain);\n  let a = mask;\n  return vec4f((max(col, vec3f()) * a), a);\n}"
};
