import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb10: OrbDefinition = {
  "slug": "orb-10",
  "title": "ORB-10",
  "note": "a lattice of light knitted into the ball's own skin",
  "entryPoint": "orb10Fragment",
  "uniformSize": 160,
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
    "p_cell": {
      "offset": 11,
      "size": 1
    },
    "p_climb": {
      "offset": 12,
      "size": 1
    },
    "p_contrast": {
      "offset": 13,
      "size": 1
    },
    "p_edge": {
      "offset": 14,
      "size": 1
    },
    "p_edgeFade": {
      "offset": 15,
      "size": 1
    },
    "p_envCore": {
      "offset": 16,
      "size": 1
    },
    "p_envRadius": {
      "offset": 17,
      "size": 1
    },
    "p_exposure": {
      "offset": 18,
      "size": 1
    },
    "p_fill": {
      "offset": 19,
      "size": 1
    },
    "p_focal": {
      "offset": 20,
      "size": 1
    },
    "p_hueStep": {
      "offset": 21,
      "size": 1
    },
    "p_layer": {
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
    "p_scroll": {
      "offset": 25,
      "size": 1
    },
    "p_shellR": {
      "offset": 26,
      "size": 1
    },
    "p_speed": {
      "offset": 27,
      "size": 1
    },
    "p_spread": {
      "offset": 28,
      "size": 1
    },
    "p_stepClamp": {
      "offset": 29,
      "size": 1
    },
    "p_stepScale": {
      "offset": 30,
      "size": 1
    },
    "p_turb": {
      "offset": 31,
      "size": 1
    },
    "p_wrap": {
      "offset": 32,
      "size": 1
    },
    "res": {
      "offset": 34,
      "size": 2
    },
    "time": {
      "offset": 36,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Anim speed",
      "default": 0.6,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "scroll",
      "label": "Climb",
      "default": 1.2,
      "min": 0,
      "max": 8,
      "step": 0.03,
      "integrate": true
    },
    {
      "key": "camDist",
      "label": "Camera distance",
      "default": 7,
      "min": 1,
      "max": 50,
      "step": 0.3,
      "integrate": false
    },
    {
      "key": "focal",
      "label": "Lens",
      "default": 2,
      "min": 0.15,
      "max": 15,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "shellR",
      "label": "Shell radius",
      "default": 2.6,
      "min": 0.2,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "wrap",
      "label": "Wraps around",
      "default": 8,
      "min": 1,
      "max": 14,
      "step": 1,
      "integrate": false
    },
    {
      "key": "climb",
      "label": "Band spacing",
      "default": 4,
      "min": 0.05,
      "max": 12,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "turb",
      "label": "Warp",
      "default": 0.35,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "layer",
      "label": "Layer offset",
      "default": 0.5,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "cell",
      "label": "Lattice weight",
      "default": 0.45,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "stepScale",
      "label": "Step scale",
      "default": 0.15,
      "min": 0.02,
      "max": 3,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "hueStep",
      "label": "Layer hue",
      "default": 0.4,
      "min": 0,
      "max": 3,
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
      "default": 2.9,
      "min": 0.15,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "envCore",
      "label": "Envelope core",
      "default": 0.92,
      "min": 0.3,
      "max": 1.02,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "fill",
      "label": "Body fill",
      "default": 0.1,
      "min": 0,
      "max": 40,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "stepClamp",
      "label": "Step clamp",
      "default": 300,
      "min": 5,
      "max": 5000,
      "step": 5,
      "integrate": false
    },
    {
      "key": "scatter",
      "label": "Diffusion",
      "default": 0.004,
      "min": 0,
      "max": 0.2,
      "step": 0.0005,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 30,
      "min": 0.05,
      "max": 500,
      "step": 0.5,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.15,
      "min": 0.15,
      "max": 15,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "saturation",
      "label": "Saturation",
      "default": 1.2,
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
      "cell": 0.45,
      "exposure": 30,
      "scatter": 0.004,
      "scroll": 1.2,
      "speed": 0.6,
      "turb": 0.35
    },
    "speaking": {
      "alphaGain": 2.8,
      "cell": 0.95,
      "contrast": 0.9,
      "exposure": 11,
      "saturation": 1.45,
      "scatter": 0.0015,
      "scroll": 4.2,
      "speed": 1,
      "turb": 0.18
    },
    "thinking": {
      "alphaGain": 2.6,
      "cell": 0.3,
      "contrast": 1.05,
      "exposure": 13,
      "fill": 0.12,
      "layer": 0.65,
      "saturation": 1.7,
      "scatter": 0.006,
      "scroll": 0.5,
      "speed": 1.9,
      "spread": 1.55,
      "stepScale": 0.09,
      "turb": 0.85
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
      "tint": "#e8f4ff"
    }
  },
  "wgsl": "struct orb10Params {\n  anim: f32,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_camDist: f32,\n  p_cell: f32,\n  p_climb: f32,\n  p_contrast: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_envCore: f32,\n  p_envRadius: f32,\n  p_exposure: f32,\n  p_fill: f32,\n  p_focal: f32,\n  p_hueStep: f32,\n  p_layer: f32,\n  p_saturation: f32,\n  p_scatter: f32,\n  p_scroll: f32,\n  p_shellR: f32,\n  p_speed: f32,\n  p_spread: f32,\n  p_stepClamp: f32,\n  p_stepScale: f32,\n  p_turb: f32,\n  p_wrap: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb10Params;\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn weaveRender(fragCoord: vec2f, weaveTurb: f32, weaveCell: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  let animTime = (*u).p_speed;\n  let scroll = (*u).p_scroll;\n  var acc = vec3f();\n  var T = 1f;\n  var z = max(((*u).p_camDist - ((*u).p_envRadius * 1.3f)), 0f);\n  let zEnd = ((*u).p_camDist + ((*u).p_envRadius * 1.3f));\n  for (var i = 0u; i < 40u; i += 1u) {\n    let fi = (f32(i) + 1f);\n    let world = (ro + (rd * z));\n    let rl = length(world);\n    var p = vec3f((atan2(world.z, world.x) * (*u).p_wrap), ((world.y * (*u).p_climb) + scroll), (rl - (*u).p_shellR));\n    for (var i_1 = 0u; i_1 < 6u; i_1 += 1u) {\n      let dj = (f32(i_1) + 1f);\n      p = (p + ((sin(((p.yzx * dj) + (animTime + ((*u).p_layer * fi)))) * weaveTurb) / dj));\n    }\n    var dist = ((*u).p_stepScale * length(vec4f(((cos(p) * weaveCell) - weaveCell), p.z)));\n    dist = max(dist, ((*u).p_envRadius * 4e-3f));\n    var w = (cos(((vec3f(6, 1, 2) * (*u).p_spread) + (p.y + (fi * (*u).p_hueStep)))) + 1f);\n    w = (w / dist);\n    w = min(w, vec3f((*u).p_stepClamp));\n    let env = smoothstep(((*u).p_envRadius * 1.12f), ((*u).p_envRadius * (*u).p_envCore), rl);\n    w = ((w + (*u).p_fill) * env);\n    acc = (acc + (w * T));\n    T *= exp((-(luma(w)) * (*u).p_scatter));\n    z += dist;\n    if (((T < 4e-3f) || (z > zEnd))) {\n      break;\n    }\n  }\n  return acc;\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb10Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb10Fragment(_arg_0: orb10Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let weaveTurb = ((*u).p_turb * (1f + (0.4f * (*u).inputVol)));\n  let weaveCell = ((*u).p_cell * (1f + (0.3f * (*u).inputVol)));\n  let weaveExposure = ((*u).p_exposure * (1f - (0.3f * (*u).outputVol)));\n  let acc = weaveRender(fragCoord, weaveTurb, weaveCell);\n  let v = (acc / 40f);\n  var col = tanh(((v * v) / max(weaveExposure, 1e-4f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var alpha = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep(((*u).p_envRadius * (1f - band)), ((*u).p_envRadius * 1.005f), closest));\n  col = (col * mask);\n  alpha *= mask;\n  let fade = edgeFade((*u).p_edgeFade, length(orbUv));\n  col = (col * fade);\n  alpha *= fade;\n  return vec4f(col, alpha);\n}"
};
