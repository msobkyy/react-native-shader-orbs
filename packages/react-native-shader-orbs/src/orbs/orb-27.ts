import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb27: OrbDefinition = {
  "slug": "orb-27",
  "title": "ORB-27",
  "note": "a weather-radar mosaic, fronts of coloured pixels sweeping the ball",
  "entryPoint": "orb27Fragment",
  "uniformSize": 256,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_c0": {
      "offset": 4,
      "size": 3
    },
    "c_c1": {
      "offset": 8,
      "size": 3
    },
    "c_c2": {
      "offset": 12,
      "size": 3
    },
    "c_c3": {
      "offset": 16,
      "size": 3
    },
    "c_c4": {
      "offset": 20,
      "size": 3
    },
    "c_c5": {
      "offset": 24,
      "size": 3
    },
    "c_c6": {
      "offset": 28,
      "size": 3
    },
    "c_paper": {
      "offset": 32,
      "size": 3
    },
    "inputVol": {
      "offset": 35,
      "size": 1
    },
    "outputVol": {
      "offset": 36,
      "size": 1
    },
    "p_cells": {
      "offset": 37,
      "size": 1
    },
    "p_curve": {
      "offset": 38,
      "size": 1
    },
    "p_density": {
      "offset": 39,
      "size": 1
    },
    "p_dither": {
      "offset": 40,
      "size": 1
    },
    "p_dot": {
      "offset": 41,
      "size": 1
    },
    "p_freq": {
      "offset": 42,
      "size": 1
    },
    "p_grain": {
      "offset": 43,
      "size": 1
    },
    "p_hi": {
      "offset": 44,
      "size": 1
    },
    "p_light": {
      "offset": 45,
      "size": 1
    },
    "p_lo": {
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
    "p_sparse": {
      "offset": 50,
      "size": 1
    },
    "p_speed": {
      "offset": 51,
      "size": 1
    },
    "p_spin": {
      "offset": 52,
      "size": 1
    },
    "p_swirl": {
      "offset": 53,
      "size": 1
    },
    "p_twinkle": {
      "offset": 54,
      "size": 1
    },
    "p_vortex": {
      "offset": 55,
      "size": 1
    },
    "p_warp": {
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
      "key": "speed",
      "label": "Front speed",
      "default": 0.6,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "spin",
      "label": "Roll",
      "default": 0.04,
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
      "label": "Grid zoom",
      "default": 2.4,
      "min": 0.3,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "cells",
      "label": "Grid",
      "default": 34,
      "min": 8,
      "max": 120,
      "step": 1,
      "integrate": false
    },
    {
      "key": "dot",
      "label": "Dot size",
      "default": 0.36,
      "min": 0.1,
      "max": 0.5,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "swirl",
      "label": "Swirl",
      "default": 1.5,
      "min": 0,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "vortex",
      "label": "Vortex size",
      "default": 0.45,
      "min": 0.1,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "freq",
      "label": "Storm scale",
      "default": 1.6,
      "min": 0.2,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "warp",
      "label": "Bend",
      "default": 0.5,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "lo",
      "label": "Quiet threshold",
      "default": 0.12,
      "min": 0,
      "max": 1,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "hi",
      "label": "Peak threshold",
      "default": 0.82,
      "min": 0,
      "max": 1,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "curve",
      "label": "Response curve",
      "default": 1.4,
      "min": 0.5,
      "max": 4,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "dither",
      "label": "Class dither",
      "default": 0.12,
      "min": 0,
      "max": 0.6,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "sparse",
      "label": "Quiet density",
      "default": 0.16,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "density",
      "label": "Fill",
      "default": 1,
      "min": 0,
      "max": 1.5,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "twinkle",
      "label": "Twinkle rate",
      "default": 3,
      "min": 0,
      "max": 30,
      "step": 0.5,
      "integrate": false
    },
    {
      "key": "grain",
      "label": "Paper grain",
      "default": 0.1,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.18,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim",
      "default": 0.35,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "paper",
      "label": "Paper",
      "default": "#efe9dc"
    },
    {
      "key": "c0",
      "label": "Quiet",
      "default": "#a9a9a6"
    },
    {
      "key": "c1",
      "label": "Class 1",
      "default": "#2e5df0"
    },
    {
      "key": "c2",
      "label": "Class 2",
      "default": "#38d9ec"
    },
    {
      "key": "c3",
      "label": "Class 3",
      "default": "#22c35c"
    },
    {
      "key": "c4",
      "label": "Class 4",
      "default": "#e8322a"
    },
    {
      "key": "c5",
      "label": "Class 5",
      "default": "#f5d020"
    },
    {
      "key": "c6",
      "label": "Peak",
      "default": "#e030c0"
    }
  ],
  "statePresets": {
    "idle": {
      "curve": 1.4,
      "density": 1,
      "dither": 0.12,
      "hi": 0.82,
      "lo": 0.12,
      "sparse": 0.16,
      "speed": 1,
      "spin": 0.27,
      "swirl": 1.5,
      "twinkle": 3,
      "warp": 0.5
    },
    "speaking": {
      "curve": 1.3,
      "density": 1.15,
      "dither": 0.1,
      "grain": 0.35,
      "hi": 0.8,
      "lo": 0,
      "sparse": 0.22,
      "speed": 6.5,
      "spin": 0.51,
      "swirl": 2,
      "twinkle": 5,
      "warp": 0.45
    },
    "thinking": {
      "curve": 1.7,
      "density": 0.9,
      "dither": 0.18,
      "freq": 5.2,
      "hi": 0.545,
      "lo": 0,
      "sparse": 0.22,
      "speed": 2.4,
      "spin": 0.51,
      "swirl": 4,
      "twinkle": 12,
      "warp": 1.06
    }
  },
  "stateColors": {
    "idle": {
      "paper": "#efe9dc"
    },
    "speaking": {
      "paper": "#f5e6d0"
    },
    "thinking": {
      "paper": "#e6e9ee"
    }
  },
  "wgsl": "struct orb27Params {\n  anim: f32,\n  c_c0: vec3f,\n  c_c1: vec3f,\n  c_c2: vec3f,\n  c_c3: vec3f,\n  c_c4: vec3f,\n  c_c5: vec3f,\n  c_c6: vec3f,\n  c_paper: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_cells: f32,\n  p_curve: f32,\n  p_density: f32,\n  p_dither: f32,\n  p_dot: f32,\n  p_freq: f32,\n  p_grain: f32,\n  p_hi: f32,\n  p_light: f32,\n  p_lo: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_scale: f32,\n  p_sparse: f32,\n  p_speed: f32,\n  p_spin: f32,\n  p_swirl: f32,\n  p_twinkle: f32,\n  p_vortex: f32,\n  p_warp: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb27Params;\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn rotateAbout(v: vec3f, k: vec3f, a: f32) -> vec3f {\n  let c = cos(a);\n  let s = sin(a);\n  return (((v * c) + (cross(k, v) * s)) + (k * (dot(k, v) * (1f - c))));\n}\n\nfn hash3(p: vec3f) -> f32 {\n  return fract((sin(dot(p, vec3f(127.0999984741211, 311.70001220703125, 74.69999694824219))) * 43758.5453123f));\n}\n\nfn noise3(p: vec3f) -> f32 {\n  let i = floor(p);\n  var f = fract(p);\n  f = ((f * f) * (vec3f(3) - (f * 2f)));\n  let n000 = hash3(i);\n  let n100 = hash3((i + vec3f(1, 0, 0)));\n  let n010 = hash3((i + vec3f(0, 1, 0)));\n  let n110 = hash3((i + vec3f(1, 1, 0)));\n  let n001 = hash3((i + vec3f(0, 0, 1)));\n  let n101 = hash3((i + vec3f(1, 0, 1)));\n  let n011 = hash3((i + vec3f(0, 1, 1)));\n  let n111 = hash3((i + vec3f(1)));\n  return mix(mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y), mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);\n}\n\nfn fbm3(p: vec3f) -> f32 {\n  var q = p;\n  var v = 0f;\n  var a = 0.5f;\n  for (var i = 0u; i < 4u; i += 1u) {\n    v += (a * noise3(q));\n    q = ((q * 2.03f) + vec3f(11.699999809265137, 7.300000190734863, 3.0999999046325684));\n    a *= 0.5f;\n  }\n  return v;\n}\n\nfn intensity(sp: vec3f, t: f32, radarLoNow: f32) -> f32 {\n  let u = (&params);\n  var q = sp;\n  for (var i = 0u; i < 6u; i += 1u) {\n    let fk = f32(i);\n    var c = normalize(vec3f((hash(vec2f((fk * 3.7f), 1.1f)) - 0.5f), (hash(vec2f((fk * 5.9f), 2.3f)) - 0.5f), (hash(vec2f((fk * 7.1f), 4.9f)) - 0.5f)));\n    c = rotateAbout(c, vec3f(0, 1, 0), (sin(((t * 0.09f) + (fk * 1.7f))) * 0.25f));\n    let ang = acos(clamp(dot(q, c), -1f, 1f));\n    let fall = exp(((-(ang) * ang) / ((*u).p_vortex * (*u).p_vortex)));\n    let a = (((*u).p_swirl * fall) * f32(select(-1i, 1i, ((fk % 2f) < 0.5f))));\n    q = rotateAbout(q, c, a);\n  }\n  let w = (vec3f(noise3(((q * 1.3f) + 2.1f)), noise3(((q * 1.3f) + 7.3f)), noise3(((q * 1.3f) + 4.4f))) - 0.5f);\n  q = (q + (w * (*u).p_warp));\n  let pq = ((q * (*u).p_freq) + vec3f((t * 0.22f), (-(t) * 0.13f), (t * 0.07f)));\n  let big = clamp((((fbm3(pq) - 0.5f) * 3f) + 0.5f), 0f, 1f);\n  let fine = clamp((((fbm3(((pq * 2.6f) + 4.7f)) - 0.5f) * 2.4f) + 0.5f), 0f, 1f);\n  var f = (big * (0.55f + (0.45f * fine)));\n  f = clamp(((f - radarLoNow) / max(((*u).p_hi - radarLoNow), 0.01f)), 0f, 1f);\n  return pow(f, (*u).p_curve);\n}\n\nstruct orb27Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb27Fragment(_arg_0: orb27Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let radarLoNow = ((*u).p_lo - (0.08f * (*u).inputVol));\n  let radarDensityNow = ((*u).p_density * (1f + (0.5f * (*u).outputVol)));\n  let rd = length(orbUv);\n  let R = (*u).p_radius;\n  let mask = smoothstep(0.012f, -0.012f, (rd - R));\n  if ((mask <= 0f)) {\n    return vec4f();\n  }\n  let pl = (orbUv / R);\n  let r2 = dot(pl, pl);\n  let z = sqrt(max((1f - r2), 0f));\n  let n = vec3f(pl, z);\n  let t = (*u).p_speed;\n  let st = ((n.xy / (1.3f + n.z)) * (*u).p_scale);\n  let g = (st * (*u).p_cells);\n  let cell = floor(g);\n  let fr = (fract(g) - 0.5f);\n  let v = (((cell + 0.5f) / (*u).p_cells) / (*u).p_scale);\n  let vv = dot(v, v);\n  let A = (vv + 1f);\n  let B = (2.6f * vv);\n  let C = ((1.69f * vv) - 1f);\n  let zc = ((-(B) + sqrt(max(((B * B) - ((4f * A) * C)), 0f))) / (2f * A));\n  let nc = vec3f((v * (1.3f + zc)), zc);\n  let cr = cos((*u).p_spin);\n  let sr = sin((*u).p_spin);\n  let spc = vec3f(((nc.x * cr) - (nc.z * sr)), nc.y, ((nc.x * sr) + (nc.z * cr)));\n  let f = intensity(spc, t, radarLoNow);\n  let h = hash((cell + 11.7f));\n  let fd = clamp((f + ((h - 0.5f) * (*u).p_dither)), 0f, 1f);\n  var cls = 0f;\n  cls += step(0.1f, fd);\n  cls += step(0.26f, fd);\n  cls += step(0.38f, fd);\n  cls += step(0.46f, fd);\n  cls += step(0.78f, fd);\n  cls += step(0.94f, fd);\n  let frame = floor(((*u).time * (*u).p_twinkle));\n  let roll = hash((cell + vec2f((frame * 3.7f), (-(frame) * 1.3f))));\n  let density = (mix((*u).p_sparse, 1f, smoothstep(0f, 0.6f, f)) * radarDensityNow);\n  let keep = step(roll, density);\n  let dsq = max(abs(fr.x), abs(fr.y));\n  let dotMask = (1f - smoothstep(((*u).p_dot - 0.06f), ((*u).p_dot + 0.06f), dsq));\n  var ink = (*u).c_c0;\n  ink = select(ink, (*u).c_c1, ((cls > 0.5f) && (cls < 1.5f)));\n  ink = select(ink, (*u).c_c2, ((cls > 1.5f) && (cls < 2.5f)));\n  ink = select(ink, (*u).c_c3, ((cls > 2.5f) && (cls < 3.5f)));\n  ink = select(ink, (*u).c_c4, ((cls > 3.5f) && (cls < 4.5f)));\n  ink = select(ink, (*u).c_c5, ((cls > 4.5f) && (cls < 5.5f)));\n  ink = select(ink, (*u).c_c6, (cls > 5.5f));\n  var col = mix((*u).c_paper, ink, (dotMask * keep));\n  col = (col * (1f + ((hash((floor((fragCoord / 2f)) + frame)) - 0.5f) * (*u).p_grain)));\n  let lambert = clamp(dot(n, vec3f(-0.4511292278766632, 0.5513802170753479, 0.7017565965652466)), 0f, 1f);\n  col = (col * (1f - ((*u).p_light * (1f - lambert))));\n  let fres = pow((1f - z), 3f);\n  col = mix(col, (*u).c_c0, (fres * (*u).p_rim));\n  let a = mask;\n  return vec4f((max(col, vec3f()) * a), a);\n}"
};
