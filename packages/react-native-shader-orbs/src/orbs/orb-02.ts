import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb02: OrbDefinition = {
  "slug": "orb-02",
  "title": "ORB-02",
  "note": "ornate scrollwork on a rolling dome",
  "entryPoint": "orb02Fragment",
  "uniformSize": 88,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "inputVol": {
      "offset": 1,
      "size": 1
    },
    "outputVol": {
      "offset": 2,
      "size": 1
    },
    "p_alphaGain": {
      "offset": 3,
      "size": 1
    },
    "p_baseVis": {
      "offset": 4,
      "size": 1
    },
    "p_bulge": {
      "offset": 5,
      "size": 1
    },
    "p_coreClamp": {
      "offset": 6,
      "size": 1
    },
    "p_falloff": {
      "offset": 7,
      "size": 1
    },
    "p_gain": {
      "offset": 8,
      "size": 1
    },
    "p_hueShift": {
      "offset": 9,
      "size": 1
    },
    "p_radius": {
      "offset": 10,
      "size": 1
    },
    "p_rim": {
      "offset": 11,
      "size": 1
    },
    "p_rimPow": {
      "offset": 12,
      "size": 1
    },
    "p_speed": {
      "offset": 13,
      "size": 1
    },
    "p_swell": {
      "offset": 14,
      "size": 1
    },
    "p_swirl": {
      "offset": 15,
      "size": 1
    },
    "p_warpFreq": {
      "offset": 16,
      "size": 1
    },
    "p_zoom": {
      "offset": 17,
      "size": 1
    },
    "res": {
      "offset": 18,
      "size": 2
    },
    "time": {
      "offset": 20,
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
      "default": 0.06,
      "min": 0,
      "max": 3,
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
      "key": "swell",
      "label": "Input swell",
      "default": 0.06,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "zoom",
      "label": "Pattern zoom",
      "default": 4.4,
      "min": 0.15,
      "max": 40,
      "step": 0.2,
      "integrate": false
    },
    {
      "key": "bulge",
      "label": "Sphere bulge",
      "default": 0.35,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "warpFreq",
      "label": "Warp frequency",
      "default": 1.5,
      "min": 0.05,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "hueShift",
      "label": "Hue shift",
      "default": 0,
      "min": 0,
      "max": 6.283,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "coreClamp",
      "label": "Flare size",
      "default": 0.12,
      "min": 0.003,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "falloff",
      "label": "Fill",
      "default": 1,
      "min": 0.05,
      "max": 4,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Exposure",
      "default": 0.55,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim light",
      "default": 0.12,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "rimPow",
      "label": "Rim tightness",
      "default": 2.2,
      "min": 0.15,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "alphaGain",
      "label": "Alpha gain",
      "default": 2.4,
      "min": 0.05,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "baseVis",
      "label": "Base visibility",
      "default": 0.08,
      "min": 0,
      "max": 1.5,
      "step": 0.01,
      "integrate": false
    }
  ],
  "colors": [],
  "statePresets": {
    "idle": {
      "alphaGain": 2.4,
      "coreClamp": 0.12,
      "falloff": 1,
      "gain": 0.55,
      "rim": 0.12,
      "speed": 0.5,
      "warpFreq": 1.5,
      "zoom": 4.4
    },
    "speaking": {
      "alphaGain": 3,
      "coreClamp": 0.07,
      "falloff": 1.1,
      "gain": 0.85,
      "rim": 0.2,
      "speed": 3,
      "warpFreq": 1.2,
      "zoom": 4.4
    },
    "thinking": {
      "alphaGain": 2.5,
      "coreClamp": 0.11,
      "falloff": 0.96,
      "gain": 0.6,
      "rim": 0.13,
      "speed": 0.65,
      "warpFreq": 1.6,
      "zoom": 4.6
    }
  },
  "wgsl": "struct orb02Params {\n  anim: f32,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_baseVis: f32,\n  p_bulge: f32,\n  p_coreClamp: f32,\n  p_falloff: f32,\n  p_gain: f32,\n  p_hueShift: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_rimPow: f32,\n  p_speed: f32,\n  p_swell: f32,\n  p_swirl: f32,\n  p_warpFreq: f32,\n  p_zoom: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb02Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nstruct orb02Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb02Fragment(_arg_0: orb02Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let R = ((*u).p_radius + ((*u).p_swell * (*u).inputVol));\n  let r2d = length(orbUv);\n  let mask = smoothstep(0.012f, -0.012f, (r2d - R));\n  let nr = clamp((r2d / max(R, 1e-3f)), 0f, 1f);\n  let z = sqrt(max((1f - (nr * nr)), 0f));\n  let animTime = (*u).p_speed;\n  let sp = vec3f((orbUv / max(R, 1e-3f)), z);\n  var p = ((sp.xy / ((sp.z + 1f) + (*u).p_bulge)) * (*u).p_zoom);\n  let sw = (animTime * (*u).p_swirl);\n  p = (rot2(sw) * p);\n  let warpFreq = ((*u).p_warpFreq * (1f + (0.35f * (*u).inputVol)));\n  let gain = ((*u).p_gain * (0.75f + (0.7f * (*u).outputVol)));\n  var acc = vec4f();\n  for (var i = 0u; i < 10u; i += 1u) {\n    let fi = (f32(i) + 1f);\n    var v = p;\n    for (var i_1 = 0u; i_1 < 9u; i_1 += 1u) {\n      let f = (f32(i_1) + 1f);\n      v = (v + (sin((((v.yx * (f * warpFreq)) + fi) + animTime)) / f));\n    }\n    let rad = pow(max(length(v), (*u).p_coreClamp), (*u).p_falloff);\n    acc = (acc + (((cos(((vec4f(0, 1, 2, 3) + fi) + (*u).p_hueShift)) + 1f) / 6f) / rad));\n  }\n  var col = tanh(((acc.xyz * acc.xyz) * gain));\n  let fresnel = pow((1f - z), (*u).p_rimPow);\n  col = (col + (vec3f(fresnel) * (*u).p_rim));\n  let lum = dot(col, vec3f(0.2125999927520752, 0.7152000069618225, 0.0722000002861023));\n  let visibility = clamp((((lum * (*u).p_alphaGain) + (*u).p_baseVis) + (fresnel * 0.25f)), 0f, 1f);\n  let a = (mask * visibility);\n  return vec4f((col * a), a);\n}"
};
