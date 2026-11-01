import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb05: OrbDefinition = {
  "slug": "orb-05",
  "title": "ORB-05",
  "note": "rainbow rings travelling through a lattice of lenses",
  "entryPoint": "orb05Fragment",
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
    "p_bulge": {
      "offset": 17,
      "size": 1
    },
    "p_contrast": {
      "offset": 18,
      "size": 1
    },
    "p_floorLevel": {
      "offset": 19,
      "size": 1
    },
    "p_freq": {
      "offset": 20,
      "size": 1
    },
    "p_gain": {
      "offset": 21,
      "size": 1
    },
    "p_lens": {
      "offset": 22,
      "size": 1
    },
    "p_light": {
      "offset": 23,
      "size": 1
    },
    "p_poleSoft": {
      "offset": 24,
      "size": 1
    },
    "p_radius": {
      "offset": 25,
      "size": 1
    },
    "p_rim": {
      "offset": 26,
      "size": 1
    },
    "p_ring": {
      "offset": 27,
      "size": 1
    },
    "p_saturation": {
      "offset": 28,
      "size": 1
    },
    "p_scale": {
      "offset": 29,
      "size": 1
    },
    "p_slide": {
      "offset": 30,
      "size": 1
    },
    "p_spread": {
      "offset": 31,
      "size": 1
    },
    "p_swirl": {
      "offset": 32,
      "size": 1
    },
    "res": {
      "offset": 34,
      "size": 2
    },
    "time": {
      "offset": 36,
      "size": 1
    }
  },
  "params": [
    {
      "key": "ring",
      "label": "Ring speed",
      "default": 0.9,
      "min": 0,
      "max": 8,
      "step": 0.03,
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
      "key": "slide",
      "label": "Lattice slide",
      "default": 0.12,
      "min": 0,
      "max": 4,
      "step": 0.02,
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
      "label": "Lattice scale",
      "default": 5,
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
      "key": "lens",
      "label": "Lens strength",
      "default": 1,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "poleSoft",
      "label": "Wall softness",
      "default": 0.02,
      "min": 0.0008,
      "max": 0.5,
      "step": 0.0008,
      "integrate": false
    },
    {
      "key": "freq",
      "label": "Ring frequency",
      "default": 1,
      "min": 0.05,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "spread",
      "label": "Colour split",
      "default": 1,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Brightness",
      "default": 1.1,
      "min": 0.05,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1,
      "min": 0.15,
      "max": 6,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "saturation",
      "label": "Saturation",
      "default": 1.15,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "floorLevel",
      "label": "Body fill",
      "default": 0.12,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.4,
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
      "label": "Tint",
      "default": "#ffffff"
    },
    {
      "key": "body",
      "label": "Body",
      "default": "#141a30"
    },
    {
      "key": "sheen",
      "label": "Sheen",
      "default": "#bcd8ff"
    }
  ],
  "statePresets": {
    "idle": {
      "bulge": 0,
      "contrast": 1,
      "freq": 1.05,
      "gain": 1.1,
      "lens": 0.38,
      "light": 0.66,
      "poleSoft": 0.012,
      "ring": 0.9,
      "saturation": 1.14,
      "slide": 0.26,
      "spread": 0.7,
      "swirl": 0.195
    },
    "speaking": {
      "bulge": 0.96,
      "contrast": 0.75,
      "freq": 4.8,
      "gain": 1.6,
      "lens": 1.2,
      "poleSoft": 0.064,
      "ring": 1.4,
      "slide": 1,
      "spread": 0.68,
      "swirl": 0.6
    },
    "thinking": {
      "bulge": 0.36,
      "contrast": 3.2,
      "floorLevel": 0.4,
      "freq": 1.3,
      "gain": 0.88,
      "lens": 1.28,
      "poleSoft": 0.042,
      "rim": 0,
      "ring": 3,
      "saturation": 2.36,
      "slide": 0.88,
      "spread": 1.82,
      "swirl": 0.57
    }
  },
  "stateColors": {
    "idle": {
      "body": "#141a30",
      "sheen": "#bcd8ff",
      "tint": "#ffffff"
    },
    "speaking": {
      "body": "#2e1408",
      "sheen": "#ffb277",
      "tint": "#ffc492"
    },
    "thinking": {
      "body": "#080c26",
      "sheen": "#7ea9ff",
      "tint": "#a6c0ff"
    }
  },
  "wgsl": "struct orb05Params {\n  anim: f32,\n  c_body: vec3f,\n  c_sheen: vec3f,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_bulge: f32,\n  p_contrast: f32,\n  p_floorLevel: f32,\n  p_freq: f32,\n  p_gain: f32,\n  p_lens: f32,\n  p_light: f32,\n  p_poleSoft: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_ring: f32,\n  p_saturation: f32,\n  p_scale: f32,\n  p_slide: f32,\n  p_spread: f32,\n  p_swirl: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb05Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn tanSoft(x: vec2f, g: f32) -> vec2f {\n  let s = sin(x);\n  let c = cos(x);\n  return ((s * c) / ((c * c) + g));\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn causticRender(fragCoord: vec2f, causticSoft: f32, causticGain: f32, causticSpread: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let R = max((*u).p_radius, 1e-3f);\n  let pl = (uv / R);\n  let z = sqrt(max((1f - dot(pl, pl)), 0f));\n  let ring = (*u).p_ring;\n  var p = ((pl / ((z + 1f) + (*u).p_bulge)) * (*u).p_scale);\n  let sw = (*u).p_swirl;\n  p = (rot2(sw) * p);\n  p = (p + vec2f((*u).p_slide, ((*u).p_slide * 0.6f)));\n  let L = length(((tanSoft(p, causticSoft) * (*u).p_lens) + p));\n  var col = cos(((vec3f(0, 0.699999988079071, 1) * causticSpread) + ((L * (*u).p_freq) - ring)));\n  col = (max(col, vec3f()) * causticGain);\n  col = pow(col, vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  col = (col + ((*u).c_body * (*u).p_floorLevel));\n  let n = vec3f(pl, z);\n  let lambert = clamp(dot(n, vec3f(-0.4448256194591522, 0.5436757802963257, 0.7117210030555725)), 0f, 1f);\n  col = (col * (0.6f + ((*u).p_light * lambert)));\n  let fres = (1f - z);\n  let fresCubed = ((fres * fres) * fres);\n  col = (col + ((*u).c_sheen * ((*u).p_rim * fresCubed)));\n  return col;\n}\n\nstruct orb05Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb05Fragment(_arg_0: orb05Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let causticSoft = max(((*u).p_poleSoft * (1f - (0.5f * (*u).inputVol))), 8e-4f);\n  let causticGain = ((*u).p_gain * (0.85f + (0.45f * (*u).outputVol)));\n  let causticSpread = ((*u).p_spread * (1f + (0.5f * (*u).outputVol)));\n  let mask = smoothstep(0.012f, -0.012f, (length(orbUv) - max((*u).p_radius, 1e-3f)));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let col = causticRender(fragCoord, causticSoft, causticGain, causticSpread);\n  return vec4f((max(col, vec3f()) * mask), mask);\n}"
};
