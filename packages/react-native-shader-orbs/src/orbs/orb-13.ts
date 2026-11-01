import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb13: OrbDefinition = {
  "slug": "orb-13",
  "title": "ORB-13",
  "note": "plasma globe: crawling lightning filaments",
  "entryPoint": "orb13Fragment",
  "uniformSize": 176,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_arc": {
      "offset": 4,
      "size": 3
    },
    "c_inner": {
      "offset": 8,
      "size": 3
    },
    "c_tint": {
      "offset": 12,
      "size": 3
    },
    "inputVol": {
      "offset": 15,
      "size": 1
    },
    "outputVol": {
      "offset": 16,
      "size": 1
    },
    "p_alphaGain": {
      "offset": 17,
      "size": 1
    },
    "p_camDist": {
      "offset": 18,
      "size": 1
    },
    "p_contrast": {
      "offset": 19,
      "size": 1
    },
    "p_coreGain": {
      "offset": 20,
      "size": 1
    },
    "p_edge": {
      "offset": 21,
      "size": 1
    },
    "p_envRadius": {
      "offset": 22,
      "size": 1
    },
    "p_exposure": {
      "offset": 23,
      "size": 1
    },
    "p_fill": {
      "offset": 24,
      "size": 1
    },
    "p_fils": {
      "offset": 25,
      "size": 1
    },
    "p_focal": {
      "offset": 26,
      "size": 1
    },
    "p_saturation": {
      "offset": 27,
      "size": 1
    },
    "p_scatter": {
      "offset": 28,
      "size": 1
    },
    "p_sharp": {
      "offset": 29,
      "size": 1
    },
    "p_soft": {
      "offset": 30,
      "size": 1
    },
    "p_speed": {
      "offset": 31,
      "size": 1
    },
    "p_spin": {
      "offset": 32,
      "size": 1
    },
    "p_stepClamp": {
      "offset": 33,
      "size": 1
    },
    "p_swell": {
      "offset": 34,
      "size": 1
    },
    "p_tilt": {
      "offset": 35,
      "size": 1
    },
    "p_tipGain": {
      "offset": 36,
      "size": 1
    },
    "p_whiten": {
      "offset": 37,
      "size": 1
    },
    "p_writhe": {
      "offset": 38,
      "size": 1
    },
    "p_writheFreq": {
      "offset": 39,
      "size": 1
    },
    "res": {
      "offset": 40,
      "size": 2
    },
    "time": {
      "offset": 42,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Anim speed",
      "default": 1,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "spin",
      "label": "Spin rate",
      "default": 0.2,
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
      "key": "envRadius",
      "label": "Globe radius",
      "default": 2.6,
      "min": 0.15,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "swell",
      "label": "Input swell",
      "default": 0.15,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "tilt",
      "label": "Axis tilt",
      "default": 0.4,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "fils",
      "label": "Filament density",
      "default": 6,
      "min": 0.5,
      "max": 12,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "writhe",
      "label": "Writhe",
      "default": 0.9,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "writheFreq",
      "label": "Writhe frequency",
      "default": 1.6,
      "min": 0.2,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "sharp",
      "label": "Arc sharpness",
      "default": 4,
      "min": 0.5,
      "max": 60,
      "step": 0.5,
      "integrate": false
    },
    {
      "key": "soft",
      "label": "Arc core softness",
      "default": 0.06,
      "min": 0.002,
      "max": 0.5,
      "step": 0.002,
      "integrate": false
    },
    {
      "key": "whiten",
      "label": "Core whitening",
      "default": 0.008,
      "min": 0,
      "max": 0.2,
      "step": 0.002,
      "integrate": false
    },
    {
      "key": "coreGain",
      "label": "Nucleus glow",
      "default": 1.6,
      "min": 0,
      "max": 5,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "tipGain",
      "label": "Glass flare",
      "default": 1.8,
      "min": 0,
      "max": 6,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "fill",
      "label": "Body haze",
      "default": 0.02,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "stepClamp",
      "label": "Step clamp",
      "default": 40,
      "min": 0.3,
      "max": 300,
      "step": 1.5,
      "integrate": false
    },
    {
      "key": "scatter",
      "label": "Diffusion",
      "default": 0.012,
      "min": 0,
      "max": 0.5,
      "step": 0.003,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 11,
      "min": 0.1,
      "max": 200,
      "step": 0.5,
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
      "default": 1.2,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "alphaGain",
      "label": "Alpha gain",
      "default": 2.5,
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
    }
  ],
  "colors": [
    {
      "key": "inner",
      "label": "Nucleus",
      "default": "#ff70d8"
    },
    {
      "key": "arc",
      "label": "Arc",
      "default": "#5a5cff"
    },
    {
      "key": "tint",
      "label": "Tint",
      "default": "#ffffff"
    }
  ],
  "statePresets": {
    "idle": {
      "coreGain": 1.6,
      "exposure": 11,
      "fils": 6,
      "sharp": 4,
      "soft": 0.06,
      "speed": 1,
      "spin": 0.2,
      "tipGain": 1.8,
      "whiten": 0.008,
      "writhe": 0.9
    },
    "speaking": {
      "coreGain": 2,
      "exposure": 8.5,
      "fils": 8,
      "sharp": 3.5,
      "soft": 0.05,
      "speed": 2.6,
      "spin": 0.3,
      "tipGain": 2.4,
      "whiten": 0.012,
      "writhe": 1.3
    },
    "thinking": {
      "coreGain": 1.2,
      "exposure": 10,
      "fils": 7,
      "sharp": 3,
      "soft": 0.08,
      "speed": 1.8,
      "spin": 0.45,
      "tipGain": 1.5,
      "whiten": 0.012,
      "writhe": 1.2
    }
  },
  "wgsl": "struct orb13Params {\n  anim: f32,\n  c_arc: vec3f,\n  c_inner: vec3f,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_camDist: f32,\n  p_contrast: f32,\n  p_coreGain: f32,\n  p_edge: f32,\n  p_envRadius: f32,\n  p_exposure: f32,\n  p_fill: f32,\n  p_fils: f32,\n  p_focal: f32,\n  p_saturation: f32,\n  p_scatter: f32,\n  p_sharp: f32,\n  p_soft: f32,\n  p_speed: f32,\n  p_spin: f32,\n  p_stepClamp: f32,\n  p_swell: f32,\n  p_tilt: f32,\n  p_tipGain: f32,\n  p_whiten: f32,\n  p_writhe: f32,\n  p_writheFreq: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb13Params;\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn ionRender(fragCoord: vec2f, ionSharp: f32, ionWrithe: f32, ionCore: f32, ionRadius: f32) -> vec3f {\n  let u = (&params);\n  let t = (*u).p_speed;\n  let spinAng = (*u).p_spin;\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  let proj = dot((ro * -1f), rd);\n  let b2 = (dot(ro, ro) - (proj * proj));\n  let halfChord = sqrt(max(((ionRadius * ionRadius) - b2), 0f));\n  var zNear = (proj - halfChord);\n  let stepLen = ((2f * halfChord) / 64f);\n  zNear += ((hash(fragCoord) - 0.5f) * stepLen);\n  var acc = vec3f();\n  var T = 1f;\n  let spinMat = rot2(spinAng);\n  let tiltMat = rot2((*u).p_tilt);\n  for (var i = 0u; i < 64u; i += 1u) {\n    let p = (ro + (rd * (zNear + ((f32(i) + 0.5f) * stepLen))));\n    var pr = p;\n    let prSpun = (spinMat * vec2f(pr.x, pr.z));\n    pr = vec3f(prSpun.x, pr.y, prSpun.y);\n    let prTilt = (tiltMat * vec2f(pr.y, pr.z));\n    pr = vec3f(pr.x, prTilt);\n    let rad = length(pr);\n    let dir = (pr / max(rad, 1e-4f));\n    let rr = (rad / max(ionRadius, 1e-3f));\n    let wr = (ionWrithe * smoothstep(0f, (ionRadius * 0.35f), rad));\n    var q = (dir * (*u).p_fils);\n    q = (q + (vec3f(sin((((rad * (*u).p_writheFreq) - (t * 1.2f)) + (q.y * 1.8f))), sin(((((rad * (*u).p_writheFreq) * 0.83f) + (t * 1f)) + (q.z * 1.8f))), sin(((((rad * (*u).p_writheFreq) * 1.19f) - (t * 0.7f)) + (q.x * 1.8f)))) * wr));\n    let f1 = ((sin((q.x + (t * 0.7f))) + sin(((q.y * 1.31f) - (t * 0.5f)))) + sin(((q.z * 1.13f) + (t * 0.9f))));\n    let f2 = ((sin((((q.y * 1.21f) + (t * 0.6f)) + 1.7f)) + sin((((q.z * 1.43f) - (t * 0.8f)) + 3.1f))) + sin((((q.x * 0.87f) + (t * 0.4f)) + 5f)));\n    let d2 = ((f1 * f1) + (f2 * f2));\n    var g = (1f / ((d2 * ionSharp) + (*u).p_soft));\n    g *= (1f + ((*u).p_tipGain * smoothstep(0.55f, 0.95f, rr)));\n    let core = (ionCore / (((rad * rad) * 8f) + 0.05f));\n    let fCol = mix((*u).c_inner, (*u).c_arc, smoothstep(0.1f, 0.75f, rr));\n    var w = ((((fCol + (vec3f((*u).p_whiten) * g)) * g) + ((*u).c_inner * core)) + vec3f((*u).p_fill));\n    w = min(w, vec3f((*u).p_stepClamp));\n    w = (w * stepLen);\n    acc = (acc + (w * T));\n    T *= exp((-(luma(w)) * (*u).p_scatter));\n    if ((T < 4e-3f)) {\n      break;\n    }\n  }\n  return acc;\n}\n\nstruct orb13Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb13Fragment(_arg_0: orb13Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ionSharp = ((*u).p_sharp * (1f - (0.25f * (*u).outputVol)));\n  let ionWrithe = ((*u).p_writhe * (1f + (0.6f * (*u).outputVol)));\n  let ionCore = ((*u).p_coreGain * ((1f + (1.6f * (*u).inputVol)) + (0.4f * (*u).outputVol)));\n  let ionExposure = ((*u).p_exposure * (1f - (0.35f * (*u).outputVol)));\n  let ionRadius = ((*u).p_envRadius + ((*u).p_swell * (*u).inputVol));\n  let acc = ionRender(fragCoord, ionSharp, ionWrithe, ionCore, ionRadius);\n  var col = tanh((acc / max(ionExposure, 0.01f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var alpha = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep((ionRadius * (1f - band)), (ionRadius * 1.005f), closest));\n  col = (col * mask);\n  alpha *= mask;\n  return vec4f(col, alpha);\n}"
};
