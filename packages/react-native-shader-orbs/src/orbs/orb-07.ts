import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb07: OrbDefinition = {
  "slug": "orb-07",
  "title": "ORB-07",
  "note": "a twist wave travelling out through the ball around a lit column",
  "entryPoint": "orb07Fragment",
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
    "p_column": {
      "offset": 11,
      "size": 1
    },
    "p_contrast": {
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
    "p_hueDepth": {
      "offset": 20,
      "size": 1
    },
    "p_hueStep": {
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
    "p_spin": {
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
    "p_tilt": {
      "offset": 28,
      "size": 1
    },
    "p_turb": {
      "offset": 29,
      "size": 1
    },
    "p_twist": {
      "offset": 30,
      "size": 1
    },
    "p_wave": {
      "offset": 31,
      "size": 1
    },
    "res": {
      "offset": 32,
      "size": 2
    },
    "time": {
      "offset": 34,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Cell shimmer",
      "default": 0.5,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "wave",
      "label": "Wave speed",
      "default": 0.7,
      "min": 0,
      "max": 8,
      "step": 0.03,
      "integrate": true
    },
    {
      "key": "twist",
      "label": "Twist",
      "default": 1,
      "min": 0,
      "max": 8,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "spin",
      "label": "Roll",
      "default": 0.1,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": true
    },
    {
      "key": "tilt",
      "label": "Axis lean",
      "default": 0.3,
      "min": -1.5,
      "max": 1.5,
      "step": 0.015,
      "integrate": false
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
      "key": "turb",
      "label": "Cell turbulence",
      "default": 1,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "column",
      "label": "Column release",
      "default": 0,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "stepScale",
      "label": "Step scale",
      "default": 0.1,
      "min": 0.005,
      "max": 1.5,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "hueDepth",
      "label": "Depth hue",
      "default": 0.75,
      "min": 0,
      "max": 10,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "hueStep",
      "label": "Step hue",
      "default": 0.45,
      "min": 0,
      "max": 10,
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
      "default": 0.88,
      "min": 0.3,
      "max": 1.02,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "fill",
      "label": "Body fill",
      "default": 0.15,
      "min": 0,
      "max": 100,
      "step": 0.3,
      "integrate": false
    },
    {
      "key": "stepClamp",
      "label": "Step clamp",
      "default": 400,
      "min": 3,
      "max": 5000,
      "step": 10,
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
      "default": 60,
      "min": 1.5,
      "max": 5000,
      "step": 5,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.3,
      "min": 0.15,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "saturation",
      "label": "Saturation",
      "default": 1.15,
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
      "column": 0,
      "exposure": 60,
      "scatter": 0.01,
      "speed": 0.5,
      "turb": 1,
      "twist": 1,
      "wave": 0.7
    },
    "speaking": {
      "alphaGain": 2.7,
      "column": 0.45,
      "exposure": 26,
      "scatter": 0.006,
      "speed": 0.9,
      "turb": 0.85,
      "twist": 0.35,
      "wave": 3.2
    },
    "thinking": {
      "alphaGain": 2,
      "column": 0,
      "exposure": 88,
      "scatter": 0.011,
      "speed": 1.5,
      "turb": 1.35,
      "twist": 3.6,
      "wave": 0.15
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
  "wgsl": "struct orb07Params {\n  anim: f32,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_camDist: f32,\n  p_column: f32,\n  p_contrast: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_envCore: f32,\n  p_envRadius: f32,\n  p_exposure: f32,\n  p_fill: f32,\n  p_focal: f32,\n  p_hueDepth: f32,\n  p_hueStep: f32,\n  p_saturation: f32,\n  p_scatter: f32,\n  p_speed: f32,\n  p_spin: f32,\n  p_stepClamp: f32,\n  p_stepScale: f32,\n  p_tilt: f32,\n  p_turb: f32,\n  p_twist: f32,\n  p_wave: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb07Params;\n\nfn roundv(x: vec3f) -> vec3f {\n  return floor((x + 0.5f));\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn torsionRender(fragCoord: vec2f, torsionTurb: f32, torsionTwist: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  let shimmer = (*u).p_speed;\n  let wave = (*u).p_wave;\n  let spin = (*u).p_spin;\n  let ct = cos((*u).p_tilt);\n  let st = sin((*u).p_tilt);\n  let cs = cos(spin);\n  let ss = sin(spin);\n  let axis = vec3f(0, 1, 0);\n  var acc = vec3f();\n  var T = 1f;\n  var z = max(((*u).p_camDist - ((*u).p_envRadius * 1.3f)), 0f);\n  let zEnd = ((*u).p_camDist + ((*u).p_envRadius * 1.3f));\n  for (var i = 0u; i < 50u; i += 1u) {\n    let world = (ro + (rd * z));\n    var p = vec3f(world.x, ((world.y * ct) + (world.z * st)), ((-(world.y) * st) + (world.z * ct)));\n    p = vec3f(((p.x * cs) - (p.z * ss)), p.y, ((p.x * ss) + (p.z * cs)));\n    let h = ((length(p) * torsionTwist) - wave);\n    var a = (mix((axis * dot(axis, p)), p, sin(h)) + (cross(axis, p) * cos(h)));\n    for (var i_1 = 0u; i_1 < 9u; i_1 += 1u) {\n      let dj = (f32(i_1) + 1f);\n      a = (a + ((sin((roundv((a * dj)) - shimmer)).zxy * torsionTurb) / dj));\n    }\n    var dist = ((*u).p_stepScale * mix(length(a.xz), length(a), (*u).p_column));\n    dist = max(dist, ((*u).p_envRadius * 3e-3f));\n    var w = (vec3f(3f, (((z - (*u).p_camDist) + (*u).p_envRadius) * (*u).p_hueDepth), (f32(i) * (*u).p_hueStep)) / dist);\n    w = min(w, (vec3f((*u).p_stepClamp) * vec3f(1, 1, 2)));\n    w = (w * (20f / max((*u).p_stepClamp, 1f)));\n    let env = smoothstep(((*u).p_envRadius * 1.12f), ((*u).p_envRadius * (*u).p_envCore), length(world));\n    w = ((w + (*u).p_fill) * env);\n    acc = (acc + (w * T));\n    T *= exp((-(luma(w)) * (*u).p_scatter));\n    z += dist;\n    if (((T < 4e-3f) || (z > zEnd))) {\n      break;\n    }\n  }\n  return acc;\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb07Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb07Fragment(_arg_0: orb07Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let torsionTurb = ((*u).p_turb * (1f + (0.5f * (*u).inputVol)));\n  let torsionExposure = ((*u).p_exposure * (1f - (0.35f * (*u).outputVol)));\n  let torsionTwist = ((*u).p_twist * (1f + (0.4f * (*u).outputVol)));\n  let acc = torsionRender(fragCoord, torsionTurb, torsionTwist);\n  var col = tanh((acc / max(torsionExposure, 1f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var alpha = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep(((*u).p_envRadius * (1f - band)), ((*u).p_envRadius * 1.005f), closest));\n  col = (col * mask);\n  alpha *= mask;\n  let fade = edgeFade((*u).p_edgeFade, length(orbUv));\n  col = (col * fade);\n  alpha *= fade;\n  return vec4f(col, alpha);\n}"
};
