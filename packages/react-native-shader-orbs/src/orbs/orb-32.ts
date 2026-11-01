import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb32: OrbDefinition = {
  "slug": "orb-32",
  "title": "ORB-32",
  "note": "a galaxy marched as gas and dust inside the ball",
  "entryPoint": "orb32Fragment",
  "uniformSize": 272,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_core": {
      "offset": 4,
      "size": 3
    },
    "c_deep": {
      "offset": 8,
      "size": 3
    },
    "c_inner": {
      "offset": 12,
      "size": 3
    },
    "c_outer": {
      "offset": 16,
      "size": 3
    },
    "c_rim": {
      "offset": 20,
      "size": 3
    },
    "c_tint": {
      "offset": 24,
      "size": 3
    },
    "inputVol": {
      "offset": 27,
      "size": 1
    },
    "outputVol": {
      "offset": 28,
      "size": 1
    },
    "p_absorb": {
      "offset": 29,
      "size": 1
    },
    "p_alphaGain": {
      "offset": 30,
      "size": 1
    },
    "p_armSharp": {
      "offset": 31,
      "size": 1
    },
    "p_arms": {
      "offset": 32,
      "size": 1
    },
    "p_beat": {
      "offset": 33,
      "size": 1
    },
    "p_breathe": {
      "offset": 34,
      "size": 1
    },
    "p_bulge": {
      "offset": 35,
      "size": 1
    },
    "p_camDist": {
      "offset": 36,
      "size": 1
    },
    "p_churn": {
      "offset": 37,
      "size": 1
    },
    "p_contrast": {
      "offset": 38,
      "size": 1
    },
    "p_core": {
      "offset": 39,
      "size": 1
    },
    "p_density": {
      "offset": 40,
      "size": 1
    },
    "p_edge": {
      "offset": 41,
      "size": 1
    },
    "p_edgeFade": {
      "offset": 42,
      "size": 1
    },
    "p_envRadius": {
      "offset": 43,
      "size": 1
    },
    "p_exposure": {
      "offset": 44,
      "size": 1
    },
    "p_falloff": {
      "offset": 45,
      "size": 1
    },
    "p_fill": {
      "offset": 46,
      "size": 1
    },
    "p_focal": {
      "offset": 47,
      "size": 1
    },
    "p_hueReach": {
      "offset": 48,
      "size": 1
    },
    "p_pulse": {
      "offset": 49,
      "size": 1
    },
    "p_ragged": {
      "offset": 50,
      "size": 1
    },
    "p_rim": {
      "offset": 51,
      "size": 1
    },
    "p_saturation": {
      "offset": 52,
      "size": 1
    },
    "p_spin": {
      "offset": 53,
      "size": 1
    },
    "p_starDensity": {
      "offset": 54,
      "size": 1
    },
    "p_starScale": {
      "offset": 55,
      "size": 1
    },
    "p_stars": {
      "offset": 56,
      "size": 1
    },
    "p_thick": {
      "offset": 57,
      "size": 1
    },
    "p_threshold": {
      "offset": 58,
      "size": 1
    },
    "p_tilt": {
      "offset": 59,
      "size": 1
    },
    "p_turbScale": {
      "offset": 60,
      "size": 1
    },
    "p_twinkle": {
      "offset": 61,
      "size": 1
    },
    "p_wind": {
      "offset": 62,
      "size": 1
    },
    "res": {
      "offset": 64,
      "size": 2
    },
    "time": {
      "offset": 66,
      "size": 1
    }
  },
  "params": [
    {
      "key": "spin",
      "label": "Disc turn",
      "default": 0.06,
      "min": 0,
      "max": 3,
      "step": 0.01,
      "integrate": true
    },
    {
      "key": "churn",
      "label": "Gas churn",
      "default": 0.25,
      "min": 0,
      "max": 5,
      "step": 0.02,
      "integrate": true
    },
    {
      "key": "beat",
      "label": "Core beat",
      "default": 0.8,
      "min": 0,
      "max": 12,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "twinkle",
      "label": "Twinkle rate",
      "default": 1.2,
      "min": 0,
      "max": 12,
      "step": 0.05,
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
      "key": "tilt",
      "label": "Tilt (0 edge-on)",
      "default": 0.85,
      "min": 0,
      "max": 1.5,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "arms",
      "label": "Arm count",
      "default": 2,
      "min": 1,
      "max": 6,
      "step": 1,
      "integrate": false
    },
    {
      "key": "wind",
      "label": "Arm winding",
      "default": 3.4,
      "min": 0,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "ragged",
      "label": "Arm fray",
      "default": 3,
      "min": 0,
      "max": 12,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "armSharp",
      "label": "Arm sharpness",
      "default": 2.2,
      "min": 0.3,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "falloff",
      "label": "Disc falloff",
      "default": 1.7,
      "min": 0.3,
      "max": 12,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "thick",
      "label": "Disc thickness",
      "default": 0.035,
      "min": 0.01,
      "max": 1,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "bulge",
      "label": "Core tightness",
      "default": 40,
      "min": 2,
      "max": 200,
      "step": 1,
      "integrate": false
    },
    {
      "key": "core",
      "label": "Core density",
      "default": 5,
      "min": 0,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "turbScale",
      "label": "Turbulence scale",
      "default": 9,
      "min": 0.5,
      "max": 30,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "threshold",
      "label": "Clumping",
      "default": 0.35,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "density",
      "label": "Gas density",
      "default": 14,
      "min": 0.1,
      "max": 40,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "absorb",
      "label": "Dust absorption",
      "default": 3.5,
      "min": 0,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "stars",
      "label": "Stars",
      "default": 1.2,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "starDensity",
      "label": "Star density",
      "default": 0.5,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "starScale",
      "label": "Star scale",
      "default": 48,
      "min": 5,
      "max": 200,
      "step": 1,
      "integrate": false
    },
    {
      "key": "hueReach",
      "label": "Hue reach",
      "default": 0.6,
      "min": 0.15,
      "max": 1.5,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "pulse",
      "label": "Beat depth",
      "default": 0.2,
      "min": 0,
      "max": 3,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "breathe",
      "label": "Disc breathing",
      "default": 0,
      "min": 0,
      "max": 2,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 1.1,
      "min": 0.05,
      "max": 50,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1.15,
      "min": 0.15,
      "max": 6,
      "step": 0.05,
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
      "key": "fill",
      "label": "Night fill",
      "default": 0.85,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "rim",
      "label": "Rim light",
      "default": 0.35,
      "min": 0,
      "max": 3,
      "step": 0.015,
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
    },
    {
      "key": "core",
      "label": "Core",
      "default": "#fff3d6"
    },
    {
      "key": "inner",
      "label": "Inner arms",
      "default": "#7fb4ff"
    },
    {
      "key": "outer",
      "label": "Outer arms",
      "default": "#c46bff"
    },
    {
      "key": "deep",
      "label": "Night",
      "default": "#04050f"
    },
    {
      "key": "rim",
      "label": "Rim",
      "default": "#8fb0ff"
    }
  ],
  "statePresets": {
    "idle": {
      "absorb": 3.5,
      "armSharp": 2.2,
      "beat": 0.8,
      "breathe": 0,
      "churn": 0.25,
      "contrast": 1.15,
      "core": 5,
      "density": 14,
      "exposure": 1.1,
      "pulse": 0.2,
      "ragged": 3,
      "saturation": 1.35,
      "spin": 0.06,
      "stars": 1.2,
      "thick": 0.035,
      "threshold": 0.35,
      "tilt": 0.85,
      "twinkle": 1.2
    },
    "speaking": {
      "absorb": 1.6,
      "armSharp": 1.8,
      "beat": 4.8,
      "breathe": 0.45,
      "churn": 0.6,
      "contrast": 1.05,
      "core": 12,
      "density": 18,
      "exposure": 0.75,
      "pulse": 1,
      "ragged": 2,
      "saturation": 1.6,
      "spin": 0.2,
      "stars": 2,
      "thick": 0.04,
      "threshold": 0.25,
      "tilt": 1.3,
      "twinkle": 2.4
    },
    "thinking": {
      "absorb": 6,
      "armSharp": 1,
      "beat": 2.4,
      "breathe": 0,
      "churn": 1.6,
      "contrast": 1.3,
      "core": 3,
      "density": 20,
      "exposure": 1.05,
      "pulse": 0.25,
      "ragged": 8,
      "saturation": 1.2,
      "spin": 0.45,
      "stars": 1.8,
      "thick": 0.07,
      "threshold": 0.5,
      "tilt": 1.45,
      "twinkle": 4.5
    }
  },
  "stateColors": {
    "idle": {
      "core": "#fff3d6",
      "deep": "#04050f",
      "inner": "#7fb4ff",
      "outer": "#c46bff",
      "rim": "#8fb0ff",
      "tint": "#ffffff"
    },
    "speaking": {
      "core": "#fff4c8",
      "deep": "#0a0508",
      "inner": "#ffa63c",
      "outer": "#ff3f8e",
      "rim": "#ffb98a",
      "tint": "#ffffff"
    },
    "thinking": {
      "core": "#e6f0ff",
      "deep": "#030614",
      "inner": "#6fb0ff",
      "outer": "#4fe3ff",
      "rim": "#7fa8ff",
      "tint": "#ffffff"
    }
  },
  "wgsl": "struct orb32Params {\n  anim: f32,\n  c_core: vec3f,\n  c_deep: vec3f,\n  c_inner: vec3f,\n  c_outer: vec3f,\n  c_rim: vec3f,\n  c_tint: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_absorb: f32,\n  p_alphaGain: f32,\n  p_armSharp: f32,\n  p_arms: f32,\n  p_beat: f32,\n  p_breathe: f32,\n  p_bulge: f32,\n  p_camDist: f32,\n  p_churn: f32,\n  p_contrast: f32,\n  p_core: f32,\n  p_density: f32,\n  p_edge: f32,\n  p_edgeFade: f32,\n  p_envRadius: f32,\n  p_exposure: f32,\n  p_falloff: f32,\n  p_fill: f32,\n  p_focal: f32,\n  p_hueReach: f32,\n  p_pulse: f32,\n  p_ragged: f32,\n  p_rim: f32,\n  p_saturation: f32,\n  p_spin: f32,\n  p_starDensity: f32,\n  p_starScale: f32,\n  p_stars: f32,\n  p_thick: f32,\n  p_threshold: f32,\n  p_tilt: f32,\n  p_turbScale: f32,\n  p_twinkle: f32,\n  p_wind: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb32Params;\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn galaxy(p: vec3f, t: f32, galDensity: f32, galCore: f32, galFalloff: f32) -> vec3f {\n  let u = (&params);\n  let rho = length(p.xz);\n  let h = p.y;\n  let phi = select(0f, atan2(p.z, p.x), (rho > 1e-4f));\n  let lr = log(max(rho, 0.02f));\n  let armPhase = ((phi * (*u).p_arms) - ((*u).p_wind * lr));\n  var q = (p * (*u).p_turbScale);\n  var f = 1f;\n  for (var i = 0u; i < 4u; i += 1u) {\n    q = (q + (cos(((q.yzx * f) + t)) / f));\n    f *= 1.9f;\n  }\n  let n = (((((sin(q.x) + sin(q.y)) + sin(q.z)) / 3f) * 0.5f) + 0.5f);\n  let clump = smoothstep((*u).p_threshold, 1f, n);\n  var arm = (0.5f + (0.5f * cos((armPhase + ((n - 0.5f) * (*u).p_ragged)))));\n  arm = pow(arm, (*u).p_armSharp);\n  let scaleH = ((*u).p_thick * (0.12f + rho));\n  let disc = (exp((-(rho) * galFalloff)) * exp((-(abs(h)) / scaleH)));\n  let bulge = exp((-(dot(p, p)) * (*u).p_bulge));\n  let dens = (((disc * (0.08f + (1.6f * arm))) * (0.25f + (0.75f * clump))) + (bulge * galCore));\n  return vec3f((dens * galDensity), arm, rho);\n}\n\nfn galaxyRender(fragCoord: vec2f, galDensity: f32, galCore: f32, galFalloff: f32) -> vec4f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(uv, -((*u).p_focal)));\n  let t = (*u).p_churn;\n  let spin = (*u).p_spin;\n  let ct = cos((*u).p_tilt);\n  let st = sin((*u).p_tilt);\n  let cs = cos(spin);\n  let sn = sin(spin);\n  var acc = vec3f();\n  var trans = vec3f(1);\n  let absorb = (vec3f(0.699999988079071, 1, 1.5) * (*u).p_absorb);\n  var z = max(((*u).p_camDist - ((*u).p_envRadius * 1.05f)), 0f);\n  let zEnd = ((*u).p_camDist + ((*u).p_envRadius * 1.05f));\n  let dt = ((zEnd - z) / 56f);\n  z += (dt * hash((fragCoord * 0.37f)));\n  for (var i = 0u; i < 56u; i += 1u) {\n    let p = (ro + (rd * z));\n    let env = (1f - smoothstep(((*u).p_envRadius * 0.92f), (*u).p_envRadius, length(p)));\n    if ((env > 1e-3f)) {\n      var g = vec3f(p.x, ((p.y * ct) - (p.z * st)), ((p.y * st) + (p.z * ct)));\n      g = vec3f(((g.x * cs) - (g.z * sn)), g.y, ((g.x * sn) + (g.z * cs)));\n      let gs = galaxy((g / (*u).p_envRadius), t, galDensity, galCore, galFalloff);\n      let arm = gs.y;\n      let rho = gs.z;\n      let dens = (gs.x * env);\n      let ramp = mix((*u).c_inner, (*u).c_outer, smoothstep(0.12f, (*u).p_hueReach, rho));\n      let coreW = exp((((-(rho) * rho) * (*u).p_bulge) * 0.6f));\n      let emit = (mix(ramp, (*u).c_core, coreW) * (0.6f + (0.6f * arm)));\n      acc = (acc + ((trans * (dens * dt)) * emit));\n      trans = (trans * exp((absorb * (-(dens) * dt))));\n    }\n    z += dt;\n    if (((trans.y < 4e-3f) || (z > zEnd))) {\n      break;\n    }\n  }\n  return vec4f(acc, (1f - trans.y));\n}\n\nfn starField(p: vec2f, density: f32, size: f32, twinkleT: f32) -> f32 {\n  let id = floor(p);\n  let f = fract(p);\n  var acc = 0f;\n  for (var i = 0u; i < 3u; i += 1u) {\n    for (var i_1 = 0u; i_1 < 3u; i_1 += 1u) {\n      let o = vec2f((f32(i_1) - 1f), (f32(i) - 1f));\n      let cid = (id + o);\n      let h = hash(cid);\n      if ((h <= density)) {\n        let sp = (o + vec2f(hash((cid + 1.3f)), hash((cid + 2.7f))));\n        let dd = length((f - sp));\n        let tw = (0.55f + (0.45f * sin(((twinkleT * (1.5f + (5f * hash((cid + 5.1f))))) + (h * 40f)))));\n        let sz = (size * (0.5f + ((1.2f * hash((cid + 8.9f))) * hash((cid + 8.9f)))));\n        acc += ((tw * exp(((-(dd) * dd) / (sz * sz)))) * (0.4f + ((0.6f * h) / max(density, 1e-3f))));\n      }\n    }\n  }\n  return acc;\n}\n\nfn luma(col: vec3f) -> f32 {\n  return dot(col, vec3f(0.29899999499320984, 0.5870000123977661, 0.11400000005960464));\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb32Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb32Fragment(_arg_0: orb32Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let wave = (0.5f + (0.5f * cos((*u).p_beat)));\n  let galDensity = ((*u).p_density * (1f + (0.35f * (*u).inputVol)));\n  let galCore = (((*u).p_core * (1f + (0.7f * (*u).outputVol))) * (1f + ((*u).p_pulse * wave)));\n  let galFalloff = ((*u).p_falloff / (1f + ((*u).p_breathe * wave)));\n  var acc = galaxyRender(fragCoord, galDensity, galCore, galFalloff);\n  let ro = vec3f(0f, 0f, (*u).p_camDist);\n  let rd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let ct = cos((*u).p_tilt);\n  let st = sin((*u).p_tilt);\n  let N = vec3f(0f, ct, st);\n  let denom = dot(N, rd);\n  if ((abs(denom) > 1e-4f)) {\n    let th = (-(dot(N, ro)) / denom);\n    let q = (ro + (rd * th));\n    if (((th > 0f) && (dot(q, q) < (((*u).p_envRadius * (*u).p_envRadius) * 0.9f)))) {\n      let g = (vec3f(q.x, ((q.y * ct) - (q.z * st)), ((q.y * st) + (q.z * ct))) / (*u).p_envRadius);\n      let cs = cos((*u).p_spin);\n      let sn = sin((*u).p_spin);\n      let gp = vec2f(((g.x * cs) - (g.z * sn)), ((g.x * sn) + (g.z * cs)));\n      let rho = length(gp);\n      let phi = select(0f, atan2(gp.y, gp.x), (rho > 1e-4f));\n      let armW = (0.5f + (0.5f * cos(((phi * (*u).p_arms) - ((*u).p_wind * log(max(rho, 0.02f)))))));\n      let sf = starField((gp * (*u).p_starScale), ((*u).p_starDensity * (0.3f + (0.7f * armW))), 0.12f, (*u).p_twinkle);\n      let veil = (1f - acc.w);\n      let starLight = (vec3f(1, 0.9700000286102295, 0.8999999761581421) * (((sf * (*u).p_stars) * exp((-(rho) * 1.5f))) * (0.25f + (0.75f * veil))));\n      acc = vec4f((acc.xyz + starLight), acc.w);\n    }\n  }\n  var col = tanh((acc.xyz / max((*u).p_exposure, 0.01f)));\n  col = pow(clamp(col, vec3f(), vec3f(1)), vec3f((*u).p_contrast));\n  let lum = luma(col);\n  col = mix(vec3f(lum), col, (*u).p_saturation);\n  col = (col * (*u).c_tint);\n  let peak = max(col.x, max(col.y, col.z));\n  var a = clamp((peak * (*u).p_alphaGain), 0f, 1f);\n  col = (col + ((*u).c_deep * (*u).p_fill));\n  a = max(a, (*u).p_fill);\n  let mrd = normalize(vec3f(orbUv, -((*u).p_focal)));\n  let closest = length(cross(vec3f(0f, 0f, (*u).p_camDist), mrd));\n  let band = mix(0.35f, 0.012f, clamp((*u).p_edge, 0f, 1f));\n  let mask = (1f - smoothstep(((*u).p_envRadius * (1f - band)), ((*u).p_envRadius * 1.005f), closest));\n  col = (col * mask);\n  a *= mask;\n  let fres = smoothstep(((*u).p_envRadius * 0.7f), (*u).p_envRadius, closest);\n  col = (col + ((*u).c_rim * ((((*u).p_rim * fres) * fres) * mask)));\n  let r2d = length(orbUv);\n  let fade = edgeFade((*u).p_edgeFade, r2d);\n  col = (col * fade);\n  a *= fade;\n  return vec4f(col, a);\n}"
};
