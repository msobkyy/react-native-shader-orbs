import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb33: OrbDefinition = {
  "slug": "orb-33",
  "title": "ORB-33",
  "note": "a thermal image, risograph-printed on the ball",
  "entryPoint": "orb33Fragment",
  "uniformSize": 240,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_cold": {
      "offset": 4,
      "size": 3
    },
    "c_cool": {
      "offset": 8,
      "size": 3
    },
    "c_core": {
      "offset": 12,
      "size": 3
    },
    "c_hot": {
      "offset": 16,
      "size": 3
    },
    "c_paper": {
      "offset": 20,
      "size": 3
    },
    "c_warm": {
      "offset": 24,
      "size": 3
    },
    "inputVol": {
      "offset": 27,
      "size": 1
    },
    "outputVol": {
      "offset": 28,
      "size": 1
    },
    "p_banding": {
      "offset": 29,
      "size": 1
    },
    "p_bands": {
      "offset": 30,
      "size": 1
    },
    "p_contrast": {
      "offset": 31,
      "size": 1
    },
    "p_dither": {
      "offset": 32,
      "size": 1
    },
    "p_dotGain": {
      "offset": 33,
      "size": 1
    },
    "p_dotSoft": {
      "offset": 34,
      "size": 1
    },
    "p_dots": {
      "offset": 35,
      "size": 1
    },
    "p_freq": {
      "offset": 36,
      "size": 1
    },
    "p_gain": {
      "offset": 37,
      "size": 1
    },
    "p_grain": {
      "offset": 38,
      "size": 1
    },
    "p_grainSize": {
      "offset": 39,
      "size": 1
    },
    "p_hi": {
      "offset": 40,
      "size": 1
    },
    "p_ink": {
      "offset": 41,
      "size": 1
    },
    "p_jitter": {
      "offset": 42,
      "size": 1
    },
    "p_light": {
      "offset": 43,
      "size": 1
    },
    "p_lo": {
      "offset": 44,
      "size": 1
    },
    "p_misregister": {
      "offset": 45,
      "size": 1
    },
    "p_printMix": {
      "offset": 46,
      "size": 1
    },
    "p_radius": {
      "offset": 47,
      "size": 1
    },
    "p_rim": {
      "offset": 48,
      "size": 1
    },
    "p_scale": {
      "offset": 49,
      "size": 1
    },
    "p_speed": {
      "offset": 50,
      "size": 1
    },
    "p_spin": {
      "offset": 51,
      "size": 1
    },
    "p_warp": {
      "offset": 52,
      "size": 1
    },
    "res": {
      "offset": 54,
      "size": 2
    },
    "time": {
      "offset": 56,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Drift",
      "default": 0.5,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "spin",
      "label": "Roll",
      "default": 0.05,
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
      "label": "Zoom",
      "default": 3,
      "min": 0.3,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "freq",
      "label": "Pool scale",
      "default": 1.4,
      "min": 0.2,
      "max": 6,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "warp",
      "label": "Warp",
      "default": 0.6,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "lo",
      "label": "Cold threshold",
      "default": 0.42,
      "min": 0,
      "max": 1,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "hi",
      "label": "Hot threshold",
      "default": 0.74,
      "min": 0,
      "max": 1,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Heat gain",
      "default": 1,
      "min": 0.1,
      "max": 6,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "jitter",
      "label": "Heat jitter",
      "default": 0.015,
      "min": 0,
      "max": 0.5,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "bands",
      "label": "Contour bands",
      "default": 7,
      "min": 2,
      "max": 24,
      "step": 1,
      "integrate": false
    },
    {
      "key": "banding",
      "label": "Contour strength",
      "default": 0.85,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1,
      "min": 0.3,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "dither",
      "label": "Dither",
      "default": 0.05,
      "min": 0,
      "max": 0.6,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "dots",
      "label": "Screen pitch",
      "default": 46,
      "min": 4,
      "max": 120,
      "step": 1,
      "integrate": false
    },
    {
      "key": "dotGain",
      "label": "Dot gain",
      "default": 1,
      "min": 0.2,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "dotSoft",
      "label": "Dot softness",
      "default": 0.12,
      "min": 0.01,
      "max": 0.3,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "misregister",
      "label": "Misregistration",
      "default": 0.5,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "ink",
      "label": "Ink density",
      "default": 0.92,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "printMix",
      "label": "Print mix",
      "default": 0.28,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "grain",
      "label": "Paper grain",
      "default": 0.35,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "grainSize",
      "label": "Grain size",
      "default": 2,
      "min": 1,
      "max": 8,
      "step": 1,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.25,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim light",
      "default": 0.25,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "cold",
      "label": "Cold",
      "default": "#0b0a1e"
    },
    {
      "key": "cool",
      "label": "Cool",
      "default": "#3b2a9a"
    },
    {
      "key": "warm",
      "label": "Warm",
      "default": "#f05a28"
    },
    {
      "key": "hot",
      "label": "Hot",
      "default": "#f6b53a"
    },
    {
      "key": "core",
      "label": "Core",
      "default": "#fff1e6"
    },
    {
      "key": "paper",
      "label": "Paper",
      "default": "#f4ecdf"
    }
  ],
  "statePresets": {
    "idle": {
      "banding": 0.85,
      "contrast": 1,
      "gain": 1,
      "grain": 0.35,
      "hi": 0.74,
      "jitter": 0.015,
      "lo": 0.42,
      "speed": 0.5,
      "spin": 0.05,
      "warp": 0.6
    },
    "speaking": {
      "banding": 0.85,
      "contrast": 1,
      "gain": 1,
      "grain": 0.35,
      "hi": 0.72,
      "jitter": 0,
      "lo": 0.345,
      "speed": 8.8,
      "spin": 2.01,
      "warp": 1.42,
      "freq": 1.3
    },
    "thinking": {
      "banding": 0.75,
      "contrast": 1,
      "gain": 1,
      "grain": 0.35,
      "hi": 0.66,
      "jitter": 0,
      "lo": 0.3,
      "speed": 10,
      "spin": 0.51,
      "warp": 1.82,
      "bands": 6,
      "dots": 42,
      "freq": 3.1,
      "scale": 4.6
    }
  },
  "stateColors": {
    "idle": {
      "cold": "#0b0a1e",
      "cool": "#3b2a9a",
      "core": "#fff1e6",
      "hot": "#f6b53a",
      "warm": "#f05a28"
    },
    "speaking": {
      "cold": "#0b0a1e",
      "cool": "#3b2a9a",
      "core": "#fff1e6",
      "hot": "#f6b53a",
      "warm": "#f05a28"
    },
    "thinking": {
      "cold": "#0b0a1e",
      "cool": "#3b2a9a",
      "core": "#fff1e6",
      "hot": "#f6b53a",
      "warm": "#f05a28"
    }
  },
  "wgsl": "struct orb33Params {\n  anim: f32,\n  c_cold: vec3f,\n  c_cool: vec3f,\n  c_core: vec3f,\n  c_hot: vec3f,\n  c_paper: vec3f,\n  c_warm: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_banding: f32,\n  p_bands: f32,\n  p_contrast: f32,\n  p_dither: f32,\n  p_dotGain: f32,\n  p_dotSoft: f32,\n  p_dots: f32,\n  p_freq: f32,\n  p_gain: f32,\n  p_grain: f32,\n  p_grainSize: f32,\n  p_hi: f32,\n  p_ink: f32,\n  p_jitter: f32,\n  p_light: f32,\n  p_lo: f32,\n  p_misregister: f32,\n  p_printMix: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_scale: f32,\n  p_speed: f32,\n  p_spin: f32,\n  p_warp: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb33Params;\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn noise(p: vec2f) -> f32 {\n  let i = floor(p);\n  let f = fract(p);\n  let ff = ((f * f) * (vec2f(3) - (f * 2f)));\n  return mix(mix(hash(i), hash((i + vec2f(1, 0))), ff.x), mix(hash((i + vec2f(0, 1))), hash((i + vec2f(1))), ff.x), ff.y);\n}\n\nfn grainNoise(gpix: vec2f, frame: f32, seed: f32) -> f32 {\n  return hash((gpix + vec2f(((frame * 13.71f) + seed), ((frame * 7.37f) - seed))));\n}\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn screen(uv: vec2f, a: f32, o: vec2f, coverage: f32, soft: f32) -> f32 {\n  let u = (&params);\n  let cell = (((rot2(a) * uv) * (*u).p_dots) + o);\n  let f = (fract(cell) - 0.5f);\n  let dist = length(f);\n  let size = (0.5f * sqrt(clamp((coverage * (*u).p_dotGain), 0f, 1f)));\n  return (1f - smoothstep((size - soft), (size + soft), dist));\n}\n\nstruct orb33Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb33Fragment(_arg_0: orb33Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let heatGainNow = ((*u).p_gain * (1f + (0.6f * (*u).outputVol)));\n  let heatJitterNow = ((*u).p_jitter * (1f + (1.5f * (*u).inputVol)));\n  let rd = length(orbUv);\n  let R = (*u).p_radius;\n  let mask = smoothstep(0.012f, -0.012f, (rd - R));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let pl = (orbUv / R);\n  let r2 = dot(pl, pl);\n  let z = sqrt(max((1f - r2), 0f));\n  let n = vec3f(pl, z);\n  let cr = cos((*u).p_spin);\n  let sr = sin((*u).p_spin);\n  let sp = vec3f(((n.x * cr) - (n.z * sr)), n.y, ((n.x * sr) + (n.z * cr)));\n  let t = (*u).p_speed;\n  let st = ((sp.xy / (1.3f + sp.z)) * (*u).p_scale);\n  var p = ((st * (*u).p_freq) + vec2f((t * 0.11f), (-(t) * 0.07f)));\n  let wp = ((st * ((*u).p_freq * 0.55f)) + vec2f((-(t) * 0.05f), (t * 0.08f)));\n  let warp = (vec2f(noise((wp + 3.1f)), noise((wp + 9.4f))) - 0.5f);\n  p = (p + (warp * (*u).p_warp));\n  p = (p + (vec2f(sin((t * 3.7f)), cos((t * 4.3f))) * heatJitterNow));\n  let field = (((noise(p) * 0.62f) + (noise(((p * 2.1f) + 5.3f)) * 0.26f)) + (noise(((p * 4.2f) + 1.7f)) * 0.12f));\n  var heat = clamp((((field - (*u).p_lo) * heatGainNow) / max(((*u).p_hi - (*u).p_lo), 0.01f)), 0f, 1f);\n  let gpix = floor((fragCoord / max((*u).p_grainSize, 1f)));\n  let frame = floor(((*u).time * 48f));\n  heat += ((grainNoise(gpix, frame, 3.1f) - 0.5f) * (*u).p_dither);\n  let banded = (floor(((heat * (*u).p_bands) + 0.5f)) / (*u).p_bands);\n  heat = clamp(mix(heat, banded, (*u).p_banding), 0f, 1f);\n  heat = pow(heat, (*u).p_contrast);\n  var base = mix((*u).c_cold, (*u).c_cool, smoothstep(0f, 0.3f, heat));\n  base = mix(base, (*u).c_warm, smoothstep(0.3f, 0.55f, heat));\n  base = mix(base, (*u).c_hot, smoothstep(0.55f, 0.78f, heat));\n  base = mix(base, (*u).c_core, smoothstep(0.78f, 0.97f, heat));\n  let soft = (*u).p_dotSoft;\n  let mis = (*u).p_misregister;\n  let cC = screen(orbUv, (0.035f * mis), (vec2f(0.2199999988079071, 0.11999999731779099) * mis), (1f - base.x), soft);\n  let cM = screen(orbUv, (-0.03f * mis), (vec2f(-0.14000000059604645, 0.20000000298023224) * mis), (1f - base.y), soft);\n  let cY = screen(orbUv, 0f, vec2f(), (1f - base.z), soft);\n  var print = (*u).c_paper;\n  print = (print * mix(vec3f(1), vec3f(0.05000000074505806, 0.6200000047683716, 0.9200000166893005), (cC * (*u).p_ink)));\n  print = (print * mix(vec3f(1), vec3f(0.9200000166893005, 0.07999999821186066, 0.47999998927116394), (cM * (*u).p_ink)));\n  print = (print * mix(vec3f(1), vec3f(0.9800000190734863, 0.8600000143051147, 0.019999999552965164), (cY * (*u).p_ink)));\n  var col = mix(base, print, (*u).p_printMix);\n  col = (col * (1f + ((grainNoise(gpix, frame, 27.9f) - 0.5f) * (*u).p_grain)));\n  let lambert = clamp(dot(n, vec3f(-0.4511292278766632, 0.5513802170753479, 0.7017565965652466)), 0f, 1f);\n  col = (col * (1f - ((*u).p_light * (1f - lambert))));\n  let fres = pow((1f - z), 2.5f);\n  col = (col + ((*u).c_paper * (((*u).p_rim * fres) * 0.5f)));\n  let a = mask;\n  return vec4f((max(col, vec3f()) * a), a);\n}"
};
