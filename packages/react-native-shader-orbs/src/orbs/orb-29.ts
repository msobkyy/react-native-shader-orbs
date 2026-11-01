import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb29: OrbDefinition = {
  "slug": "orb-29",
  "title": "ORB-29",
  "note": "an LED tile wall lighting up in flowing blobs, wrapped on the ball",
  "entryPoint": "orb29Fragment",
  "uniformSize": 128,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_lit": {
      "offset": 4,
      "size": 3
    },
    "c_wall": {
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
    "p_churn": {
      "offset": 14,
      "size": 1
    },
    "p_confetti": {
      "offset": 15,
      "size": 1
    },
    "p_contrast": {
      "offset": 16,
      "size": 1
    },
    "p_coverage": {
      "offset": 17,
      "size": 1
    },
    "p_drift": {
      "offset": 18,
      "size": 1
    },
    "p_gain": {
      "offset": 19,
      "size": 1
    },
    "p_light": {
      "offset": 20,
      "size": 1
    },
    "p_pulse": {
      "offset": 21,
      "size": 1
    },
    "p_radius": {
      "offset": 22,
      "size": 1
    },
    "p_scale": {
      "offset": 23,
      "size": 1
    },
    "p_shuffle": {
      "offset": 24,
      "size": 1
    },
    "p_spin": {
      "offset": 25,
      "size": 1
    },
    "p_swirl": {
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
      "default": 0.45,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "churn",
      "label": "Churn",
      "default": 0.5,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "swirl",
      "label": "Fluidity",
      "default": 1.2,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "shuffle",
      "label": "Shuffle",
      "default": 0.6,
      "min": 0,
      "max": 20,
      "step": 0.1,
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
      "default": 0.1,
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
      "label": "Tile grid",
      "default": 48,
      "min": 16,
      "max": 160,
      "step": 2,
      "integrate": false
    },
    {
      "key": "scale",
      "label": "Blob scale",
      "default": 1.3,
      "min": 0.3,
      "max": 10,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "coverage",
      "label": "Coverage",
      "default": 0.52,
      "min": 0,
      "max": 1.2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "confetti",
      "label": "Confetti",
      "default": 0.22,
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
      "key": "gain",
      "label": "Panel gain",
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
      "key": "lit",
      "label": "Lit tile",
      "default": "#fff2dd"
    },
    {
      "key": "wall",
      "label": "Wall",
      "default": "#161616"
    }
  ],
  "statePresets": {
    "idle": {
      "churn": 0.5,
      "coverage": 0.52,
      "drift": 0.45,
      "gain": 1,
      "pulse": 0,
      "shuffle": 0.6,
      "spin": 0.1
    },
    "speaking": {
      "churn": 0.9,
      "coverage": 0.44,
      "drift": 0.5,
      "gain": 1.15,
      "pulse": 0.55,
      "shuffle": 1.2,
      "spin": 0.45
    },
    "thinking": {
      "churn": 1.9,
      "coverage": 0.42,
      "drift": 0.1,
      "gain": 0.95,
      "pulse": 0,
      "shuffle": 5,
      "spin": 0.03
    }
  },
  "wgsl": "struct orb29Params {\n  anim: f32,\n  c_lit: vec3f,\n  c_wall: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_cells: f32,\n  p_churn: f32,\n  p_confetti: f32,\n  p_contrast: f32,\n  p_coverage: f32,\n  p_drift: f32,\n  p_gain: f32,\n  p_light: f32,\n  p_pulse: f32,\n  p_radius: f32,\n  p_scale: f32,\n  p_shuffle: f32,\n  p_spin: f32,\n  p_swirl: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb29Params;\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn noise(p: vec2f) -> f32 {\n  let i = floor(p);\n  let f = fract(p);\n  let ff = ((f * f) * (vec2f(3) - (f * 2f)));\n  return mix(mix(hash(i), hash((i + vec2f(1, 0))), ff.x), mix(hash((i + vec2f(0, 1))), hash((i + vec2f(1))), ff.x), ff.y);\n}\n\nfn fbm(pIn: vec2f) -> f32 {\n  var p = pIn;\n  var v = 0f;\n  var a = 0.5f;\n  for (var i = 0u; i < 5u; i += 1u) {\n    v += (a * noise(p));\n    p = ((p * 2.03f) + vec2f(11.699999809265137, 7.300000190734863));\n    a *= 0.5f;\n  }\n  return v;\n}\n\nstruct orb29Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb29Fragment(_arg_0: orb29Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let coverNow = ((*u).p_coverage + (0.07f * (*u).inputVol));\n  let gainNow = ((*u).p_gain * (0.85f + (0.5f * (*u).outputVol)));\n  let cellPx = max((min((*u).res.x, (*u).res.y) / max((*u).p_cells, 8f)), 4f);\n  let cellIdx = floor((fragCoord / cellPx));\n  let cellCentre = ((cellIdx + 0.5f) * cellPx);\n  let g = fract((fragCoord / cellPx));\n  let suv = (((cellCentre * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let duv = (suv / (*u).p_radius);\n  let r2 = dot(duv, duv);\n  let mask = (1f - step(1f, r2));\n  let z = sqrt(max((1f - r2), 0f));\n  let n = vec3f(duv, z);\n  let rot = (*u).p_spin;\n  let cr = cos(rot);\n  let sr = sin(rot);\n  let sp = vec3f(((n.x * cr) - (n.z * sr)), n.y, ((n.x * sr) + (n.z * cr)));\n  let p2 = ((sp.xy / (abs(sp.z) + 1.2f)) * ((*u).p_scale * 3f));\n  let driftT = (*u).p_drift;\n  let churnT = (*u).p_churn;\n  let shuffleT = (*u).p_shuffle;\n  let f1 = vec2f((driftT * 0.5f), (-(driftT) * 0.35f));\n  let f2 = vec2f((-(churnT) * 0.4f), (churnT * 0.6f));\n  let warp = (vec2f(fbm(((p2 * 0.9f) + f2)), fbm((((p2 * 0.9f) + f2.yx) + 13.7f))) - 0.5f);\n  let field = fbm(((p2 + f1) + (warp * ((*u).p_swirl * 2.4f))));\n  let lambert = clamp(dot(n, vec3f(-0.4511292278766632, 0.5513802170753479, 0.7017565965652466)), 0f, 1f);\n  var lum = smoothstep((1f - coverNow), (1.14f - coverNow), ((field + ((0.25f * (*u).p_light) * lambert)) + (((*u).p_pulse * 0.3f) * sin(((length(duv) * 5f) - (driftT * 3.2f))))));\n  lum *= gainNow;\n  let d2 = abs((g - 0.5f));\n  let md = max(d2.x, d2.y);\n  let face = (1f - smoothstep(0.26f, 0.36f, md));\n  let tile = (1f - smoothstep(0.42f, 0.48f, md));\n  let hot = (1f - smoothstep(0f, 0.34f, length(d2)));\n  let h1 = hash(((cellIdx * 1.618f) + 7.3f));\n  let h2 = hash(((cellIdx * 2.113f) + 41.7f));\n  let cyc = fract((h1 + (shuffleT * 0.06f)));\n  let promoted = step((1f - (*u).p_confetti), cyc);\n  var confetti = (vec3f(0.5) + (cos(((vec3f(h2) + vec3f(0, 0.33000001311302185, 0.6700000166893005)) * 6.2831f)) * 0.5f));\n  confetti = (normalize((confetti + 0.05f)) * 1.2f);\n  let litCol = mix((*u).c_lit, confetti, promoted);\n  let offCol = ((*u).c_wall * tile);\n  let onCol = ((litCol * ((face * 1.05f) + (hot * 0.5f))) * lum);\n  var col = (offCol + onCol);\n  col = pow(max(col, vec3f()), vec3f((*u).p_contrast));\n  let a = mask;\n  return vec4f((col * a), a);\n}"
};
