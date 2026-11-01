import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb20: OrbDefinition = {
  "slug": "orb-20",
  "title": "ORB-20",
  "note": "a water film rushing down the ball, fountain-style",
  "entryPoint": "orb20Fragment",
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
    "p_edge": {
      "offset": 12,
      "size": 1
    },
    "p_edgeFade": {
      "offset": 13,
      "size": 1
    },
    "p_envCore": {
      "offset": 14,
      "size": 1
    },
    "p_envRadius": {
      "offset": 15,
      "size": 1
    },
    "p_exposure": {
      "offset": 16,
      "size": 1
    },
    "p_fill": {
      "offset": 17,
      "size": 1
    },
    "p_flow": {
      "offset": 18,
      "size": 1
    },
    "p_foam": {
      "offset": 19,
      "size": 1
    },
    "p_focal": {
      "offset": 20,
      "size": 1
    },
    "p_hueScale": {
      "offset": 21,
      "size": 1
    },
    "p_saturation": {
      "offset": 22,
      "size": 1
    },
    "p_scatter": {
      "offset": 23,
      "size": 1
    },
    "p_speed": {
      "offset": 24,
      "size": 1
    },
    "p_stepClamp": {
      "offset": 25,
      "size": 1
    },
    "p_stepScale": {
      "offset": 26,
      "size": 1
    },
    "p_stretch": {
      "offset": 27,
      "size": 1
    },
    "p_tilt": {
      "offset": 28,
      "size": 1
    },
    "p_wall": {
      "offset": 29,
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
      "label": "Ripple speed",
      "default": 0.5,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "flow",
      "label": "Fall rush",
      "default": 3,
      "min": 0,
      "max": 20,
      "step": 0.1,
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
      "label": "Flow tilt",
      "default": 0.15,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "stretch",
      "label": "Fall stretch",
      "default": 0.3,
      "min": 0.03,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "foam",
      "label": "Foam",
      "default": 0.3,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "wall",
      "label": "Film sharpness",
      "default": 3,
      "min": 0.15,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "stepScale",
      "label": "Step scale",
      "default": 0.2,
      "min": 0.015,
      "max": 1.5,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "hueScale",
      "label": "Hue banding",
      "default": 0.85,
      "min": 0,
      "max": 3,
      "step": 0.015,
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
      "default": 0.4,
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
      "default": 0.01,
      "min": 0,
      "max": 0.5,
      "step": 0.003,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 22,
      "min": 1.5,
      "max": 1500,
      "step": 10,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.15,
      "min": 0.15,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "saturation",
      "label": "Saturation",
      "default": 1.55,
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
      "exposure": 22,
      "flow": 3,
      "foam": 0.3,
      "scatter": 0.01,
      "speed": 0.5
    },
    "speaking": {
      "alphaGain": 2.5,
      "exposure": 16,
      "flow": 5.5,
      "foam": 0.45,
      "scatter": 0.0075,
      "speed": 1
    },
    "thinking": {
      "alphaGain": 2.1,
      "exposure": 21,
      "flow": 3.3,
      "foam": 0.33,
      "scatter": 0.0095,
      "speed": 0.6
    }
  },
  "wgsl": "struct orb20Params {\n  anim: f32,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_camDist: f32,\n  p_contrast: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_envCore: f32,\n  p_envRadius: f32,\n  p_exposure: f32,\n  p_fill: f32,\n  p_flow: f32,\n  p_foam: f32,\n  p_focal: f32,\n  p_hueScale: f32,\n  p_saturation: f32,\n  p_scatter: f32,\n  p_speed: f32,\n  p_stepClamp: f32,\n  p_stepScale: f32,\n  p_stretch: f32,\n  p_tilt: f32,\n  p_wall: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb20Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn fallsRender(fragCoord: vec2f, fallsFoam: f32) -> vec3f {\n  let u = (&params);\n  let animTime = (*u).p_speed;\n  let flow = (*u).p_flow;\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  let rShell = ((*u).p_envRadius * 0.92f);\n  var acc = vec3f();\n  var T = 1f;\n  var z = max(((*u).p_camDist - ((*u).p_envRadius * 1.3f)), 0f);\n  let zEnd = ((*u).p_camDist + ((*u).p_envRadius * 1.3f));\n  let tiltMat = rot2((*u).p_tilt);\n  for (var i = 0u; i < 50u; i += 1u) {\n    var c = (ro + (rd * z));\n    let cTilt = (tiltMat * vec2f(c.y, c.z));\n    c = vec3f(c.x, cTilt);\n    var p = vec3f(c.x, (c.y * (*u).p_stretch), c.z);\n    for (var i_1 = 0u; i_1 < 5u; i_1 += 1u) {\n      let fj = (f32(i_1) + 1.3f);\n      p = (p + (cos(((((vec3f(p.y, p.z, p.x) * fj) + f32(i)) + z) + vec3f(flow, 0f, 0f))) / fj));\n    }\n    let pm = mix(c, p, fallsFoam);\n    var dist = ((*u).p_stepScale * (((abs((length(pm) - rShell)) * (*u).p_wall) + sin(((pm.x - pm.z) + (animTime * 2f)))) + 1f));\n    dist = max(dist, 1e-3f);\n    z += dist;\n    var w = (((cos((vec3f(((pm.x * (*u).p_hueScale) + dist)) + vec3f(6, 1, 2))) + 2f) / dist) / max(z, 1f));\n    w = min(w, vec3f((*u).p_stepClamp));\n    let env = smoothstep(((*u).p_envRadius * 1.12f), ((*u).p_envRadius * (*u).p_envCore), length((ro + (rd * z))));\n    w = ((w + (*u).p_fill) * env);\n    acc = (acc + (w * T));\n    T *= exp((-(luma(w)) * (*u).p_scatter));\n    if (((T < 4e-3f) || (z > zEnd))) {\n      break;\n    }\n  }\n  return acc;\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb20Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb20Fragment(_arg_0: orb20Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let fallsFoam = ((*u).p_foam * (1f + (0.5f * (*u).inputVol)));\n  let fallsExposure = ((*u).p_exposure * (1f - (0.35f * (*u).outputVol)));\n  let acc = fallsRender(fragCoord, fallsFoam);\n  var col = tanh((acc / max(fallsExposure, 1f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = mix(vec3f(lum), col, (*u).p_saturation);\n  col = (col * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var a = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep(((*u).p_envRadius * (1f - band)), ((*u).p_envRadius * 1.005f), closest));\n  col = (col * mask);\n  a *= mask;\n  let r2d = length(orbUv);\n  let fade = edgeFade((*u).p_edgeFade, r2d);\n  col = (col * fade);\n  a *= fade;\n  return vec4f(col, a);\n}"
};
