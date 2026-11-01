import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb16: OrbDefinition = {
  "slug": "orb-16",
  "title": "ORB-16",
  "note": "sunlight through water — a caustic net crawling over the ball, fringing into colour where it moves",
  "entryPoint": "orb16Fragment",
  "uniformSize": 144,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_deep": {
      "offset": 4,
      "size": 3
    },
    "c_sheen": {
      "offset": 8,
      "size": 3
    },
    "c_sun": {
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
    "p_contrast": {
      "offset": 17,
      "size": 1
    },
    "p_edge": {
      "offset": 18,
      "size": 1
    },
    "p_flow": {
      "offset": 19,
      "size": 1
    },
    "p_gain": {
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
    "p_scale": {
      "offset": 24,
      "size": 1
    },
    "p_spin": {
      "offset": 25,
      "size": 1
    },
    "p_split": {
      "offset": 26,
      "size": 1
    },
    "p_swell": {
      "offset": 27,
      "size": 1
    },
    "p_swellRate": {
      "offset": 28,
      "size": 1
    },
    "p_warp": {
      "offset": 29,
      "size": 1
    },
    "res": {
      "offset": 30,
      "size": 2
    },
    "time": {
      "offset": 32,
      "size": 1
    }
  },
  "params": [
    {
      "key": "flow",
      "label": "Water flow",
      "default": 0.9,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "spin",
      "label": "Turn",
      "default": 0.08,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": true
    },
    {
      "key": "swellRate",
      "label": "Surge rate",
      "default": 0.6,
      "min": 0,
      "max": 8,
      "step": 0.05,
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
      "label": "Net scale",
      "default": 9,
      "min": 3,
      "max": 30,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "warp",
      "label": "Ripple depth",
      "default": 0.8,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "edge",
      "label": "Line sharpness",
      "default": 2.2,
      "min": 0.5,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "split",
      "label": "Colour fringe",
      "default": 0.6,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "swell",
      "label": "Surge depth",
      "default": 0.15,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Sun power",
      "default": 1.6,
      "min": 0.05,
      "max": 6,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Tone knee",
      "default": 1.1,
      "min": 0.15,
      "max": 6,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Floor light",
      "default": 0.9,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim sheen",
      "default": 0.6,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "deep",
      "label": "Water",
      "default": "#0b2f6e"
    },
    {
      "key": "sun",
      "label": "Caustic light",
      "default": "#7ff6ff"
    },
    {
      "key": "sheen",
      "label": "Sheen",
      "default": "#bfe8ff"
    }
  ],
  "statePresets": {
    "idle": {
      "contrast": 1.3,
      "edge": 3,
      "flow": 0.92,
      "gain": 6,
      "light": 0.9,
      "rim": 0.6,
      "spin": 0.09,
      "split": 0.6,
      "swell": 0.15,
      "swellRate": 0.6,
      "warp": 0.8
    },
    "speaking": {
      "contrast": 0.85,
      "edge": 1.7,
      "flow": 1.8,
      "gain": 3.6,
      "light": 0.96,
      "rim": 0.18,
      "spin": 0.7,
      "split": 1.1,
      "swell": 1,
      "swellRate": 5.4,
      "warp": 1.7
    },
    "thinking": {
      "contrast": 1.15,
      "edge": 2.8,
      "flow": 3.22,
      "gain": 3.35,
      "light": 0.525,
      "rim": 0.21,
      "spin": 0.03,
      "split": 0.36,
      "swell": 0.26,
      "swellRate": 2.4,
      "warp": 1.52
    }
  },
  "stateColors": {
    "idle": {
      "deep": "#6f0b0b",
      "sheen": "#bfe8ff",
      "sun": "#7ff6ff"
    },
    "speaking": {
      "deep": "#8d2525",
      "sheen": "#ffb3c6",
      "sun": "#ffb914"
    },
    "thinking": {
      "deep": "#3a0808",
      "sheen": "#ffffff",
      "sun": "#ffffff"
    }
  },
  "wgsl": "struct orb16Params {\n  anim: f32,\n  c_deep: vec3f,\n  c_sheen: vec3f,\n  c_sun: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_contrast: f32,\n  p_edge: f32,\n  p_flow: f32,\n  p_gain: f32,\n  p_light: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_scale: f32,\n  p_spin: f32,\n  p_split: f32,\n  p_swell: f32,\n  p_swellRate: f32,\n  p_warp: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb16Params;\n\nfn fold(p: vec2f, t: f32, warp: f32) -> vec2f {\n  var q = p;\n  q = (q + (sin(((q.yx * 1.31f) + vec2f((t * 0.9f), (-(t) * 0.7f)))) * warp));\n  q = (q + (sin(((q.yx * 2.17f) + vec2f((-(t) * 1.3f), (t * 1.1f)))) * (warp * 0.6f)));\n  q = (q + (sin(((q.yx * 3.73f) + vec2f((t * 1.9f), (t * 1.6f)))) * (warp * 0.35f)));\n  return q;\n}\n\nfn net(p: vec2f, t: f32, warp: f32) -> f32 {\n  let u = (&params);\n  let q = fold(p, t, warp);\n  let s = (vec2f(1) - abs(sin(q)));\n  let l = pow(s, vec2f((*u).p_edge));\n  return (((l.x + l.y) + ((2f * l.x) * l.y)) * 0.25f);\n}\n\nfn netOn(sp: vec3f, t: f32, warp: f32) -> f32 {\n  let u = (&params);\n  var w = (sp * sp);\n  w = (w * w);\n  w = (w / ((w.x + w.y) + w.z));\n  let k = (*u).p_scale;\n  return (((w.x * net((sp.yz * k), t, warp)) + (w.y * net((sp.zx * k), t, warp))) + (w.z * net((sp.xy * k), t, warp)));\n}\n\nstruct orb16Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb16Fragment(_arg_0: orb16Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let rd = length(uv);\n  let R = (*u).p_radius;\n  let mask = smoothstep(0.012f, -0.012f, (rd - R));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let pl = (uv / R);\n  let z = sqrt(max((1f - dot(pl, pl)), 0f));\n  let n = vec3f(pl, z);\n  let cr = cos((*u).p_spin);\n  let sr = sin((*u).p_spin);\n  let sp = vec3f(((n.x * cr) - (n.z * sr)), n.y, ((n.x * sr) + (n.z * cr)));\n  let t = (*u).p_flow;\n  let surge = (0.5f - (0.5f * cos((*u).p_swellRate)));\n  let gainNow = (((*u).p_gain * mix(1f, (0.55f + (0.9f * surge)), (*u).p_swell)) * (0.8f + (0.5f * (*u).outputVol)));\n  let causticWarp = (((*u).p_warp * mix(1f, (0.8f + (0.4f * surge)), (*u).p_swell)) * (1f + (0.35f * (*u).inputVol)));\n  const ds = 0.09000000357627869f;\n  let c = vec3f(netOn(sp, (t + ds), causticWarp), netOn(sp, t, causticWarp), netOn(sp, (t - ds), causticWarp));\n  let cLum = dot(c, vec3f(0.3333333432674408));\n  let fringe = ((c - cLum) * (*u).p_split);\n  let lambert = clamp(dot(n, vec3f(-0.4511292278766632, 0.5513802170753479, 0.7017565965652466)), 0f, 1f);\n  let fres = pow((1f - z), 2.5f);\n  var col = ((*u).c_deep * (0.35f + ((0.65f * (*u).p_light) * lambert)));\n  col = (col + ((((*u).c_sun * cLum) + fringe) * (gainNow * (0.55f + (0.45f * lambert)))));\n  col = (col + ((*u).c_sheen * ((*u).p_rim * fres)));\n  col = pow(max(col, vec3f()), vec3f((*u).p_contrast));\n  col = tanh(col);\n  let alpha = mask;\n  return vec4f((max(col, vec3f()) * alpha), alpha);\n}"
};
