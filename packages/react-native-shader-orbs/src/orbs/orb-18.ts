import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb18: OrbDefinition = {
  "slug": "orb-18",
  "title": "ORB-18",
  "note": "a crystal folded out of one eighth of space, tumbling",
  "entryPoint": "orb18Fragment",
  "uniformSize": 144,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_tint": {
      "offset": 4,
      "size": 3
    },
    "inputVol": {
      "offset": 7,
      "size": 1
    },
    "outputVol": {
      "offset": 8,
      "size": 1
    },
    "p_alphaGain": {
      "offset": 9,
      "size": 1
    },
    "p_camDist": {
      "offset": 10,
      "size": 1
    },
    "p_contrast": {
      "offset": 11,
      "size": 1
    },
    "p_crease": {
      "offset": 12,
      "size": 1
    },
    "p_edge": {
      "offset": 13,
      "size": 1
    },
    "p_edgeFade": {
      "offset": 14,
      "size": 1
    },
    "p_envCore": {
      "offset": 15,
      "size": 1
    },
    "p_envRadius": {
      "offset": 16,
      "size": 1
    },
    "p_exposure": {
      "offset": 17,
      "size": 1
    },
    "p_fill": {
      "offset": 18,
      "size": 1
    },
    "p_focal": {
      "offset": 19,
      "size": 1
    },
    "p_fold": {
      "offset": 20,
      "size": 1
    },
    "p_freq": {
      "offset": 21,
      "size": 1
    },
    "p_hue": {
      "offset": 22,
      "size": 1
    },
    "p_saturation": {
      "offset": 23,
      "size": 1
    },
    "p_scatter": {
      "offset": 24,
      "size": 1
    },
    "p_spread": {
      "offset": 25,
      "size": 1
    },
    "p_stepClamp": {
      "offset": 26,
      "size": 1
    },
    "p_stepScale": {
      "offset": 27,
      "size": 1
    },
    "p_wander": {
      "offset": 28,
      "size": 1
    },
    "res": {
      "offset": 30,
      "size": 2
    },
    "time": {
      "offset": 32,
      "size": 1
    }
  },
  "params": [
    {
      "key": "wander",
      "label": "Tumble",
      "default": 0.5,
      "min": 0,
      "max": 5,
      "step": 0.02,
      "integrate": true
    },
    {
      "key": "camDist",
      "label": "Camera distance",
      "default": 4,
      "min": 1,
      "max": 50,
      "step": 0.3,
      "integrate": false
    },
    {
      "key": "focal",
      "label": "Lens",
      "default": 1.5,
      "min": 0.15,
      "max": 15,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "fold",
      "label": "Octant fold",
      "default": 1,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "crease",
      "label": "Diagonal crease",
      "default": 1,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "freq",
      "label": "Crystal frequency",
      "default": 5,
      "min": 0.1,
      "max": 20,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "stepScale",
      "label": "Step scale",
      "default": 0.3,
      "min": 0.02,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "hue",
      "label": "Depth hue",
      "default": 1.5,
      "min": 0,
      "max": 4,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "spread",
      "label": "Colour spread",
      "default": 1,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "envRadius",
      "label": "Envelope radius",
      "default": 2.1,
      "min": 0.15,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "envCore",
      "label": "Envelope core",
      "default": 0.9,
      "min": 0.3,
      "max": 1.02,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "fill",
      "label": "Body fill",
      "default": 0.02,
      "min": 0,
      "max": 20,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "stepClamp",
      "label": "Step clamp",
      "default": 40,
      "min": 1,
      "max": 2000,
      "step": 1,
      "integrate": false
    },
    {
      "key": "scatter",
      "label": "Diffusion",
      "default": 0.004,
      "min": 0,
      "max": 0.2,
      "step": 0.001,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 18,
      "min": 0.2,
      "max": 500,
      "step": 0.5,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.2,
      "min": 0.15,
      "max": 15,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "saturation",
      "label": "Saturation",
      "default": 1.25,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "alphaGain",
      "label": "Alpha gain",
      "default": 2,
      "min": 0.05,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "edge",
      "label": "Edge sharpness",
      "default": 1,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "edgeFade",
      "label": "Halo falloff",
      "default": 0.98,
      "min": 0.1,
      "max": 0.985,
      "step": 0.015,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "tint",
      "label": "Tint",
      "default": "#ffffff"
    }
  ],
  "statePresets": {
    "idle": {
      "alphaGain": 2,
      "crease": 1,
      "exposure": 18,
      "fold": 1,
      "freq": 5,
      "scatter": 0.004,
      "wander": 0.5
    },
    "speaking": {
      "alphaGain": 2.7,
      "crease": 1,
      "envCore": 0.49,
      "exposure": 8,
      "fold": 1,
      "freq": 6.05,
      "hue": 2,
      "saturation": 2,
      "scatter": 0.002,
      "stepScale": 0.51,
      "wander": 0.7
    },
    "thinking": {
      "alphaGain": 2,
      "crease": 1,
      "exposure": 26,
      "focal": 2.7,
      "fold": 0.91,
      "freq": 4.1,
      "scatter": 0.02,
      "stepClamp": 1200,
      "wander": 1.08
    }
  },
  "stateColors": {
    "idle": {
      "tint": "#ffffff"
    },
    "speaking": {
      "tint": "#ffc492"
    },
    "thinking": {
      "tint": "#9db8ff"
    }
  },
  "wgsl": "struct orb18Params {\n  anim: f32,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_camDist: f32,\n  p_contrast: f32,\n  p_crease: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_envCore: f32,\n  p_envRadius: f32,\n  p_exposure: f32,\n  p_fill: f32,\n  p_focal: f32,\n  p_fold: f32,\n  p_freq: f32,\n  p_hue: f32,\n  p_saturation: f32,\n  p_scatter: f32,\n  p_spread: f32,\n  p_stepClamp: f32,\n  p_stepScale: f32,\n  p_wander: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb18Params;\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn octantRender(fragCoord: vec2f, octantFold: f32, octantFreq: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  let wander = (*u).p_wander;\n  let axis = normalize(cos((vec3f(0, 2, 4) + wander)));\n  var acc = vec3f();\n  var T = 1f;\n  var z = max(((*u).p_camDist - ((*u).p_envRadius * 1.3f)), 0f);\n  let zEnd = ((*u).p_camDist + ((*u).p_envRadius * 1.3f));\n  for (var i = 0u; i < 50u; i += 1u) {\n    let p = (ro + (rd * z));\n    var a = ((axis * dot(axis, p)) - cross(axis, p));\n    a = mix(a, abs(a), octantFold);\n    a = mix(a, max(a, a.yzx), (*u).p_crease);\n    var dist = ((*u).p_stepScale * length(cos((a * octantFreq))));\n    dist = max(dist, ((*u).p_envRadius * 4e-3f));\n    let zRel = (z - ((*u).p_camDist - (*u).p_envRadius));\n    var w = (cos(((vec3f(0, 2, 3) * (*u).p_spread) + ((*u).p_hue * zRel))) + 1f);\n    w = (w / (dist * max(z, 0.05f)));\n    w = min(w, vec3f((*u).p_stepClamp));\n    let env = smoothstep(((*u).p_envRadius * 1.12f), ((*u).p_envRadius * (*u).p_envCore), length(p));\n    w = ((w + (*u).p_fill) * env);\n    acc = (acc + (w * T));\n    T *= exp((-(luma(w)) * (*u).p_scatter));\n    z += dist;\n    if (((T < 4e-3f) || (z > zEnd))) {\n      break;\n    }\n  }\n  return acc;\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb18Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb18Fragment(_arg_0: orb18Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let octantFold = clamp(((*u).p_fold * (1f + (0.3f * (*u).inputVol))), 0f, 1f);\n  let octantFreq = ((*u).p_freq * (1f + (0.25f * (*u).inputVol)));\n  let octantExposure = ((*u).p_exposure * (1f - (0.35f * (*u).outputVol)));\n  let acc = octantRender(fragCoord, octantFold, octantFreq);\n  var col = tanh((acc / max(octantExposure, 0.01f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var alpha = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep(((*u).p_envRadius * (1f - band)), ((*u).p_envRadius * 1.005f), closest));\n  col = (col * mask);\n  alpha *= mask;\n  let fade = edgeFade((*u).p_edgeFade, length(orbUv));\n  col = (col * fade);\n  alpha *= fade;\n  return vec4f(col, alpha);\n}"
};
