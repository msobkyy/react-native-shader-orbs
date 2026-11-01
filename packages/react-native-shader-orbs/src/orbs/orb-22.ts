import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb22: OrbDefinition = {
  "slug": "orb-22",
  "title": "ORB-22",
  "note": "field lines swirling around the ball about a wandering axis",
  "entryPoint": "orb22Fragment",
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
    "p_focal": {
      "offset": 18,
      "size": 1
    },
    "p_glow": {
      "offset": 19,
      "size": 1
    },
    "p_glowFew": {
      "offset": 20,
      "size": 1
    },
    "p_hueDepth": {
      "offset": 21,
      "size": 1
    },
    "p_hueStep": {
      "offset": 22,
      "size": 1
    },
    "p_hug": {
      "offset": 23,
      "size": 1
    },
    "p_saturation": {
      "offset": 24,
      "size": 1
    },
    "p_scatter": {
      "offset": 25,
      "size": 1
    },
    "p_speed": {
      "offset": 26,
      "size": 1
    },
    "p_stepClamp": {
      "offset": 27,
      "size": 1
    },
    "p_stepScale": {
      "offset": 28,
      "size": 1
    },
    "p_turb": {
      "offset": 29,
      "size": 1
    },
    "p_wander": {
      "offset": 30,
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
      "default": 0.12,
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
      "key": "hug",
      "label": "Surface hug",
      "default": 0.8,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "turb",
      "label": "Cell shimmer",
      "default": 0.6,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "stepScale",
      "label": "Step scale",
      "default": 0.07,
      "min": 0.005,
      "max": 1.5,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "hueStep",
      "label": "Step hue",
      "default": 0.12,
      "min": 0,
      "max": 10,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "hueDepth",
      "label": "Depth hue",
      "default": 1.4,
      "min": 0,
      "max": 10,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "glow",
      "label": "Vector glow",
      "default": 1.4,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "glowFew",
      "label": "Glow density",
      "default": 0.12,
      "min": 0,
      "max": 1.5,
      "step": 0.01,
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
      "default": 800,
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
      "default": 260,
      "min": 1.5,
      "max": 5000,
      "step": 15,
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
      "exposure": 260,
      "glow": 1.3,
      "glowFew": 0.12,
      "scatter": 0.01,
      "speed": 0.4,
      "turb": 0.55,
      "wander": 0.1
    },
    "speaking": {
      "alphaGain": 2.5,
      "exposure": 170,
      "glow": 2.4,
      "glowFew": 0.22,
      "scatter": 0.0075,
      "speed": 2.2,
      "turb": 0.85,
      "wander": 0.3
    },
    "thinking": {
      "alphaGain": 2.1,
      "exposure": 230,
      "glow": 1.7,
      "glowFew": 0.07,
      "scatter": 0.0095,
      "speed": 1.2,
      "turb": 0.7,
      "wander": 0.6
    }
  },
  "stateColors": {
    "idle": {
      "tint": "#ffffff"
    },
    "speaking": {
      "tint": "#ffd9c4"
    },
    "thinking": {
      "tint": "#c3d2ff"
    }
  },
  "wgsl": "struct orb22Params {\n  anim: f32,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_camDist: f32,\n  p_contrast: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_envCore: f32,\n  p_envRadius: f32,\n  p_exposure: f32,\n  p_fill: f32,\n  p_focal: f32,\n  p_glow: f32,\n  p_glowFew: f32,\n  p_hueDepth: f32,\n  p_hueStep: f32,\n  p_hug: f32,\n  p_saturation: f32,\n  p_scatter: f32,\n  p_speed: f32,\n  p_stepClamp: f32,\n  p_stepScale: f32,\n  p_turb: f32,\n  p_wander: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb22Params;\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn vectorsRender(fragCoord: vec2f, vectorsTurb: f32, vectorsGlow: f32) -> vec3f {\n  let u = (&params);\n  let animTime = (*u).p_speed;\n  let wander = (*u).p_wander;\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  let axis = normalize(sin((vec3f(0, 2, 4) + wander)));\n  var acc = vec3f();\n  var T = 1f;\n  var z = max(((*u).p_camDist - ((*u).p_envRadius * 1.3f)), 0f);\n  let zEnd = ((*u).p_camDist + ((*u).p_envRadius * 1.3f));\n  for (var i = 0u; i < 70u; i += 1u) {\n    let p = (ro + (rd * z));\n    let rl = max(length(p), 1e-3f);\n    let q = mix(p, ((p / rl) * (*u).p_envRadius), (*u).p_hug);\n    let v = ((axis * dot(axis, q)) + cross(axis, q));\n    var a = v;\n    for (var i_1 = 0u; i_1 < 7u; i_1 += 1u) {\n      let dj = (f32(i_1) + 3f);\n      let wave = sin((ceil((a * dj)) - animTime));\n      a = (a + ((wave.yzx * vectorsTurb) / dj));\n    }\n    var dens = (((*u).p_stepScale * length(sin((a * a)))) * sqrt(length((v * sin(v.yzx)))));\n    dens = max(dens, 1e-4f);\n    var w = (vec3f(9f, (f32(i) * (*u).p_hueStep), (((z - (*u).p_camDist) + (*u).p_envRadius) * (*u).p_hueDepth)) / dens);\n    w = min(w, (vec3f((*u).p_stepClamp) * vec3f(1, 2, 1)));\n    w = (w * (20f / max((*u).p_stepClamp, 1f)));\n    let few = max((*u).p_glowFew, 1e-3f);\n    let vc = ceil((v * 2f));\n    let hcell = hash((vc.xy + (vec2f(7.309999942779541, 3.1700000762939453) * vc.z)));\n    let cyc = fract((hcell + (animTime * 0.05f)));\n    let sel = (smoothstep((1f - few), (1f - (0.5f * few)), cyc) * smoothstep(1f, (1f - (0.5f * few)), cyc));\n    w = (w + (vec3f(1, 0.9599999785423279, 0.8799999952316284) * ((min((0.08f / (dens * dens)), 500f) * sel) * vectorsGlow)));\n    let env = smoothstep(((*u).p_envRadius * 1.12f), ((*u).p_envRadius * (*u).p_envCore), length(p));\n    w = ((w + (*u).p_fill) * env);\n    acc = (acc + (w * T));\n    T *= exp((-(luma(w)) * (*u).p_scatter));\n    z += dens;\n    if (((T < 4e-3f) || (z > zEnd))) {\n      break;\n    }\n  }\n  return acc;\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb22Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb22Fragment(_arg_0: orb22Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let vectorsTurb = ((*u).p_turb * (1f + (0.5f * (*u).inputVol)));\n  let vectorsExposure = ((*u).p_exposure * (1f - (0.35f * (*u).outputVol)));\n  let vectorsGlow = ((*u).p_glow * (1f + (0.8f * (*u).outputVol)));\n  let acc = vectorsRender(fragCoord, vectorsTurb, vectorsGlow);\n  var col = tanh((acc / max(vectorsExposure, 1f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = mix(vec3f(lum), col, (*u).p_saturation);\n  col = (col * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var a = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep(((*u).p_envRadius * (1f - band)), ((*u).p_envRadius * 1.005f), closest));\n  col = (col * mask);\n  a *= mask;\n  let r2d = length(orbUv);\n  let fade = edgeFade((*u).p_edgeFade, r2d);\n  col = (col * fade);\n  a *= fade;\n  return vec4f(col, a);\n}"
};
