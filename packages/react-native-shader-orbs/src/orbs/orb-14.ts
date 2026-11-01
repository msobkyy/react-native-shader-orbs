import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb14: OrbDefinition = {
  "slug": "orb-14",
  "title": "ORB-14",
  "note": "a lit plasma dome quantized to chunky two-tone pixels",
  "entryPoint": "orb14Fragment",
  "uniformSize": 112,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_ink": {
      "offset": 4,
      "size": 3
    },
    "c_paper": {
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
    "p_gain": {
      "offset": 15,
      "size": 1
    },
    "p_levels": {
      "offset": 16,
      "size": 1
    },
    "p_light": {
      "offset": 17,
      "size": 1
    },
    "p_plasma": {
      "offset": 18,
      "size": 1
    },
    "p_radius": {
      "offset": 19,
      "size": 1
    },
    "p_rim": {
      "offset": 20,
      "size": 1
    },
    "p_scale": {
      "offset": 21,
      "size": 1
    },
    "p_speed": {
      "offset": 22,
      "size": 1
    },
    "p_spin": {
      "offset": 23,
      "size": 1
    },
    "res": {
      "offset": 24,
      "size": 2
    },
    "time": {
      "offset": 26,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Wave speed",
      "default": 0.5,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "spin",
      "label": "Roll",
      "default": 0.15,
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
      "label": "Grid cells",
      "default": 140,
      "min": 32,
      "max": 320,
      "step": 2,
      "integrate": false
    },
    {
      "key": "levels",
      "label": "Tone steps",
      "default": 3,
      "min": 2,
      "max": 8,
      "step": 1,
      "integrate": false
    },
    {
      "key": "scale",
      "label": "Wave scale",
      "default": 1.5,
      "min": 0.3,
      "max": 12,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "plasma",
      "label": "Wave amount",
      "default": 0.9,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 0.9,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim light",
      "default": 0.35,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Brightness",
      "default": 1,
      "min": 0.05,
      "max": 5,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.1,
      "min": 0.15,
      "max": 10,
      "step": 0.05,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "ink",
      "label": "Ink",
      "default": "#101426"
    },
    {
      "key": "paper",
      "label": "Paper",
      "default": "#cfe6ff"
    }
  ],
  "statePresets": {
    "idle": {
      "contrast": 1.1,
      "gain": 1,
      "plasma": 0.9,
      "speed": 0.5,
      "spin": 0.15
    },
    "speaking": {
      "contrast": 1.05,
      "gain": 1.3,
      "plasma": 1,
      "speed": 1.3,
      "spin": 0.8
    },
    "thinking": {
      "contrast": 1.15,
      "gain": 0.95,
      "plasma": 1.15,
      "speed": 1.6,
      "spin": 0.05
    }
  },
  "stateColors": {
    "idle": {
      "ink": "#101426",
      "paper": "#cfe6ff"
    },
    "speaking": {
      "ink": "#2a1410",
      "paper": "#ffd9a4"
    },
    "thinking": {
      "ink": "#140f38",
      "paper": "#a9b9ff"
    }
  },
  "wgsl": "struct orb14Params {\n  anim: f32,\n  c_ink: vec3f,\n  c_paper: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_cells: f32,\n  p_contrast: f32,\n  p_gain: f32,\n  p_levels: f32,\n  p_light: f32,\n  p_plasma: f32,\n  p_radius: f32,\n  p_rim: f32,\n  p_scale: f32,\n  p_speed: f32,\n  p_spin: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb14Params;\n\nfn bayer2(a: vec2f) -> f32 {\n  let f = floor(a);\n  return fract(((f.x / 2f) + ((f.y * f.y) * 0.75f)));\n}\n\nfn bayer8(a: vec2f) -> f32 {\n  return (((bayer2((a * 0.25f)) * 0.0625f) + (bayer2((a * 0.5f)) * 0.25f)) + bayer2(a));\n}\n\nstruct orb14Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb14Fragment(_arg_0: orb14Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let plasmaAmt = ((*u).p_plasma * (1f + (0.4f * (*u).inputVol)));\n  let gainNow = ((*u).p_gain * (0.85f + (0.5f * (*u).outputVol)));\n  let cellPx = max((min((*u).res.x, (*u).res.y) / max((*u).p_cells, 8f)), 1f);\n  let pix = floor((fragCoord / cellPx));\n  let cellCentre = ((pix + 0.5f) * cellPx);\n  let suv = (((cellCentre * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let puv = (suv / (*u).p_radius);\n  let r2 = dot(puv, puv);\n  let mask = (1f - step(1f, r2));\n  let z = sqrt(max((1f - r2), 0f));\n  let n = vec3f(puv, z);\n  let rot = (*u).p_spin;\n  let cr = cos(rot);\n  let sr = sin(rot);\n  let sp = vec3f(((n.x * cr) - (n.z * sr)), n.y, ((n.x * sr) + (n.z * cr)));\n  let t = (*u).p_speed;\n  let f = (*u).p_scale;\n  var v = ((sin((((sp.x * f) * 3.1f) + t)) + sin((((((sp.y * 0.85f) + (sp.z * 0.4f)) * f) * 3.6f) - (t * 1.3f)))) + sin((((((sp.x + sp.y) + sp.z) * f) * 2.2f) + (t * 0.7f))));\n  let src = (vec2f(cos((t * 0.5f)), sin((t * 0.5f))) * 0.55f);\n  v += sin((((length((puv - src)) * f) * 5f) - (t * 2.2f)));\n  v *= 0.25f;\n  let lambert = clamp(dot(n, vec3f(-0.4511292278766632, 0.5513802170753479, 0.7017565965652466)), 0f, 1f);\n  let fres = pow((1f - z), 2f);\n  var lum = (((0.5f + ((0.5f * v) * plasmaAmt)) * (0.3f + ((*u).p_light * lambert))) + ((*u).p_rim * fres));\n  lum = pow(clamp((lum * gainNow), 0f, 1f), (*u).p_contrast);\n  let steps = max(((*u).p_levels - 1f), 1f);\n  let q = clamp((floor(((lum * steps) + bayer8(pix))) / steps), 0f, 1f);\n  let col = mix((*u).c_ink, (*u).c_paper, q);\n  let alpha = mask;\n  return vec4f((col * alpha), alpha);\n}"
};
