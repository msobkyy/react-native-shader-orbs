import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb17: OrbDefinition = {
  "slug": "orb-17",
  "title": "ORB-17",
  "note": "a grainy many-coloured storm with band shear and lightning",
  "entryPoint": "orb17Fragment",
  "uniformSize": 192,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_deep": {
      "offset": 4,
      "size": 3
    },
    "c_flash": {
      "offset": 8,
      "size": 3
    },
    "c_hot": {
      "offset": 12,
      "size": 3
    },
    "c_low": {
      "offset": 16,
      "size": 3
    },
    "c_mid": {
      "offset": 20,
      "size": 3
    },
    "inputVol": {
      "offset": 23,
      "size": 1
    },
    "outputVol": {
      "offset": 24,
      "size": 1
    },
    "p_bands": {
      "offset": 25,
      "size": 1
    },
    "p_churn": {
      "offset": 26,
      "size": 1
    },
    "p_contrast": {
      "offset": 27,
      "size": 1
    },
    "p_filmGrain": {
      "offset": 28,
      "size": 1
    },
    "p_flash": {
      "offset": 29,
      "size": 1
    },
    "p_flashRate": {
      "offset": 30,
      "size": 1
    },
    "p_gain": {
      "offset": 31,
      "size": 1
    },
    "p_grain": {
      "offset": 32,
      "size": 1
    },
    "p_grainSize": {
      "offset": 33,
      "size": 1
    },
    "p_light": {
      "offset": 34,
      "size": 1
    },
    "p_radius": {
      "offset": 35,
      "size": 1
    },
    "p_rainbow": {
      "offset": 36,
      "size": 1
    },
    "p_rim": {
      "offset": 37,
      "size": 1
    },
    "p_scale": {
      "offset": 38,
      "size": 1
    },
    "p_shear": {
      "offset": 39,
      "size": 1
    },
    "p_speed": {
      "offset": 40,
      "size": 1
    },
    "p_spin": {
      "offset": 41,
      "size": 1
    },
    "p_warp": {
      "offset": 42,
      "size": 1
    },
    "res": {
      "offset": 44,
      "size": 2
    },
    "time": {
      "offset": 46,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Storm speed",
      "default": 0.9,
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
      "label": "Weather scale",
      "default": 2.4,
      "min": 0.3,
      "max": 12,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "bands",
      "label": "Band count",
      "default": 6,
      "min": 0,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "shear",
      "label": "Band shear",
      "default": 1.1,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "warp",
      "label": "Warp",
      "default": 2.2,
      "min": 0,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "churn",
      "label": "Churn",
      "default": 1.4,
      "min": 0,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Brightness",
      "default": 1.15,
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
      "key": "grain",
      "label": "Field grain",
      "default": 0.4,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "filmGrain",
      "label": "Film grain",
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
      "key": "rainbow",
      "label": "Iridescence",
      "default": 0.65,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "flashRate",
      "label": "Flash rate",
      "default": 1.6,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "flash",
      "label": "Flash power",
      "default": 1.2,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.85,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim light",
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
      "label": "Deep",
      "default": "#2a0f4e"
    },
    {
      "key": "low",
      "label": "Low pressure",
      "default": "#0fd0c3"
    },
    {
      "key": "mid",
      "label": "Mid pressure",
      "default": "#ff5e9d"
    },
    {
      "key": "hot",
      "label": "High pressure",
      "default": "#ffd166"
    },
    {
      "key": "flash",
      "label": "Lightning",
      "default": "#eaf4ff"
    }
  ],
  "statePresets": {
    "idle": {
      "churn": 1.4,
      "contrast": 1.35,
      "flash": 0.7,
      "gain": 1.15,
      "shear": 1.1,
      "speed": 0.9,
      "warp": 2.2
    },
    "speaking": {
      "churn": 1.6,
      "contrast": 1.2,
      "flash": 2.6,
      "gain": 1.45,
      "shear": 2.2,
      "speed": 1.6,
      "warp": 2.6
    },
    "thinking": {
      "churn": 2.1,
      "contrast": 1.5,
      "flash": 0.6,
      "gain": 1.05,
      "shear": 0.6,
      "speed": 2.2,
      "warp": 3.4
    }
  },
  "stateColors": {
    "idle": {
      "deep": "#2a0f4e",
      "flash": "#eaf4ff",
      "hot": "#ffd166",
      "low": "#0fd0c3",
      "mid": "#ff5e9d"
    },
    "speaking": {
      "deep": "#3a0f1e",
      "flash": "#fff3e0",
      "hot": "#ffd23f",
      "low": "#ff6a3d",
      "mid": "#ff2e88"
    },
    "thinking": {
      "deep": "#0d1440",
      "flash": "#d5e5ff",
      "hot": "#4ce0ff",
      "low": "#4c4cf0",
      "mid": "#9d4ce0"
    }
  },
  "wgsl": "struct orb17Params {\n  anim: f32,\n  c_deep: vec3f,\n  c_flash: vec3f,\n  c_hot: vec3f,\n  c_low: vec3f,\n  c_mid: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_bands: f32,\n  p_churn: f32,\n  p_contrast: f32,\n  p_filmGrain: f32,\n  p_flash: f32,\n  p_flashRate: f32,\n  p_gain: f32,\n  p_grain: f32,\n  p_grainSize: f32,\n  p_light: f32,\n  p_radius: f32,\n  p_rainbow: f32,\n  p_rim: f32,\n  p_scale: f32,\n  p_shear: f32,\n  p_speed: f32,\n  p_spin: f32,\n  p_warp: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb17Params;\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn noise(p: vec2f) -> f32 {\n  let i = floor(p);\n  let f = fract(p);\n  let ff = ((f * f) * (vec2f(3) - (f * 2f)));\n  return mix(mix(hash(i), hash((i + vec2f(1, 0))), ff.x), mix(hash((i + vec2f(0, 1))), hash((i + vec2f(1))), ff.x), ff.y);\n}\n\nfn fbm(pIn: vec2f) -> f32 {\n  var p = pIn;\n  var v = 0f;\n  var a = 0.5f;\n  for (var i = 0u; i < 5u; i += 1u) {\n    v += (a * noise(p));\n    p = ((p * 2.03f) + vec2f(11.699999809265137, 7.300000190734863));\n    a *= 0.5f;\n  }\n  return v;\n}\n\nfn grainNoise(gpix: vec2f, frame: f32, seed: f32) -> f32 {\n  return hash((gpix + vec2f(((frame * 13.71f) + seed), ((frame * 7.37f) - seed))));\n}\n\nstruct orb17Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb17Fragment(_arg_0: orb17Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let warpNow = ((*u).p_warp * (1f + (0.55f * (*u).inputVol)));\n  let gainNow = ((*u).p_gain * (0.85f + (0.45f * (*u).outputVol)));\n  let rd = length(uv);\n  let R = (*u).p_radius;\n  let mask = smoothstep(0.012f, -0.012f, (rd - R));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let pl = (uv / R);\n  let r2 = dot(pl, pl);\n  let z = sqrt(max((1f - r2), 0f));\n  let n = vec3f(pl, z);\n  let cr = cos((*u).p_spin);\n  let sr = sin((*u).p_spin);\n  let sp = vec3f(((n.x * cr) - (n.z * sr)), n.y, ((n.x * sr) + (n.z * cr)));\n  let t = (*u).p_speed;\n  var st = ((sp.xy / (1.3f + sp.z)) * (*u).p_scale);\n  st = vec2f((st.x - (t * 0.3f)), st.y);\n  st = vec2f((st.x + ((*u).p_shear * sin(((sp.y * (*u).p_bands) - (t * 0.45f))))), st.y);\n  let q = vec2f(fbm((st + vec2f(0f, (t * 0.35f)))), fbm(((st + vec2f(5.199999809265137, 1.2999999523162842)) - vec2f((t * 0.28f), 0f))));\n  let w = vec2f(fbm((((st + (q * warpNow)) + vec2f(1.7000000476837158, 9.199999809265137)) + vec2f((t * 0.12f), 0f))), fbm((((st + (q * warpNow)) + vec2f(8.300000190734863, 2.799999952316284)) - vec2f(0f, (t * 0.1f)))));\n  var f = fbm((st + (w * (*u).p_churn)));\n  let gpix = floor((fragCoord / max((*u).p_grainSize, 1f)));\n  let frame = floor(((*u).time * 48f));\n  let g1 = grainNoise(gpix, frame, 3.1f);\n  f += ((g1 - 0.5f) * (*u).p_grain);\n  f = pow(clamp((f * gainNow), 0f, 1f), (*u).p_contrast);\n  var col = mix((*u).c_deep, (*u).c_low, smoothstep(0.05f, 0.35f, f));\n  col = mix(col, (*u).c_mid, smoothstep(0.35f, 0.62f, f));\n  col = mix(col, (*u).c_hot, smoothstep(0.62f, 0.88f, f));\n  let shimmer = (vec3f(0.5) + (cos(((vec3f(0, 0.33000001311302185, 0.6700000166893005) + (((f * 0.9f) + (q.x * 1.1f)) + (t * 0.06f))) * 6.283185307179586f)) * 0.5f));\n  col = mix(col, (col * ((shimmer * 1.9f) + 0.35f)), (*u).p_rainbow);\n  let ft = (t * (*u).p_flashRate);\n  let gate = step((1f - (0.1f + (0.5f * (*u).outputVol))), hash(vec2f(floor(ft), 7.7f)));\n  let flashEnv = (gate * exp((-(fract(ft)) * 6f)));\n  let high = smoothstep(0.55f, 0.95f, f);\n  col = (col + (((*u).c_flash * (flashEnv * (*u).p_flash)) * (0.06f + ((0.94f * high) * high))));\n  let lambert = clamp(dot(n, vec3f(-0.4511292278766632, 0.5513802170753479, 0.7017565965652466)), 0f, 1f);\n  col = (col * (0.35f + ((*u).p_light * lambert)));\n  let fres = pow((1f - z), 2.5f);\n  col = (col + ((*u).c_flash * (((*u).p_rim * fres) * (0.4f + (0.35f * flashEnv)))));\n  let g2 = grainNoise(gpix, frame, 27.9f);\n  col = (col * (1f + ((g2 - 0.5f) * (*u).p_filmGrain)));\n  let alpha = mask;\n  return vec4f((max(col, vec3f()) * alpha), alpha);\n}"
};
