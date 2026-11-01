import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb25: OrbDefinition = {
  "slug": "orb-25",
  "title": "ORB-25",
  "note": "the folds of a warped field, drawn by their own steepness",
  "entryPoint": "orb25Fragment",
  "uniformSize": 160,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_body": {
      "offset": 4,
      "size": 3
    },
    "c_sheen": {
      "offset": 8,
      "size": 3
    },
    "c_tint": {
      "offset": 12,
      "size": 3
    },
    "inputVol": {
      "offset": 15,
      "size": 1
    },
    "outputVol": {
      "offset": 16,
      "size": 1
    },
    "p_blur": {
      "offset": 17,
      "size": 1
    },
    "p_bulge": {
      "offset": 18,
      "size": 1
    },
    "p_contrast": {
      "offset": 19,
      "size": 1
    },
    "p_drift": {
      "offset": 20,
      "size": 1
    },
    "p_edgeGain": {
      "offset": 21,
      "size": 1
    },
    "p_exposure": {
      "offset": 22,
      "size": 1
    },
    "p_floorLevel": {
      "offset": 23,
      "size": 1
    },
    "p_fringe": {
      "offset": 24,
      "size": 1
    },
    "p_light": {
      "offset": 25,
      "size": 1
    },
    "p_radius": {
      "offset": 26,
      "size": 1
    },
    "p_rim": {
      "offset": 27,
      "size": 1
    },
    "p_ripple": {
      "offset": 28,
      "size": 1
    },
    "p_saturation": {
      "offset": 29,
      "size": 1
    },
    "p_scale": {
      "offset": 30,
      "size": 1
    },
    "p_speed": {
      "offset": 31,
      "size": 1
    },
    "p_swirl": {
      "offset": 32,
      "size": 1
    },
    "p_warp": {
      "offset": 33,
      "size": 1
    },
    "p_zoom": {
      "offset": 34,
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
      "label": "Boil",
      "default": 3,
      "min": 0.015,
      "max": 20,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "drift",
      "label": "Drift",
      "default": 0.6,
      "min": 0,
      "max": 8,
      "step": 0.02,
      "integrate": true
    },
    {
      "key": "swirl",
      "label": "Swirl",
      "default": 0.05,
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
      "label": "Cell scale",
      "default": 7.5,
      "min": 0.3,
      "max": 60,
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
      "label": "Fold",
      "default": 0.4,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "zoom",
      "label": "Octave zoom",
      "default": 1.111,
      "min": 0.6,
      "max": 2,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "ripple",
      "label": "Ripple",
      "default": 0.3,
      "min": 0.02,
      "max": 3,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "edgeGain",
      "label": "Edge gain",
      "default": 10,
      "min": 0.5,
      "max": 60,
      "step": 0.5,
      "integrate": false
    },
    {
      "key": "blur",
      "label": "Rim width",
      "default": 2.5,
      "min": 0.5,
      "max": 12,
      "step": 0.25,
      "integrate": false
    },
    {
      "key": "fringe",
      "label": "Chromatic fringe",
      "default": 0.09,
      "min": 0,
      "max": 1.5,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 0.8,
      "min": 0.05,
      "max": 40,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.15,
      "min": 0.15,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "saturation",
      "label": "Saturation",
      "default": 1.5,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "floorLevel",
      "label": "Body fill",
      "default": 0.16,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.35,
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
      "key": "tint",
      "label": "Rim",
      "default": "#dbe8f7"
    },
    {
      "key": "body",
      "label": "Body",
      "default": "#0d1118"
    },
    {
      "key": "sheen",
      "label": "Sheen",
      "default": "#a8c8f0"
    }
  ],
  "statePresets": {
    "idle": {
      "contrast": 1.15,
      "drift": 0.6,
      "edgeGain": 12.5,
      "exposure": 0.8,
      "speed": 3,
      "swirl": 0.05,
      "warp": 0.4,
      "zoom": 1.07
    },
    "speaking": {
      "blur": 2,
      "bulge": 2.22,
      "contrast": 1.35,
      "drift": 0.8,
      "edgeGain": 5,
      "exposure": 2.35,
      "fringe": 0.23,
      "ripple": 1.18,
      "scale": 11.5,
      "speed": 1.4,
      "swirl": 0.6,
      "warp": 1.55,
      "zoom": 0.945
    },
    "thinking": {
      "blur": 2.75,
      "bulge": 0.38,
      "contrast": 1.5,
      "drift": 0.15,
      "edgeGain": 33,
      "exposure": 0.55,
      "fringe": 0.2,
      "light": 0.525,
      "rim": 0.69,
      "ripple": 0.18,
      "saturation": 2,
      "speed": 4.7,
      "swirl": 0.02,
      "warp": 0.34,
      "zoom": 1.12
    }
  },
  "stateColors": {
    "idle": {
      "body": "#0d1118",
      "sheen": "#a8c8f0",
      "tint": "#dbe8f7"
    },
    "speaking": {
      "body": "#090d1c",
      "sheen": "#8fb4f2",
      "tint": "#c2d6f5"
    },
    "thinking": {
      "body": "#090d1c",
      "sheen": "#8fb4f2",
      "tint": "#c2d6f5"
    }
  },
  "wgsl": "struct orb25Params {\n  anim: f32,\n  c_body: vec3f,\n  c_sheen: vec3f,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_blur: f32,\n  p_bulge: f32,\n  p_contrast: f32,\n  p_drift: f32,\n  p_edgeGain: f32,\n  p_exposure: f32,\n  p_floorLevel: f32,\n  p_fringe: f32,\n  p_light: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_ripple: f32,\n  p_saturation: f32,\n  p_scale: f32,\n  p_speed: f32,\n  p_swirl: f32,\n  p_warp: f32,\n  p_zoom: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb25Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn creaseField(fragCoord: vec2f, t: f32, drift: f32, sw: f32, creaseWarp: f32) -> vec2f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let pl = (uv / max((*u).p_radius, 1e-3f));\n  let z = sqrt(max((1f - dot(pl, pl)), 0f));\n  var p = ((pl / ((z + 1f) + (*u).p_bulge)) * (*u).p_scale);\n  p = (rot2(sw) * p);\n  p = (p + drift);\n  let octaveRot = mat2x2f(0.6000000238418579, -0.800000011920929, 0.800000011920929, 0.6000000238418579);\n  for (var i = 0u; i < 8u; i += 1u) {\n    let fi = (f32(i) + 1f);\n    p = (p + (sin(((p + t) + fi)) * creaseWarp));\n    p = ((octaveRot * p) * (*u).p_zoom);\n  }\n  return p;\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn creaseRender(fragCoord: vec2f, creaseWarp: f32, creaseGain: f32) -> vec3f {\n  let u = (&params);\n  let t = (*u).p_speed;\n  let drift = (*u).p_drift;\n  let sw = (*u).p_swirl;\n  let p0 = creaseField(fragCoord, t, drift, sw, creaseWarp);\n  let px = creaseField((fragCoord + vec2f((*u).p_blur, 0f)), t, drift, sw, creaseWarp);\n  let py = creaseField((fragCoord + vec2f(0f, (*u).p_blur)), t, drift, sw, creaseWarp);\n  var e = vec3f();\n  for (var i = 0u; i < 3u; i += 1u) {\n    let ph = (f32(i) * (*u).p_fringe);\n    let v0 = sin(((p0 * (*u).p_ripple) + ph));\n    let delta = (abs((sin(((px * (*u).p_ripple) + ph)) - v0)) + abs((sin(((py * (*u).p_ripple) + ph)) - v0)));\n    let m = tanh(((length(delta) * creaseGain) / max((*u).p_exposure, 1e-3f)));\n    if ((i == 0u)) {\n      e = vec3f(m, e.y, e.z);\n    }\n    else {\n      if ((i == 1u)) {\n        e = vec3f(e.x, m, e.z);\n      }\n      else {\n        e = vec3f(e.xy, m);\n      }\n    }\n  }\n  e = pow(clamp(e, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  var col = ((*u).c_tint * e);\n  col = (col + ((*u).c_body * (*u).p_floorLevel));\n  let lum = luma(col);\n  col = mix(vec3f(lum), col, (*u).p_saturation);\n  let pl = ((((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y)) / max((*u).p_radius, 1e-3f));\n  let z = sqrt(max((1f - dot(pl, pl)), 0f));\n  let n = vec3f(pl, z);\n  let lambert = clamp(dot(n, vec3f(-0.4448256194591522, 0.5436757802963257, 0.7117210030555725)), 0f, 1f);\n  col = (col * (0.62f + ((*u).p_light * lambert)));\n  let fres = (1f - z);\n  let fresCubed = ((fres * fres) * fres);\n  col = (col + ((*u).c_sheen * ((*u).p_rim * fresCubed)));\n  return col;\n}\n\nstruct orb25Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb25Fragment(_arg_0: orb25Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let creaseWarp = ((*u).p_warp * (1f + (0.4f * (*u).inputVol)));\n  let creaseGain = ((*u).p_edgeGain * (1f + (0.5f * (*u).outputVol)));\n  let mask = smoothstep(0.012f, -0.012f, (length(orbUv) - max((*u).p_radius, 1e-3f)));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let col = creaseRender(fragCoord, creaseWarp, creaseGain);\n  let a = mask;\n  return vec4f((max(col, vec3f()) * a), a);\n}"
};
