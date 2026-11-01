import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb01: OrbDefinition = {
  "slug": "orb-01",
  "title": "ORB-01",
  "note": "cut-glass orb with a dispersive, turbulent interior",
  "entryPoint": "orb01Fragment",
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
    "p_disperse": {
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
    "p_saturation": {
      "offset": 20,
      "size": 1
    },
    "p_scatter": {
      "offset": 21,
      "size": 1
    },
    "p_sheets": {
      "offset": 22,
      "size": 1
    },
    "p_speed": {
      "offset": 23,
      "size": 1
    },
    "p_spin": {
      "offset": 24,
      "size": 1
    },
    "p_stepClamp": {
      "offset": 25,
      "size": 1
    },
    "p_stria": {
      "offset": 26,
      "size": 1
    },
    "p_tilt": {
      "offset": 27,
      "size": 1
    },
    "p_turb": {
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
      "key": "speed",
      "label": "Anim speed",
      "default": 0.5,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "spin",
      "label": "Spin rate",
      "default": 0.25,
      "min": 0,
      "max": 5,
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
      "default": 2.25,
      "min": 0.15,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "tilt",
      "label": "Field tilt",
      "default": 0.5,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "turb",
      "label": "Turbulence",
      "default": 0.3,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "sheets",
      "label": "Sheet density",
      "default": 7,
      "min": 1,
      "max": 60,
      "step": 0.5,
      "integrate": false
    },
    {
      "key": "disperse",
      "label": "Dispersion",
      "default": 1,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "stria",
      "label": "Striation depth",
      "default": 1,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "envRadius",
      "label": "Envelope radius",
      "default": 2.6,
      "min": 0.15,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "envCore",
      "label": "Envelope core",
      "default": 1,
      "min": 0.3,
      "max": 1.02,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "fill",
      "label": "Body fill",
      "default": 1.5,
      "min": 0,
      "max": 100,
      "step": 0.3,
      "integrate": false
    },
    {
      "key": "stepClamp",
      "label": "Step clamp",
      "default": 20,
      "min": 0.3,
      "max": 300,
      "step": 1.5,
      "integrate": false
    },
    {
      "key": "scatter",
      "label": "Diffusion",
      "default": 0.02,
      "min": 0,
      "max": 0.5,
      "step": 0.003,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 60,
      "min": 1.5,
      "max": 1500,
      "step": 10,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1,
      "min": 0.15,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "saturation",
      "label": "Saturation",
      "default": 1,
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
      "disperse": 1,
      "exposure": 60,
      "scatter": 0.02,
      "sheets": 7,
      "speed": 0.5,
      "spin": 0.25,
      "turb": 0.3
    },
    "speaking": {
      "alphaGain": 2.5,
      "disperse": 1.5,
      "exposure": 45,
      "scatter": 0.015,
      "sheets": 5.5,
      "speed": 1.2,
      "spin": 0.7,
      "turb": 0.55
    },
    "thinking": {
      "alphaGain": 2.1,
      "disperse": 1.1,
      "exposure": 57,
      "scatter": 0.019,
      "sheets": 7,
      "speed": 0.6,
      "spin": 0.5,
      "turb": 0.35
    }
  },
  "wgsl": "struct orb01Params {\n  anim: f32,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_camDist: f32,\n  p_contrast: f32,\n  p_disperse: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_envCore: f32,\n  p_envRadius: f32,\n  p_exposure: f32,\n  p_fill: f32,\n  p_focal: f32,\n  p_saturation: f32,\n  p_scatter: f32,\n  p_sheets: f32,\n  p_speed: f32,\n  p_spin: f32,\n  p_stepClamp: f32,\n  p_stria: f32,\n  p_tilt: f32,\n  p_turb: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb01Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn dispersionRender(fragCoord: vec2f, turb: f32) -> vec3f {\n  let u = (&params);\n  let animTime = (*u).p_speed;\n  let spinAng = (*u).p_spin;\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  var acc = vec3f();\n  var T = 1f;\n  var z = max(((*u).p_camDist - ((*u).p_envRadius * 1.3f)), 0f);\n  let zEnd = ((*u).p_camDist + ((*u).p_envRadius * 1.3f));\n  let spinMat = rot2(spinAng);\n  let tiltMat = rot2((*u).p_tilt);\n  for (var i = 0u; i < 60u; i += 1u) {\n    let p = (ro + (rd * z));\n    var q = p;\n    let spun = (spinMat * vec2f(q.x, q.z));\n    q = vec3f(spun.x, q.y, spun.y);\n    let tilted = (tiltMat * vec2f(q.y, q.z));\n    q = vec3f(q.x, tilted);\n    var a = q;\n    for (var i_1 = 0u; i_1 < 5u; i_1 += 1u) {\n      let dj = (f32(i_1) + 3f);\n      let wave = sin((((a * dj) + animTime) + f32(i)));\n      a = (a - ((wave.yzx * turb) / dj));\n    }\n    let wall = abs((length(a) - (*u).p_envRadius));\n    let s = ((a.z + a.y) - animTime);\n    let dist = max((wall + (abs(cos(s)) / (*u).p_sheets)), 1e-4f);\n    var w = ((cos(((vec3f(s, s, s) - (z * (*u).p_stria)) + (vec3f(0, 1, 8) * (*u).p_disperse))) + 1f) / dist);\n    w = min(w, vec3f((*u).p_stepClamp));\n    let env = smoothstep(((*u).p_envRadius * 1.12f), ((*u).p_envRadius * (*u).p_envCore), length(p));\n    w = ((w + (*u).p_fill) * env);\n    acc = (acc + (w * T));\n    T *= exp((-(luma(w)) * (*u).p_scatter));\n    z += dist;\n    if (((T < 4e-3f) || (z > zEnd))) {\n      break;\n    }\n  }\n  return acc;\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb01Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb01Fragment(_arg_0: orb01Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let turb = ((*u).p_turb * (1f + (0.5f * (*u).inputVol)));\n  let exposure = ((*u).p_exposure * (1f - (0.35f * (*u).outputVol)));\n  var col = tanh((dispersionRender(fragCoord, turb) / max(exposure, 1f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var alpha = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep(((*u).p_envRadius * (1f - band)), ((*u).p_envRadius * 1.005f), closest));\n  col = (col * mask);\n  alpha *= mask;\n  let fade = edgeFade((*u).p_edgeFade, length(orbUv));\n  col = (col * fade);\n  alpha *= fade;\n  return vec4f(col, alpha);\n}"
};
