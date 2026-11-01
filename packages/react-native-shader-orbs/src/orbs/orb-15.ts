import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb15: OrbDefinition = {
  "slug": "orb-15",
  "title": "ORB-15",
  "note": "an iridescent particle-track web worn as the ball's skin",
  "entryPoint": "orb15Fragment",
  "uniformSize": 128,
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
    "p_fieldScale": {
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
    "p_saturation": {
      "offset": 21,
      "size": 1
    },
    "p_scatter": {
      "offset": 22,
      "size": 1
    },
    "p_speed": {
      "offset": 23,
      "size": 1
    },
    "p_stepClamp": {
      "offset": 24,
      "size": 1
    },
    "p_stepScale": {
      "offset": 25,
      "size": 1
    },
    "p_turb": {
      "offset": 26,
      "size": 1
    },
    "p_wander": {
      "offset": 27,
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
      "key": "speed",
      "label": "Anim speed",
      "default": 0.5,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "wander",
      "label": "Axis wander",
      "default": 0.15,
      "min": 0,
      "max": 3,
      "step": 0.015,
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
      "key": "fieldScale",
      "label": "Web density",
      "default": 2.4,
      "min": 1,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "turb",
      "label": "Weave",
      "default": 0.8,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "stepScale",
      "label": "Skin depth",
      "default": 0.015,
      "min": 0.0015,
      "max": 0.4,
      "step": 0.005,
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
      "default": 0.3,
      "min": 0,
      "max": 100,
      "step": 0.3,
      "integrate": false
    },
    {
      "key": "stepClamp",
      "label": "Step clamp",
      "default": 150,
      "min": 3,
      "max": 5000,
      "step": 30,
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
      "default": 50,
      "min": 1.5,
      "max": 1500,
      "step": 10,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.35,
      "min": 0.15,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "saturation",
      "label": "Saturation",
      "default": 1.35,
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
      "exposure": 72,
      "scatter": 0.01,
      "speed": 0.4,
      "turb": 0.75,
      "wander": 0.12
    },
    "speaking": {
      "alphaGain": 2.5,
      "disperse": 1.6,
      "exposure": 46,
      "scatter": 0.0075,
      "speed": 2,
      "turb": 1.1,
      "wander": 0.3
    },
    "thinking": {
      "alphaGain": 2.1,
      "disperse": 0.8,
      "exposure": 66,
      "scatter": 0.0095,
      "speed": 1,
      "turb": 0.95,
      "wander": 0.7
    }
  },
  "wgsl": "struct orb15Params {\n  anim: f32,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_camDist: f32,\n  p_contrast: f32,\n  p_disperse: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_envCore: f32,\n  p_envRadius: f32,\n  p_exposure: f32,\n  p_fieldScale: f32,\n  p_fill: f32,\n  p_focal: f32,\n  p_saturation: f32,\n  p_scatter: f32,\n  p_speed: f32,\n  p_stepClamp: f32,\n  p_stepScale: f32,\n  p_turb: f32,\n  p_wander: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb15Params;\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn muonsRender(fragCoord: vec2f, muonsTurb: f32) -> vec3f {\n  let u = (&params);\n  let animTime = (*u).p_speed;\n  let wander = (*u).p_wander;\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  let proj = dot((ro * -1f), rd);\n  let b2 = (dot(ro, ro) - (proj * proj));\n  let R = ((*u).p_envRadius * 0.96f);\n  let entry = (proj - sqrt(max(((R * R) - b2), 0f)));\n  var acc = vec3f();\n  var T = 1f;\n  var z = entry;\n  var s = 0f;\n  for (var i = 0u; i < 10u; i += 1u) {\n    let p = (ro + (rd * z));\n    let q = (p * (*u).p_fieldScale);\n    let axis = normalize(cos(((vec3f(7, 1, 0) + wander) - s)));\n    var a = ((axis * dot(axis, q)) - cross(axis, q));\n    for (var i_1 = 0u; i_1 < 8u; i_1 += 1u) {\n      let dj = (f32(i_1) + 2f);\n      let wave = sin(((a * dj) + animTime));\n      a = (a + ((wave.yzx * muonsTurb) / dj));\n    }\n    s = length(a);\n    var dist = ((*u).p_stepScale * abs(sin(s)));\n    dist = max(dist, 1e-5f);\n    z += dist;\n    var w = (((cos(((vec3f(0, 2, 3) * (*u).p_disperse) + (((z - entry) / max((*u).p_stepScale, 1e-3f)) + animTime))) + 1f) / dist) / max(s, 0.5f));\n    w = min(w, vec3f((*u).p_stepClamp));\n    w = (w * (20f / max((*u).p_stepClamp, 1f)));\n    let env = smoothstep(((*u).p_envRadius * 1.12f), ((*u).p_envRadius * (*u).p_envCore), length(p));\n    w = ((w + (*u).p_fill) * env);\n    acc = (acc + (w * T));\n    T *= exp((-(luma(w)) * (*u).p_scatter));\n    if ((T < 4e-3f)) {\n      break;\n    }\n  }\n  return acc;\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb15Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb15Fragment(_arg_0: orb15Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let muonsTurb = ((*u).p_turb * (1f + (0.5f * (*u).inputVol)));\n  let muonsExposure = ((*u).p_exposure * (1f - (0.35f * (*u).outputVol)));\n  let acc = muonsRender(fragCoord, muonsTurb);\n  var col = tanh((acc / max(muonsExposure, 1f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var alpha = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep(((*u).p_envRadius * (1f - band)), ((*u).p_envRadius * 1.005f), closest));\n  col = (col * mask);\n  alpha *= mask;\n  let fade = edgeFade((*u).p_edgeFade, length(orbUv));\n  col = (col * fade);\n  alpha *= fade;\n  return vec4f(col, alpha);\n}"
};
