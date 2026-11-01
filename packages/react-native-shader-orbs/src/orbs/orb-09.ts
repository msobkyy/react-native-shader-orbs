import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb09: OrbDefinition = {
  "slug": "orb-09",
  "title": "ORB-09",
  "note": "torn rings of rainbow light worn as the ball's latitudes",
  "entryPoint": "orb09Fragment",
  "uniformSize": 144,
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
    "p_contrast": {
      "offset": 13,
      "size": 1
    },
    "p_exposure": {
      "offset": 14,
      "size": 1
    },
    "p_fringe": {
      "offset": 15,
      "size": 1
    },
    "p_fringeSoft": {
      "offset": 16,
      "size": 1
    },
    "p_glow": {
      "offset": 17,
      "size": 1
    },
    "p_inner": {
      "offset": 18,
      "size": 1
    },
    "p_light": {
      "offset": 19,
      "size": 1
    },
    "p_lineSoft": {
      "offset": 20,
      "size": 1
    },
    "p_radius": {
      "offset": 21,
      "size": 1
    },
    "p_rim": {
      "offset": 22,
      "size": 1
    },
    "p_ringPhase": {
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
    "p_seed": {
      "offset": 26,
      "size": 1
    },
    "p_speed": {
      "offset": 27,
      "size": 1
    },
    "p_spin": {
      "offset": 28,
      "size": 1
    },
    "p_tilt": {
      "offset": 29,
      "size": 1
    },
    "p_warp": {
      "offset": 30,
      "size": 1
    },
    "res": {
      "offset": 32,
      "size": 2
    },
    "time": {
      "offset": 34,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Anim speed",
      "default": 0.6,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "spin",
      "label": "Roll",
      "default": 0.12,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": true
    },
    {
      "key": "tilt",
      "label": "Tilt",
      "default": 0.4,
      "min": -1.5,
      "max": 1.5,
      "step": 0.015,
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
      "label": "Ring spacing",
      "default": 3.5,
      "min": 0.3,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "warp",
      "label": "Tear",
      "default": 0.45,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "seed",
      "label": "Ring seed",
      "default": 0.9,
      "min": 0,
      "max": 3,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "glow",
      "label": "Ring glow",
      "default": 0.05,
      "min": 0,
      "max": 1,
      "step": 0.002,
      "integrate": false
    },
    {
      "key": "lineSoft",
      "label": "Ring width",
      "default": 0.05,
      "min": 0.002,
      "max": 1,
      "step": 0.002,
      "integrate": false
    },
    {
      "key": "inner",
      "label": "Inner falloff",
      "default": 3,
      "min": 0.2,
      "max": 12,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "fringe",
      "label": "Rainbow fringe",
      "default": 0.1,
      "min": 0,
      "max": 2,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "fringeSoft",
      "label": "Fringe width",
      "default": 0.003,
      "min": 0.001,
      "max": 1,
      "step": 0.001,
      "integrate": false
    },
    {
      "key": "ringPhase",
      "label": "Ring hue step",
      "default": 0.8,
      "min": 0,
      "max": 3,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 1.1,
      "min": 0.05,
      "max": 20,
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
      "default": 0.5,
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
      "default": "#b9d6ff"
    }
  ],
  "statePresets": {
    "idle": {
      "contrast": 1.15,
      "exposure": 1.1,
      "fringe": 0.1,
      "glow": 0.05,
      "lineSoft": 0.05,
      "speed": 0.6,
      "spin": 0.12,
      "warp": 0.45
    },
    "speaking": {
      "contrast": 0.85,
      "exposure": 0.68,
      "fringe": 0.81,
      "fringeSoft": 0.058,
      "glow": 0.04,
      "light": 0.99,
      "lineSoft": 0.22,
      "rim": 0.015,
      "ringPhase": 1.03,
      "seed": 1.02,
      "speed": 4.7,
      "spin": 0.34,
      "warp": 0.22
    },
    "thinking": {
      "contrast": 1.15,
      "exposure": 1.75,
      "fringe": 0.96,
      "fringeSoft": 0.854,
      "glow": 0.2,
      "light": 1.035,
      "lineSoft": 0.152,
      "rim": 0.66,
      "ringPhase": 2.53,
      "saturation": 2.22,
      "warp": 2.54
    }
  },
  "stateColors": {
    "idle": {
      "sheen": "#b9d6ff",
      "tint": "#ffffff"
    },
    "speaking": {
      "sheen": "#ffb277",
      "tint": "#ffc492"
    },
    "thinking": {
      "sheen": "#7ba6ff",
      "tint": "#9db8ff"
    }
  },
  "wgsl": "struct orb09Params {\n  anim: f32,\n  c_sheen: vec3f,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_contrast: f32,\n  p_exposure: f32,\n  p_fringe: f32,\n  p_fringeSoft: f32,\n  p_glow: f32,\n  p_inner: f32,\n  p_light: f32,\n  p_lineSoft: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_ringPhase: f32,\n  p_saturation: f32,\n  p_scale: f32,\n  p_seed: f32,\n  p_speed: f32,\n  p_spin: f32,\n  p_tilt: f32,\n  p_warp: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb09Params;\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn irisRender(fragCoord: vec2f, irisWarp: f32, irisGlow: f32, irisFringe: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let R = max((*u).p_radius, 1e-3f);\n  let pl = (uv / R);\n  let z = sqrt(max((1f - dot(pl, pl)), 0f));\n  let n = vec3f(pl, z);\n  let t = (*u).p_speed;\n  let ct = cos((*u).p_tilt);\n  let st = sin((*u).p_tilt);\n  var sp = vec3f(n.x, ((n.y * ct) - (n.z * st)), ((n.y * st) + (n.z * ct)));\n  let cr = cos((*u).p_spin);\n  let sr = sin((*u).p_spin);\n  sp = vec3f(((sp.x * cr) - (sp.z * sr)), sp.y, ((sp.x * sr) + (sp.z * cr)));\n  let pol = acos(clamp(sp.z, -1f, 1f));\n  let dir = (sp.xy / max(length(sp.xy), 1e-4f));\n  let p = (dir * (pol * (*u).p_scale));\n  var acc = vec3f();\n  for (var i = 0u; i < 10u; i += 1u) {\n    let i_1 = (f32(i) + 1f);\n    var v = p;\n    for (var i_2 = 0u; i_2 < 9u; i_2 += 1u) {\n      let f = (f32(i_2) + 1f);\n      v = (v + ((sin((ceil(((v * f) + (i_1 * (*u).p_seed))) - (t * 0.5f))) * irisWarp) / f));\n    }\n    let l = (length(v) - i_1);\n    let side = max(max(l, (-((*u).p_inner) * l)), (*u).p_lineSoft);\n    let fr = ((irisFringe * l) / ((l * l) + (*u).p_fringeSoft));\n    let hue = (cos((vec3f(0, 1, 2) + ((t - (i_1 * (*u).p_ringPhase)) + fr))) + 1.1f);\n    acc = (acc + (hue * (irisGlow / side)));\n  }\n  var col = tanh((acc / max((*u).p_exposure, 1e-3f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  let lambert = clamp(dot(n, vec3f(-0.4448256194591522, 0.5436757802963257, 0.7117210030555725)), 0f, 1f);\n  col = (col * (0.55f + ((*u).p_light * lambert)));\n  let fres = (1f - z);\n  let fresCubed = ((fres * fres) * fres);\n  col = (col + ((*u).c_sheen * ((*u).p_rim * fresCubed)));\n  return col;\n}\n\nstruct orb09Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb09Fragment(_arg_0: orb09Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let irisWarp = ((*u).p_warp * (1f + (0.5f * (*u).inputVol)));\n  let irisGlow = ((*u).p_glow * (0.85f + (0.5f * (*u).outputVol)));\n  let irisFringe = ((*u).p_fringe * (1f + (0.6f * (*u).outputVol)));\n  let mask = smoothstep(0.012f, -0.012f, (length(orbUv) - max((*u).p_radius, 1e-3f)));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let col = irisRender(fragCoord, irisWarp, irisGlow, irisFringe);\n  return vec4f((max(col, vec3f()) * mask), mask);\n}"
};
