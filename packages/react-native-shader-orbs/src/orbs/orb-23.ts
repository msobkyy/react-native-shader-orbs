import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb23: OrbDefinition = {
  "slug": "orb-23",
  "title": "ORB-23",
  "note": "an ASCII glyph matrix in CRT green, wrapped on the ball",
  "entryPoint": "orb23Fragment",
  "uniformSize": 128,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_deep": {
      "offset": 4,
      "size": 3
    },
    "c_glow": {
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
    "p_cells": {
      "offset": 13,
      "size": 1
    },
    "p_contrast": {
      "offset": 14,
      "size": 1
    },
    "p_density": {
      "offset": 15,
      "size": 1
    },
    "p_drift": {
      "offset": 16,
      "size": 1
    },
    "p_dropout": {
      "offset": 17,
      "size": 1
    },
    "p_gain": {
      "offset": 18,
      "size": 1
    },
    "p_light": {
      "offset": 19,
      "size": 1
    },
    "p_pulse": {
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
    "p_scale": {
      "offset": 23,
      "size": 1
    },
    "p_scroll": {
      "offset": 24,
      "size": 1
    },
    "p_speed": {
      "offset": 25,
      "size": 1
    },
    "p_spin": {
      "offset": 26,
      "size": 1
    },
    "res": {
      "offset": 28,
      "size": 2
    },
    "time": {
      "offset": 30,
      "size": 1
    }
  },
  "params": [
    {
      "key": "drift",
      "label": "Drift",
      "default": 0.55,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "scroll",
      "label": "Scroll",
      "default": 0.05,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "speed",
      "label": "Pulse rate",
      "default": 0.5,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "pulse",
      "label": "Pulse depth",
      "default": 0,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
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
      "key": "cells",
      "label": "Glyph grid",
      "default": 40,
      "min": 16,
      "max": 120,
      "step": 2,
      "integrate": false
    },
    {
      "key": "scale",
      "label": "Field scale",
      "default": 1.6,
      "min": 0.3,
      "max": 10,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "density",
      "label": "Glyph density",
      "default": 0.48,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "dropout",
      "label": "Dropout",
      "default": 0.48,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.6,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim glow",
      "default": 0.45,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Phosphor gain",
      "default": 1,
      "min": 0.05,
      "max": 5,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1,
      "min": 0.15,
      "max": 10,
      "step": 0.05,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "glow",
      "label": "Glow",
      "default": "#57ffc9"
    },
    {
      "key": "deep",
      "label": "Deep",
      "default": "#0b3b2d"
    }
  ],
  "statePresets": {
    "idle": {
      "cells": 68,
      "density": 0.31,
      "drift": 0.55,
      "dropout": 0.24,
      "gain": 0.9,
      "light": 1.11,
      "pulse": 0,
      "rim": 0.66,
      "scale": 5.1,
      "scroll": 0.05,
      "speed": 0.52,
      "spin": 0.12
    },
    "speaking": {
      "cells": 120,
      "density": 0.56,
      "drift": 0.4,
      "dropout": 0.59,
      "gain": 2.95,
      "light": 0.39,
      "pulse": 1.27,
      "rim": 0.51,
      "scale": 7.2,
      "scroll": 0.1,
      "speed": 2.85,
      "spin": 1.05
    },
    "thinking": {
      "cells": 86,
      "contrast": 1.3,
      "density": 0.33,
      "drift": 3.05,
      "dropout": 0.13,
      "gain": 0.95,
      "light": 0.855,
      "pulse": 0.58,
      "rim": 0.51,
      "scroll": 0.65,
      "speed": 0.45,
      "spin": 0.04
    }
  },
  "stateColors": {
    "idle": {
      "glow": "#6a57ff"
    },
    "speaking": {
      "glow": "#ff5757"
    },
    "thinking": {
      "glow": "#57ffe3"
    }
  },
  "wgsl": "struct orb23Params {\n  anim: f32,\n  c_deep: vec3f,\n  c_glow: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_cells: f32,\n  p_contrast: f32,\n  p_density: f32,\n  p_drift: f32,\n  p_dropout: f32,\n  p_gain: f32,\n  p_light: f32,\n  p_pulse: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_scale: f32,\n  p_scroll: f32,\n  p_speed: f32,\n  p_spin: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb23Params;\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn noise(p: vec2f) -> f32 {\n  let i = floor(p);\n  let f = fract(p);\n  let ff = ((f * f) * (vec2f(3) - (f * 2f)));\n  return mix(mix(hash(i), hash((i + vec2f(1, 0))), ff.x), mix(hash((i + vec2f(0, 1))), hash((i + vec2f(1))), ff.x), ff.y);\n}\n\nfn fbm(pIn: vec2f) -> f32 {\n  var p = pIn;\n  var v = 0f;\n  var a = 0.5f;\n  for (var i = 0u; i < 5u; i += 1u) {\n    v += (a * noise(p));\n    p = ((p * 2.03f) + vec2f(11.699999809265137, 7.300000190734863));\n    a *= 0.5f;\n  }\n  return v;\n}\n\nstruct orb23Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb23Fragment(_arg_0: orb23Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let densBias = ((*u).p_density + (0.2f * (*u).inputVol));\n  let gainNow = ((*u).p_gain * (0.85f + (0.5f * (*u).outputVol)));\n  let cellPx = max((min((*u).res.x, (*u).res.y) / max((*u).p_cells, 8f)), 4f);\n  let cellIdx = floor((fragCoord / cellPx));\n  let cellCentre = ((cellIdx + 0.5f) * cellPx);\n  let g = fract((fragCoord / cellPx));\n  let suv = (((cellCentre * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let nuv = (suv / (*u).p_radius);\n  let r2 = dot(nuv, nuv);\n  let mask = (1f - step(1f, r2));\n  let z = sqrt(max((1f - r2), 0f));\n  let n = vec3f(nuv, z);\n  let rot = (*u).p_spin;\n  let cr = cos(rot);\n  let sr = sin(rot);\n  let sp = vec3f(((n.x * cr) - (n.z * sr)), n.y, ((n.x * sr) + (n.z * cr)));\n  let p2 = ((sp.xy / (abs(sp.z) + 1.2f)) * ((*u).p_scale * 3f));\n  let driftT = (*u).p_drift;\n  let scrollT = (*u).p_scroll;\n  let t = (*u).p_speed;\n  let flow = vec2f((driftT * 0.6f), ((-(driftT) * 0.45f) - scrollT));\n  let field = fbm((p2 + flow));\n  let lambert = clamp(dot(n, vec3f(-0.4511292278766632, 0.5513802170753479, 0.7017565965652466)), 0f, 1f);\n  let dens = clamp((((((field - 0.5f) * 1.8f) + densBias) + ((0.4f * (*u).p_light) * lambert)) + (((*u).p_pulse * 0.35f) * sin(((length(nuv) * 5.5f) - (t * 2.4f))))), 0f, 1f);\n  let rowI = floor((g.y * 4f));\n  let bar = (step(0.22f, fract((g.y * 4f))) * step(fract((g.y * 4f)), 0.9f));\n  let stripe = step(0.18f, fract((g.x * 3f)));\n  let lit = step((rowI + 0.5f), ((dens * 4f) * gainNow));\n  var glyph = ((bar * stripe) * lit);\n  let superCentre = (((floor((cellIdx / 2f)) * 2f) + 1f) * cellPx);\n  let sSuv = (((superCentre * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let sUv2 = (sSuv / (*u).p_radius);\n  let sz = sqrt(max((1f - dot(sUv2, sUv2)), 0f));\n  let ssp = vec3f(((sUv2.x * cr) - (sz * sr)), sUv2.y, ((sUv2.x * sr) + (sz * cr)));\n  let superField = fbm((((ssp.xy / (abs(ssp.z) + 1.2f)) * ((*u).p_scale * 3f)) + flow));\n  let keep = step((*u).p_dropout, (superField + (0.15f * (*u).outputVol)));\n  glyph *= keep;\n  var glyphCol = mix((*u).c_deep, (*u).c_glow, dens);\n  glyphCol = (glyphCol + (vec3f(0.699999988079071, 1, 0.8999999761581421) * (pow(dens, 3f) * 0.35f)));\n  let fres = pow((1f - z), 2.2f);\n  var col = ((((*u).c_deep * 0.22f) + (glyphCol * glyph)) + ((*u).c_glow * (fres * (*u).p_rim)));\n  col = pow(max(col, vec3f()), vec3f((*u).p_contrast));\n  let a = mask;\n  return vec4f((col * a), a);\n}"
};
