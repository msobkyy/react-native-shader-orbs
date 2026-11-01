import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb19: OrbDefinition = {
  "slug": "orb-19",
  "title": "ORB-19",
  "note": "beads swelling and shrinking in their cells, packed over the ball",
  "entryPoint": "orb19Fragment",
  "uniformSize": 176,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_body": {
      "offset": 4,
      "size": 3
    },
    "c_high": {
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
    "p_bead": {
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
    "p_edge": {
      "offset": 24,
      "size": 1
    },
    "p_floorLevel": {
      "offset": 25,
      "size": 1
    },
    "p_gain": {
      "offset": 26,
      "size": 1
    },
    "p_grow": {
      "offset": 27,
      "size": 1
    },
    "p_jitter": {
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
    "p_saturation": {
      "offset": 32,
      "size": 1
    },
    "p_scale": {
      "offset": 33,
      "size": 1
    },
    "p_skew": {
      "offset": 34,
      "size": 1
    },
    "p_slide": {
      "offset": 35,
      "size": 1
    },
    "p_speed": {
      "offset": 36,
      "size": 1
    },
    "p_swirl": {
      "offset": 37,
      "size": 1
    },
    "p_vary": {
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
      "label": "Anim speed",
      "default": 0.5,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
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
      "label": "Drift",
      "default": 0.1,
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
      "label": "Packing scale",
      "default": 10,
      "min": 0.3,
      "max": 30,
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
      "key": "grow",
      "label": "Dot size",
      "default": 0.185,
      "min": -0.2,
      "max": 1.2,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "vary",
      "label": "Size variation",
      "default": 0.13,
      "min": 0,
      "max": 0.4,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "skew",
      "label": "Generator detune",
      "default": 0.62,
      "min": 0,
      "max": 3,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "jitter",
      "label": "Dot wander",
      "default": 0.1,
      "min": 0,
      "max": 1.5,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "edge",
      "label": "Rim hardness",
      "default": 50,
      "min": 1,
      "max": 200,
      "step": 1,
      "integrate": false
    },
    {
      "key": "bead",
      "label": "Bead shading",
      "default": 0,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Brightness",
      "default": 1,
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
      "default": 1.1,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "floorLevel",
      "label": "Body fill",
      "default": 0.06,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.3,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim sheen",
      "default": 0.35,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "low",
      "label": "Dot",
      "default": "#ffffff"
    },
    {
      "key": "high",
      "label": "Dot accent",
      "default": "#eef5ff"
    },
    {
      "key": "body",
      "label": "Body",
      "default": "#05070c"
    },
    {
      "key": "sheen",
      "label": "Sheen",
      "default": "#9dbfe4"
    }
  ],
  "statePresets": {
    "idle": {
      "bulge": 0.08,
      "contrast": 2.6,
      "edge": 51,
      "gain": 2.28,
      "grow": 0.12,
      "jitter": 0.74,
      "rim": 0.345,
      "skew": 0.63,
      "slide": 0.1,
      "speed": 0.52,
      "swirl": 0.045,
      "vary": 0.19
    },
    "speaking": {
      "bulge": 0.28,
      "contrast": 3.2,
      "edge": 141,
      "floorLevel": 0,
      "gain": 1.35,
      "grow": 0.22,
      "jitter": 0.17,
      "saturation": 2.04,
      "skew": 0,
      "slide": 0.55,
      "speed": 2.85,
      "swirl": 0.585,
      "vary": 0.365
    },
    "thinking": {
      "bulge": 0.14,
      "contrast": 0.55,
      "gain": 1.04,
      "grow": 0.19,
      "jitter": 0.37,
      "light": 0.585,
      "rim": 0.24,
      "skew": 1.13,
      "slide": 0.84,
      "speed": 2.55,
      "swirl": 0.57,
      "vary": 0.165
    }
  },
  "stateColors": {
    "idle": {
      "body": "#05070c",
      "high": "#eef5ff",
      "low": "#ffffff",
      "sheen": "#9dbfe4"
    },
    "speaking": {
      "body": "#140a06",
      "high": "#ffffff",
      "low": "#ffffff",
      "sheen": "#ffffff"
    },
    "thinking": {
      "body": "#000000",
      "high": "#ffffff",
      "low": "#dae6ff",
      "sheen": "#ffffff"
    }
  },
  "wgsl": "struct orb19Params {\n  anim: f32,\n  c_body: vec3f,\n  c_high: vec3f,\n  c_low: vec3f,\n  c_sheen: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_bead: f32,\n  p_bulge: f32,\n  p_contrast: f32,\n  p_edge: f32,\n  p_floorLevel: f32,\n  p_gain: f32,\n  p_grow: f32,\n  p_jitter: f32,\n  p_light: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_saturation: f32,\n  p_scale: f32,\n  p_skew: f32,\n  p_slide: f32,\n  p_speed: f32,\n  p_swirl: f32,\n  p_vary: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb19Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn foamRender(fragCoord: vec2f, foamGrow: f32, foamJitter: f32, foamGain: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let R = max((*u).p_radius, 1e-3f);\n  let pl = (uv / R);\n  let z = sqrt(max((1f - dot(pl, pl)), 0f));\n  let t = (*u).p_speed;\n  var p = ((pl / ((z + 1f) + (*u).p_bulge)) * (*u).p_scale);\n  let sw = (*u).p_swirl;\n  p = (rot2(sw) * p);\n  p = (p + vec2f((*u).p_slide, ((*u).p_slide * 0.7f)));\n  let cell = ceil(p);\n  let f = (p - cell);\n  var cover = 0f;\n  var bestRel = 1e+9f;\n  var bestDelta = vec2f();\n  var bestRad = 1f;\n  var bestId = vec2f();\n  for (var i = 0u; i < 3u; i += 1u) {\n    for (var i_1 = 0u; i_1 < 3u; i_1 += 1u) {\n      let g = vec2f((f32(i_1) - 1f), (f32(i) - 1f));\n      let id = (cell + g);\n      let rad = ((dot(cos((id - t)), sin(((id.yx * (*u).p_skew) + t))) * (*u).p_vary) + foamGrow);\n      let jit = (cos((id.yx + t)) * foamJitter);\n      let delta = ((f - g) - jit);\n      let dist = length(delta);\n      cover = max(cover, clamp(((rad - dist) * (*u).p_edge), 0f, 1f));\n      let rel = (dist / max(rad, 1e-4f));\n      if ((rel < bestRel)) {\n        bestRel = rel;\n        bestDelta = delta;\n        bestRad = rad;\n        bestId = id;\n      }\n    }\n  }\n  let rr = max(bestRad, 1e-4f);\n  let dome = clamp((1f - (dot(bestDelta, bestDelta) / (rr * rr))), 0f, 1f);\n  let bn = normalize(vec3f((bestDelta / rr), (sqrt(dome) + 1e-3f)));\n  let key = vec3f(-0.4448256194591522, 0.5436757802963257, 0.7117210030555725);\n  let beadLam = clamp(dot(bn, key), 0f, 1f);\n  let beadCol = mix((*u).c_low, (*u).c_high, hash((bestId + 0.5f)));\n  let shade = mix(1f, (0.45f + (0.85f * beadLam)), (*u).p_bead);\n  var col = (beadCol * ((shade * foamGain) * cover));\n  col = (col + ((*u).c_body * (*u).p_floorLevel));\n  col = pow(max(col, vec3f()), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = mix(vec3f(lum), col, (*u).p_saturation);\n  let n = vec3f(pl, z);\n  let lambert = clamp(dot(n, key), 0f, 1f);\n  col = (col * (0.55f + ((*u).p_light * lambert)));\n  let fres = (1f - z);\n  let fresCubed = ((fres * fres) * fres);\n  col = (col + ((*u).c_sheen * ((*u).p_rim * fresCubed)));\n  return col;\n}\n\nstruct orb19Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb19Fragment(_arg_0: orb19Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let foamGrow = ((*u).p_grow * (1f + (0.35f * (*u).outputVol)));\n  let foamJitter = ((*u).p_jitter * (1f + (0.5f * (*u).inputVol)));\n  let foamGain = ((*u).p_gain * (0.85f + (0.4f * (*u).outputVol)));\n  let mask = smoothstep(0.012f, -0.012f, (length(orbUv) - max((*u).p_radius, 1e-3f)));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let col = foamRender(fragCoord, foamGrow, foamJitter, foamGain);\n  let a = mask;\n  return vec4f((max(col, vec3f()) * a), a);\n}"
};
