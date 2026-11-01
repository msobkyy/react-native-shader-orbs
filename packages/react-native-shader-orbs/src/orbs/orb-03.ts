import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb03: OrbDefinition = {
  "slug": "orb-03",
  "title": "ORB-03",
  "note": "a turbulent belt of light girdling the ball, contoured in rainbow",
  "entryPoint": "orb03Fragment",
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
    "p_feedback": {
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
    "p_hue": {
      "offset": 20,
      "size": 1
    },
    "p_plane": {
      "offset": 21,
      "size": 1
    },
    "p_pulse": {
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
    "p_shellR": {
      "offset": 25,
      "size": 1
    },
    "p_shellW": {
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
    "p_surge": {
      "offset": 30,
      "size": 1
    },
    "p_turb": {
      "offset": 31,
      "size": 1
    },
    "p_wander": {
      "offset": 32,
      "size": 1
    },
    "p_width": {
      "offset": 33,
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
      "key": "wander",
      "label": "Belt tilt drift",
      "default": 0.3,
      "min": 0,
      "max": 5,
      "step": 0.02,
      "integrate": true
    },
    {
      "key": "feedback",
      "label": "Tilt feedback",
      "default": 1.5,
      "min": 0,
      "max": 40,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "camDist",
      "label": "Camera distance",
      "default": 5,
      "min": 1,
      "max": 50,
      "step": 0.3,
      "integrate": false
    },
    {
      "key": "focal",
      "label": "Lens",
      "default": 1.05,
      "min": 0.15,
      "max": 15,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "shellR",
      "label": "Shell radius",
      "default": 3,
      "min": 0.2,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "shellW",
      "label": "Shell weight",
      "default": 0.12,
      "min": 0.005,
      "max": 1,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "plane",
      "label": "Belt tightness",
      "default": 0.15,
      "min": 0,
      "max": 1,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "turb",
      "label": "Warp",
      "default": 0.55,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "width",
      "label": "Belt width",
      "default": 0.004,
      "min": 0.0005,
      "max": 0.4,
      "step": 0.0005,
      "integrate": false
    },
    {
      "key": "pulse",
      "label": "Belt breathing",
      "default": 0,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "surge",
      "label": "Belt surge",
      "default": 0,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "hue",
      "label": "Contour hue",
      "default": 25,
      "min": 0,
      "max": 60,
      "step": 0.1,
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
      "default": 3.3,
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
      "default": 1500,
      "min": 5,
      "max": 20000,
      "step": 25,
      "integrate": false
    },
    {
      "key": "scatter",
      "label": "Diffusion",
      "default": 0.0006,
      "min": 0,
      "max": 0.1,
      "step": 0.0002,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 1500,
      "min": 20,
      "max": 100000,
      "step": 50,
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
      "envCore": 1.02,
      "exposure": 1450,
      "feedback": 2,
      "hue": 39.8,
      "plane": 0.085,
      "scatter": 0.0006,
      "shellR": 2,
      "shellW": 0.085,
      "speed": 0.6,
      "spread": 0.94,
      "stepClamp": 1475,
      "turb": 1.54,
      "wander": 0.3,
      "width": 0.001
    },
    "speaking": {
      "alphaGain": 2.7,
      "envRadius": 3.4,
      "exposure": 650,
      "feedback": 0.3,
      "plane": 0.1,
      "scatter": 0.0003,
      "shellR": 1.8,
      "shellW": 0.19,
      "speed": 0.9,
      "spread": 1.04,
      "surge": 1,
      "turb": 0.14,
      "wander": 0.84,
      "width": 0.018
    },
    "thinking": {
      "alphaGain": 2,
      "envCore": 0.84,
      "envRadius": 7.4,
      "exposure": 2300,
      "feedback": 7.5,
      "focal": 1.9,
      "hue": 28.3,
      "plane": 0.345,
      "pulse": 1,
      "scatter": 0,
      "shellR": 1.9,
      "shellW": 0.005,
      "speed": 2,
      "spread": 1.02,
      "turb": 0.7,
      "wander": 1.1,
      "width": 0.048
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
  "wgsl": "struct orb03Params {\n  anim: f32,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_camDist: f32,\n  p_contrast: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_envCore: f32,\n  p_envRadius: f32,\n  p_exposure: f32,\n  p_feedback: f32,\n  p_fill: f32,\n  p_focal: f32,\n  p_hue: f32,\n  p_plane: f32,\n  p_pulse: f32,\n  p_saturation: f32,\n  p_scatter: f32,\n  p_shellR: f32,\n  p_shellW: f32,\n  p_speed: f32,\n  p_spread: f32,\n  p_stepClamp: f32,\n  p_surge: f32,\n  p_turb: f32,\n  p_wander: f32,\n  p_width: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb03Params;\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn eclipticRender(fragCoord: vec2f, eclipticTurb: f32, eclipticPlane: f32, eclipticWidth: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  let animTime = (*u).p_speed;\n  let wander = (*u).p_wander;\n  var acc = vec3f();\n  var T = 1f;\n  var z = max(((*u).p_camDist - ((*u).p_envRadius * 1.3f)), 0f);\n  let zEnd = ((*u).p_camDist + ((*u).p_envRadius * 1.3f));\n  var dist = 0f;\n  for (var i = 0u; i < 80u; i += 1u) {\n    let p = (ro + (rd * z));\n    let axis = normalize(cos(((vec3f(4, 2, 0) - (dist * (*u).p_feedback)) + wander)));\n    var a = ((axis * dot(axis, p)) - cross(axis, p));\n    for (var i_1 = 0u; i_1 < 8u; i_1 += 1u) {\n      let f = (f32(i_1) + 2f);\n      a = (a + ((sin(((a * f) + animTime)).yzx * eclipticTurb) / f));\n    }\n    dist = (((*u).p_shellW * abs((length(p) - (*u).p_shellR))) + (eclipticPlane * abs(a.y)));\n    dist = max(dist, eclipticWidth);\n    var w = (cos(((vec3f(0, 2, 4) * (*u).p_spread) + (dist * (*u).p_hue))) + 1f);\n    w = (w * (z / dist));\n    w = min(w, vec3f((*u).p_stepClamp));\n    let env = smoothstep(((*u).p_envRadius * 1.12f), ((*u).p_envRadius * (*u).p_envCore), length(p));\n    w = ((w + (*u).p_fill) * env);\n    acc = (acc + (w * T));\n    T *= exp((-(luma(w)) * (*u).p_scatter));\n    z += dist;\n    if (((T < 4e-3f) || (z > zEnd))) {\n      break;\n    }\n  }\n  return acc;\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb03Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb03Fragment(_arg_0: orb03Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let surge = (0.5f - (0.5f * cos(((*u).anim * 4f))));\n  let eclipticTurb = mix(((*u).p_turb * (1f + (0.4f * (*u).inputVol))), mix(0.5f, 1.6f, surge), (*u).p_surge);\n  let eclipticPlane = mix(((*u).p_plane * (1f - (0.35f * (*u).outputVol))), mix(0.1f, 0.3f, surge), (*u).p_surge);\n  let eclipticExposure = ((*u).p_exposure * (1f - (0.3f * (*u).outputVol)));\n  let eclipticWidth = max(((*u).p_width * (1f - ((*u).p_pulse * (0.5f + (0.5f * cos(((*u).anim * 3f))))))), 5e-4f);\n  let acc = eclipticRender(fragCoord, eclipticTurb, eclipticPlane, eclipticWidth);\n  var col = tanh((acc / max(eclipticExposure, 1f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var alpha = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep(((*u).p_envRadius * (1f - band)), ((*u).p_envRadius * 1.005f), closest));\n  col = (col * mask);\n  alpha *= mask;\n  let fade = edgeFade((*u).p_edgeFade, length(orbUv));\n  col = (col * fade);\n  alpha *= fade;\n  return vec4f(col, alpha);\n}"
};
