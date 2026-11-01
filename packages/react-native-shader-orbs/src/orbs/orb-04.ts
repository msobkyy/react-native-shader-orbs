import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb04: OrbDefinition = {
  "slug": "orb-04",
  "title": "ORB-04",
  "note": "a hollow shell of light, faceted by a voxel lattice",
  "entryPoint": "orb04Fragment",
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
    "p_edge": {
      "offset": 12,
      "size": 1
    },
    "p_edgeFade": {
      "offset": 13,
      "size": 1
    },
    "p_envScale": {
      "offset": 14,
      "size": 1
    },
    "p_exposure": {
      "offset": 15,
      "size": 1
    },
    "p_floorLevel": {
      "offset": 16,
      "size": 1
    },
    "p_focal": {
      "offset": 17,
      "size": 1
    },
    "p_hueGain": {
      "offset": 18,
      "size": 1
    },
    "p_pitch": {
      "offset": 19,
      "size": 1
    },
    "p_saturation": {
      "offset": 20,
      "size": 1
    },
    "p_shellR": {
      "offset": 21,
      "size": 1
    },
    "p_slack": {
      "offset": 22,
      "size": 1
    },
    "p_speed": {
      "offset": 23,
      "size": 1
    },
    "p_turb": {
      "offset": 24,
      "size": 1
    },
    "p_width": {
      "offset": 25,
      "size": 1
    },
    "res": {
      "offset": 26,
      "size": 2
    },
    "time": {
      "offset": 28,
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
      "key": "camDist",
      "label": "Camera distance",
      "default": 9,
      "min": 1,
      "max": 60,
      "step": 0.3,
      "integrate": false
    },
    {
      "key": "focal",
      "label": "Lens",
      "default": 1.35,
      "min": 0.15,
      "max": 15,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "shellR",
      "label": "Shell radius",
      "default": 5,
      "min": 0.3,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "pitch",
      "label": "Facet size",
      "default": 0.3,
      "min": 0.005,
      "max": 1.5,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "turb",
      "label": "Displacement",
      "default": 0.45,
      "min": 0,
      "max": 5,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "slack",
      "label": "Trace slack",
      "default": 0.1,
      "min": 0.01,
      "max": 0.9,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "width",
      "label": "Surface width",
      "default": 0.003,
      "min": 0.0005,
      "max": 0.3,
      "step": 0.0005,
      "integrate": false
    },
    {
      "key": "hueGain",
      "label": "Position hue",
      "default": 1,
      "min": 0,
      "max": 6,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "floorLevel",
      "label": "White floor",
      "default": 0.8,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "envScale",
      "label": "Silhouette margin",
      "default": 1.16,
      "min": 1,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 3000,
      "min": 20,
      "max": 40000,
      "step": 20,
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
      "default": 1.3,
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
      "contrast": 1.3,
      "exposure": 3000,
      "hueGain": 1,
      "slack": 0.1,
      "speed": 0.6,
      "turb": 0.45,
      "width": 0.003
    },
    "speaking": {
      "contrast": 0.92,
      "envScale": 1.67,
      "exposure": 1220,
      "floorLevel": 0.82,
      "hueGain": 0.5,
      "pitch": 0.22,
      "saturation": 1.66,
      "slack": 0.165,
      "speed": 2,
      "turb": 0.8,
      "width": 0.032
    },
    "thinking": {
      "contrast": 1.75,
      "exposure": 4800,
      "hueGain": 1.7,
      "slack": 0.07,
      "speed": 1.8,
      "turb": 0.85,
      "width": 0.0012
    }
  },
  "stateColors": {
    "idle": {
      "tint": "#ffffff"
    },
    "speaking": {
      "tint": "#94f3ff"
    },
    "thinking": {
      "tint": "#9db8ff"
    }
  },
  "wgsl": "struct orb04Params {\n  anim: f32,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_camDist: f32,\n  p_contrast: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_envScale: f32,\n  p_exposure: f32,\n  p_floorLevel: f32,\n  p_focal: f32,\n  p_hueGain: f32,\n  p_pitch: f32,\n  p_saturation: f32,\n  p_shellR: f32,\n  p_slack: f32,\n  p_speed: f32,\n  p_turb: f32,\n  p_width: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb04Params;\n\nfn roundv(x: vec3f) -> vec3f {\n  return floor((x + 0.5f));\n}\n\nfn geodeRender(fragCoord: vec2f, geodeTurb: f32, geodeWidth: f32) -> vec3f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  let animTime = (*u).p_speed;\n  let shellR = (*u).p_shellR;\n  let pitch = max((*u).p_pitch, 2e-3f);\n  let zEnd = ((*u).p_camDist + (shellR * 2.5f));\n  var acc = vec3f();\n  var z = 0f;\n  for (var i = 0u; i < 50u; i += 1u) {\n    var p = (ro + (rd * z));\n    for (var i_1 = 0u; i_1 < 6u; i_1 += 1u) {\n      let f = (f32(i_1) + 2f);\n      p = (p + ((sin(((roundv((p.zxy / pitch)) * (pitch * f)) - animTime)) * geodeTurb) / f));\n    }\n    let dist = (geodeWidth + ((*u).p_slack * abs((length(p) - shellR))));\n    z += dist;\n    acc = (acc + ((((p * (*u).p_hueGain) / max(z, 1e-3f)) + (*u).p_floorLevel) / dist));\n    if ((z > zEnd)) {\n      break;\n    }\n  }\n  return acc;\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb04Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb04Fragment(_arg_0: orb04Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let geodeTurb = ((*u).p_turb * (1f + (0.5f * (*u).inputVol)));\n  let geodeWidth = max(((*u).p_width * (1f - (0.4f * (*u).outputVol))), 2e-4f);\n  let geodeExposure = ((*u).p_exposure * (1f - (0.3f * (*u).outputVol)));\n  let acc = geodeRender(fragCoord, geodeTurb, geodeWidth);\n  var col = tanh((acc / max(geodeExposure, 1f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = (mix(vec3f(lum), col, (*u).p_saturation) * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var alpha = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let sil = ((*u).p_shellR * (*u).p_envScale);\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep((sil * (1f - band)), (sil * 1.005f), closest));\n  col = (col * mask);\n  alpha *= mask;\n  let fade = edgeFade((*u).p_edgeFade, length(orbUv));\n  col = (col * fade);\n  alpha *= fade;\n  return vec4f(col, alpha);\n}"
};
