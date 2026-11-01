import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb30: OrbDefinition = {
  "slug": "orb-30",
  "title": "ORB-30",
  "note": "a meadow folding into itself toward a blue vanishing point",
  "entryPoint": "orb30Fragment",
  "uniformSize": 256,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_bloom": {
      "offset": 4,
      "size": 3
    },
    "c_canopy": {
      "offset": 8,
      "size": 3
    },
    "c_cloud": {
      "offset": 12,
      "size": 3
    },
    "c_meadow": {
      "offset": 16,
      "size": 3
    },
    "c_sheen": {
      "offset": 20,
      "size": 3
    },
    "c_sky": {
      "offset": 24,
      "size": 3
    },
    "c_water": {
      "offset": 28,
      "size": 3
    },
    "inputVol": {
      "offset": 31,
      "size": 1
    },
    "outputVol": {
      "offset": 32,
      "size": 1
    },
    "p_bulge": {
      "offset": 33,
      "size": 1
    },
    "p_cloudCover": {
      "offset": 34,
      "size": 1
    },
    "p_cloudScale": {
      "offset": 35,
      "size": 1
    },
    "p_contrast": {
      "offset": 36,
      "size": 1
    },
    "p_drift": {
      "offset": 37,
      "size": 1
    },
    "p_fall": {
      "offset": 38,
      "size": 1
    },
    "p_flowerDensity": {
      "offset": 39,
      "size": 1
    },
    "p_flowerScale": {
      "offset": 40,
      "size": 1
    },
    "p_flowerSize": {
      "offset": 41,
      "size": 1
    },
    "p_frameShade": {
      "offset": 42,
      "size": 1
    },
    "p_gain": {
      "offset": 43,
      "size": 1
    },
    "p_haze": {
      "offset": 44,
      "size": 1
    },
    "p_hazeRange": {
      "offset": 45,
      "size": 1
    },
    "p_horizon": {
      "offset": 46,
      "size": 1
    },
    "p_light": {
      "offset": 47,
      "size": 1
    },
    "p_radius": {
      "offset": 48,
      "size": 1
    },
    "p_ratio": {
      "offset": 49,
      "size": 1
    },
    "p_rim": {
      "offset": 50,
      "size": 1
    },
    "p_saturation": {
      "offset": 51,
      "size": 1
    },
    "p_scale": {
      "offset": 52,
      "size": 1
    },
    "p_streakFreq": {
      "offset": 53,
      "size": 1
    },
    "p_streakRad": {
      "offset": 54,
      "size": 1
    },
    "p_tilt": {
      "offset": 55,
      "size": 1
    },
    "p_water": {
      "offset": 56,
      "size": 1
    },
    "res": {
      "offset": 58,
      "size": 2
    },
    "time": {
      "offset": 60,
      "size": 1
    }
  },
  "params": [
    {
      "key": "fall",
      "label": "Fall speed",
      "default": 0.12,
      "min": 0,
      "max": 4,
      "step": 0.01,
      "integrate": true
    },
    {
      "key": "tilt",
      "label": "Frame tilt",
      "default": 0,
      "min": -1.6,
      "max": 1.6,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "drift",
      "label": "Weather drift",
      "default": 0.2,
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
      "label": "Tunnel scale",
      "default": 4.5,
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
      "key": "ratio",
      "label": "Frame ratio",
      "default": 1.8,
      "min": 1.1,
      "max": 6,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "horizon",
      "label": "Horizon",
      "default": 0.14,
      "min": -0.9,
      "max": 0.9,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "cloudScale",
      "label": "Cloud scale",
      "default": 1.6,
      "min": 0.1,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "cloudCover",
      "label": "Cloud cover",
      "default": 0.46,
      "min": 0.02,
      "max": 0.98,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "streakFreq",
      "label": "Wall detail",
      "default": 5,
      "min": 0.2,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "streakRad",
      "label": "Smear",
      "default": 0.5,
      "min": 0.02,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "water",
      "label": "Water",
      "default": 0.7,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "flowerScale",
      "label": "Flower scale",
      "default": 44,
      "min": 2,
      "max": 120,
      "step": 1,
      "integrate": false
    },
    {
      "key": "flowerDensity",
      "label": "Flower density",
      "default": 0.55,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "flowerSize",
      "label": "Flower size",
      "default": 0.26,
      "min": 0.05,
      "max": 0.6,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "frameShade",
      "label": "Frame shading",
      "default": 0.62,
      "min": 0.2,
      "max": 1.4,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "haze",
      "label": "Aerial haze",
      "default": 0.85,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "hazeRange",
      "label": "Haze reach",
      "default": 0.09,
      "min": 0.005,
      "max": 1.5,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Brightness",
      "default": 1.05,
      "min": 0.05,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.05,
      "min": 0.15,
      "max": 10,
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
      "default": 0.55,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "sky",
      "label": "Sky",
      "default": "#4a92e0"
    },
    {
      "key": "cloud",
      "label": "Cloud",
      "default": "#f7fbff"
    },
    {
      "key": "canopy",
      "label": "Canopy",
      "default": "#12401f"
    },
    {
      "key": "meadow",
      "label": "Meadow",
      "default": "#5aa63a"
    },
    {
      "key": "water",
      "label": "Water",
      "default": "#156f6a"
    },
    {
      "key": "bloom",
      "label": "Bloom",
      "default": "#ff6a3a"
    },
    {
      "key": "sheen",
      "label": "Sheen",
      "default": "#cfe6ff"
    }
  ],
  "statePresets": {
    "idle": {
      "bulge": 0.2,
      "cloudCover": 0.42,
      "cloudScale": 1.2,
      "drift": 0.2,
      "fall": 0.12,
      "flowerDensity": 0.27,
      "flowerScale": 24,
      "flowerSize": 0.43,
      "gain": 1.38,
      "haze": 0.8,
      "hazeRange": 0.09,
      "horizon": -0.11,
      "light": 0.345,
      "ratio": 3.06,
      "rim": 0.555,
      "saturation": 1.56,
      "streakFreq": 2.9,
      "streakRad": 0.54,
      "water": 0
    },
    "speaking": {
      "cloudCover": 0.44,
      "cloudScale": 3.65,
      "contrast": 1.45,
      "drift": 1.54,
      "fall": 1.47,
      "flowerDensity": 0.95,
      "flowerScale": 32,
      "gain": 1.36,
      "haze": 0.38,
      "hazeRange": 0.315,
      "horizon": 0.03,
      "light": 0.57,
      "saturation": 2.32,
      "scale": 8.7,
      "streakFreq": 11,
      "streakRad": 1.48,
      "tilt": 0.03
    },
    "thinking": {
      "cloudCover": 0.3,
      "contrast": 1.45,
      "drift": 0.5,
      "fall": 0.6,
      "flowerDensity": 0.28,
      "gain": 1.42,
      "haze": 1,
      "hazeRange": 0.3,
      "light": 0.96,
      "saturation": 2
    }
  },
  "stateColors": {
    "idle": {
      "bloom": "#ff6a3a",
      "canopy": "#12401f",
      "cloud": "#f7fbff",
      "meadow": "#5aa63a",
      "sheen": "#cfe6ff",
      "sky": "#4a92e0",
      "water": "#156f6a"
    },
    "speaking": {
      "bloom": "#ffb02e",
      "canopy": "#204a16",
      "cloud": "#fff6e8",
      "meadow": "#7cc23f",
      "sheen": "#ffe3c4",
      "sky": "#6fb0ec",
      "water": "#1d8a76"
    },
    "thinking": {
      "bloom": "#7d8cff",
      "canopy": "#0e2c2e",
      "cloud": "#dde8f4",
      "meadow": "#3f7f5c",
      "sheen": "#b6cdf0",
      "sky": "#3f6fa8",
      "water": "#12525f"
    }
  },
  "wgsl": "struct orb30Params {\n  anim: f32,\n  c_bloom: vec3f,\n  c_canopy: vec3f,\n  c_cloud: vec3f,\n  c_meadow: vec3f,\n  c_sheen: vec3f,\n  c_sky: vec3f,\n  c_water: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_bulge: f32,\n  p_cloudCover: f32,\n  p_cloudScale: f32,\n  p_contrast: f32,\n  p_drift: f32,\n  p_fall: f32,\n  p_flowerDensity: f32,\n  p_flowerScale: f32,\n  p_flowerSize: f32,\n  p_frameShade: f32,\n  p_gain: f32,\n  p_haze: f32,\n  p_hazeRange: f32,\n  p_horizon: f32,\n  p_light: f32,\n  p_radius: f32,\n  p_ratio: f32,\n  p_rim: f32,\n  p_saturation: f32,\n  p_scale: f32,\n  p_streakFreq: f32,\n  p_streakRad: f32,\n  p_tilt: f32,\n  p_water: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb30Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn squareArc(q: vec2f) -> f32 {\n  if ((abs(q.x) >= abs(q.y))) {\n    if ((q.x > 0f)) {\n      return (q.y + 1f);\n    }\n    return (5f - q.y);\n  }\n  if ((q.y > 0f)) {\n    return (3f - q.x);\n  }\n  return (7f + q.x);\n}\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn noise(p: vec2f) -> f32 {\n  let i = floor(p);\n  let f = fract(p);\n  let ff = ((f * f) * (vec2f(3) - (f * 2f)));\n  return mix(mix(hash(i), hash((i + vec2f(1, 0))), ff.x), mix(hash((i + vec2f(0, 1))), hash((i + vec2f(1))), ff.x), ff.y);\n}\n\nfn fbm(pIn: vec2f) -> f32 {\n  var p = pIn;\n  var v = 0f;\n  var a = 0.5f;\n  for (var i = 0u; i < 5u; i += 1u) {\n    v += (a * noise(p));\n    p = ((p * 2.03f) + vec2f(11.699999809265137, 7.300000190734863));\n    a *= 0.5f;\n  }\n  return v;\n}\n\nfn drosteFlower(h: f32) -> vec3f {\n  let u = (&params);\n  var c = (*u).c_cloud;\n  c = mix(c, (*u).c_bloom, step(0.52f, h));\n  c = mix(c, (*u).c_sky, step(0.86f, h));\n  return c;\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn drosteRender(fragCoord: vec2f, drosteCloud: f32, drosteHaze: f32, drosteBloom: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let R = max((*u).p_radius, 1e-3f);\n  let pl = (uv / R);\n  let z = sqrt(max((1f - dot(pl, pl)), 0f));\n  let fall = (*u).p_fall;\n  let drift = (*u).p_drift;\n  let sw = (*u).p_tilt;\n  var p = ((pl / ((z + 1f) + (*u).p_bulge)) * (*u).p_scale);\n  p = (rot2(sw) * p);\n  let m = max(max(abs(p.x), abs(p.y)), 2e-3f);\n  let K = max((*u).p_ratio, 1.05f);\n  let L = ((log2(m) / log2(K)) + fall);\n  let q = (p / m);\n  let sm = pow(K, fract(L));\n  let P = (q * sm);\n  let Yn = (P.y / K);\n  let arc = squareArc(q);\n  var col = mix(((*u).c_sky * 0.72f), (*u).c_sky, clamp((Yn * 1.3f), 0f, 1f));\n  let skyMask = smoothstep(((*u).p_horizon - 0.3f), ((*u).p_horizon + 0.2f), Yn);\n  var cl = fbm(((P * (*u).p_cloudScale) + vec2f(drift, (drift * 0.3f))));\n  cl = smoothstep(drosteCloud, (drosteCloud + 0.16f), cl);\n  col = mix(col, (*u).c_cloud, (cl * (0.2f + (0.8f * skyMask))));\n  let streak = fbm(vec2f((arc * (*u).p_streakFreq), (L * (*u).p_streakRad)));\n  var land = mix((*u).c_canopy, (*u).c_meadow, smoothstep(0.02f, -0.62f, Yn));\n  land = (land * (0.42f + (1.25f * streak)));\n  let water = (smoothstep(0.42f, 0.16f, streak) * smoothstep(0.05f, -0.3f, Yn));\n  land = mix(land, (*u).c_water, (water * (*u).p_water));\n  let fg = vec2f((arc * (*u).p_flowerScale), ((L * (*u).p_flowerScale) * 0.3f));\n  let fc = floor(fg);\n  let ff = (fract(fg) - 0.5f);\n  let dcv = (ff - ((vec2f(hash((fc + 3.7f)), hash((fc + 19.1f))) - 0.5f) * 0.6f));\n  let petal = smoothstep((*u).p_flowerSize, ((*u).p_flowerSize * 0.35f), length(dcv));\n  let present = step((1f - drosteBloom), hash((fc + 51.3f)));\n  let meadow = smoothstep(0.13f, -0.38f, Yn);\n  land = mix(land, drosteFlower(hash((fc + 7.9f))), ((petal * present) * meadow));\n  let landMask = (1f - smoothstep(((*u).p_horizon - 0.12f), ((*u).p_horizon + 0.16f), Yn));\n  col = mix(col, land, landMask);\n  col = (col * mix(1f, (*u).p_frameShade, fract(L)));\n  let deep = (1f - smoothstep(0f, (*u).p_hazeRange, m));\n  col = mix(col, (*u).c_sky, (deep * drosteHaze));\n  col = (pow(max(col, vec3f()), vec3f((*u).p_contrast)) * (*u).p_gain);\n  let lum = luma(col);\n  col = mix(vec3f(lum), col, (*u).p_saturation);\n  let n = vec3f(pl, z);\n  let lambert = clamp(dot(n, vec3f(-0.4448256194591522, 0.5436757802963257, 0.7117210030555725)), 0f, 1f);\n  col = (col * (0.72f + ((*u).p_light * lambert)));\n  let fres = (1f - z);\n  let fresCubed = ((fres * fres) * fres);\n  col = (col + ((*u).c_sheen * ((*u).p_rim * fresCubed)));\n  return col;\n}\n\nstruct orb30Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb30Fragment(_arg_0: orb30Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let drosteCloud = clamp(((*u).p_cloudCover - (0.12f * (*u).inputVol)), 0.02f, 0.98f);\n  let drosteHaze = ((*u).p_haze * (1f - (0.25f * (*u).outputVol)));\n  let drosteBloom = clamp(((*u).p_flowerDensity * (1f + (0.5f * (*u).outputVol))), 0f, 1f);\n  let mask = smoothstep(0.012f, -0.012f, (length(orbUv) - max((*u).p_radius, 1e-3f)));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let col = drosteRender(fragCoord, drosteCloud, drosteHaze, drosteBloom);\n  let a = mask;\n  return vec4f((max(col, vec3f()) * a), a);\n}"
};
