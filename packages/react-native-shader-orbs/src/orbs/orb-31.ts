import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb31: OrbDefinition = {
  "slug": "orb-31",
  "title": "ORB-31",
  "note": "raymarched shell, volumetric godrays",
  "entryPoint": "orb31Fragment",
  "uniformSize": 112,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "inputVol": {
      "offset": 1,
      "size": 1
    },
    "outputVol": {
      "offset": 2,
      "size": 1
    },
    "p_alphaGain": {
      "offset": 3,
      "size": 1
    },
    "p_ambient": {
      "offset": 4,
      "size": 1
    },
    "p_camDist": {
      "offset": 5,
      "size": 1
    },
    "p_edgeFade": {
      "offset": 6,
      "size": 1
    },
    "p_fov": {
      "offset": 7,
      "size": 1
    },
    "p_freqSwing": {
      "offset": 8,
      "size": 1
    },
    "p_maxDist": {
      "offset": 9,
      "size": 1
    },
    "p_radius": {
      "offset": 10,
      "size": 1
    },
    "p_rayFalloff": {
      "offset": 11,
      "size": 1
    },
    "p_rayGain": {
      "offset": 12,
      "size": 1
    },
    "p_smoothK": {
      "offset": 13,
      "size": 1
    },
    "p_smoothSwing": {
      "offset": 14,
      "size": 1
    },
    "p_speed": {
      "offset": 15,
      "size": 1
    },
    "p_stepScale": {
      "offset": 16,
      "size": 1
    },
    "p_surfaceLit": {
      "offset": 17,
      "size": 1
    },
    "p_sweepRate": {
      "offset": 18,
      "size": 1
    },
    "p_swell": {
      "offset": 19,
      "size": 1
    },
    "p_warp": {
      "offset": 20,
      "size": 1
    },
    "p_warpFreq": {
      "offset": 21,
      "size": 1
    },
    "p_warpSwing": {
      "offset": 22,
      "size": 1
    },
    "res": {
      "offset": 24,
      "size": 2
    },
    "time": {
      "offset": 26,
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
      "key": "sweepRate",
      "label": "Sweep rate",
      "default": 0.5,
      "min": 0,
      "max": 6,
      "step": 0.02,
      "integrate": true
    },
    {
      "key": "radius",
      "label": "Shell radius",
      "default": 2.6,
      "min": 0.4,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "swell",
      "label": "Input swell",
      "default": 0.18,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "warp",
      "label": "Warp divisor",
      "default": 0.9,
      "min": 0.3,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "warpFreq",
      "label": "Warp frequency",
      "default": 5.25,
      "min": 0.15,
      "max": 30,
      "step": 0.15,
      "integrate": false
    },
    {
      "key": "warpSwing",
      "label": "Warp swing",
      "default": 0,
      "min": 0,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "freqSwing",
      "label": "Frequency swing",
      "default": 0,
      "min": 0,
      "max": 15,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "smoothSwing",
      "label": "Softness swing",
      "default": 0,
      "min": 0,
      "max": 2,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "smoothK",
      "label": "Blend softness",
      "default": 0.42,
      "min": 0.015,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "rayGain",
      "label": "Godray gain",
      "default": 0.8,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "rayFalloff",
      "label": "Godray falloff",
      "default": 10.5,
      "min": 0.3,
      "max": 100,
      "step": 0.5,
      "integrate": false
    },
    {
      "key": "surfaceLit",
      "label": "Surface light",
      "default": 0.105,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "ambient",
      "label": "Ambient",
      "default": 0,
      "min": 0,
      "max": 1,
      "step": 0.005,
      "integrate": false
    },
    {
      "key": "alphaGain",
      "label": "Alpha gain",
      "default": 3,
      "min": 0.05,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "edgeFade",
      "label": "Halo falloff",
      "default": 0.45,
      "min": 0.1,
      "max": 0.985,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "camDist",
      "label": "Camera distance",
      "default": 12,
      "min": 1.5,
      "max": 100,
      "step": 0.5,
      "integrate": false
    },
    {
      "key": "fov",
      "label": "Lens",
      "default": 3.5,
      "min": 0.3,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "stepScale",
      "label": "Step safety",
      "default": 9,
      "min": 0.3,
      "max": 30,
      "step": 0.5,
      "integrate": false
    },
    {
      "key": "maxDist",
      "label": "Max distance",
      "default": 22,
      "min": 3,
      "max": 100,
      "step": 1,
      "integrate": false
    }
  ],
  "colors": [],
  "statePresets": {
    "idle": {
      "alphaGain": 3,
      "freqSwing": 0,
      "rayFalloff": 10.5,
      "rayGain": 0.8,
      "smoothK": 0.42,
      "smoothSwing": 0,
      "speed": 1,
      "swell": 0.18,
      "warp": 0.9,
      "warpFreq": 5.25,
      "warpSwing": 0
    },
    "speaking": {
      "alphaGain": 1.8,
      "freqSwing": 4.5,
      "rayFalloff": 8,
      "rayGain": 0.52,
      "smoothK": 0.25,
      "smoothSwing": 0.25,
      "speed": 0.9,
      "sweepRate": 0.8,
      "swell": 0.66,
      "warp": 3.75,
      "warpFreq": 19.5,
      "warpSwing": 2.25
    },
    "thinking": {
      "alphaGain": 1.8,
      "freqSwing": 2,
      "rayFalloff": 8,
      "rayGain": 0.52,
      "smoothK": 0.58,
      "smoothSwing": 0,
      "speed": 0.9,
      "sweepRate": 0.5,
      "swell": 0.66,
      "warp": 1,
      "warpFreq": 7,
      "warpSwing": 0
    }
  },
  "wgsl": "struct orb31Params {\n  anim: f32,\n  inputVol: f32,\n  outputVol: f32,\n  p_alphaGain: f32,\n  p_ambient: f32,\n  p_camDist: f32,\n  p_edgeFade: f32,\n  p_fov: f32,\n  p_freqSwing: f32,\n  p_maxDist: f32,\n  p_radius: f32,\n  p_rayFalloff: f32,\n  p_rayGain: f32,\n  p_smoothK: f32,\n  p_smoothSwing: f32,\n  p_speed: f32,\n  p_stepScale: f32,\n  p_surfaceLit: f32,\n  p_sweepRate: f32,\n  p_swell: f32,\n  p_warp: f32,\n  p_warpFreq: f32,\n  p_warpSwing: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb31Params;\n\nfn coronaRot(a: f32) -> mat3x3f {\n  return mat3x3f(cos(a), (sin((a / 2f)) * sin(a)), (sin(a) * cos((a / 2f))), 0f, cos((a / 2f)), -(sin((a / 2f))), -(sin(a)), (sin((a / 2f)) * cos(a)), (cos((a / 2f)) * cos(a)));\n}\n\nfn smin(a: f32, b: f32, k: f32) -> f32 {\n  let h = clamp((0.5f + ((0.5f * (b - a)) / k)), 0f, 1f);\n  return (mix(b, a, h) - ((k * h) * (1f - h)));\n}\n\nfn coronaSDF(p: vec3f, shellRadius: f32, warpAmount: f32, warpFreqNow: f32, smoothKNow: f32) -> f32 {\n  var p1 = p;\n  let w = (sin((p.xzy * warpFreqNow)) / max(warpAmount, 1e-3f));\n  p1 = vec3f((p1.x + w.z), (p1.y + w.y), (p1.z + w.x));\n  return -(smin((length(p1) - shellRadius), (shellRadius - length(p)), smoothKNow));\n}\n\nfn shellColor(p: vec3f, globalInvRot: mat3x3f, shellRadius: f32, warpAmount: f32, warpFreqNow: f32, smoothKNow: f32) -> vec3f {\n  const eps = 1e-3;\n  let normal = (globalInvRot * normalize(vec3f((coronaSDF((p + vec3f(eps, 0f, 0f)), shellRadius, warpAmount, warpFreqNow, smoothKNow) - coronaSDF((p - vec3f(eps, 0f, 0f)), shellRadius, warpAmount, warpFreqNow, smoothKNow)), (coronaSDF((p + vec3f(0f, eps, 0f)), shellRadius, warpAmount, warpFreqNow, smoothKNow) - coronaSDF((p - vec3f(0f, eps, 0f)), shellRadius, warpAmount, warpFreqNow, smoothKNow)), (coronaSDF((p + vec3f(0f, 0f, eps)), shellRadius, warpAmount, warpFreqNow, smoothKNow) - coronaSDF((p - vec3f(0f, 0f, eps)), shellRadius, warpAmount, warpFreqNow, smoothKNow)))));\n  var next = (vec3f(1) - ((normal * 0.5f) + 0.5f));\n  next = vec3f((dot(next, vec3f(1)) / 3f));\n  return (vec3f(1.024999976158142) - (next * next));\n}\n\nfn coronaRender(fragCoord: vec2f, globalRot: mat3x3f, globalInvRot: mat3x3f, shellRadius: f32, warpAmount: f32, warpFreqNow: f32, smoothKNow: f32, rayGain: f32) -> vec4f {\n  let u = (&params);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  var ro = vec3f(0f, 0f, -((*u).p_camDist));\n  var rd = normalize(vec3f(uv, (*u).p_fov));\n  ro = (globalRot * ro);\n  rd = (globalRot * rd);\n  var p = ro;\n  var dist = 1f;\n  var t = 0f;\n  var godrays = 0f;\n  for (var i = 0u; i < 256u; i += 1u) {\n    if (((dist <= 5e-3f) || (t >= (*u).p_maxDist))) {\n      break;\n    }\n    p = (ro + (rd * t));\n    dist = (coronaSDF(p, shellRadius, warpAmount, warpFreqNow, smoothKNow) / max((*u).p_stepScale, 0.5f));\n    let fog = select(1f, smoothstep(0f, 0.5f, coronaSDF((normalize(p) * shellRadius), shellRadius, warpAmount, warpFreqNow, smoothKNow)), (length(p) > shellRadius));\n    godrays += ((rayGain / (1f + (dot(p, p) * (*u).p_rayFalloff))) * fog);\n    t += dist;\n  }\n  var col = vec3f((*u).p_ambient);\n  if ((t < (*u).p_maxDist)) {\n    col = (shellColor(p, globalInvRot, shellRadius, warpAmount, warpFreqNow, smoothKNow) * (*u).p_surfaceLit);\n  }\n  col = (col + godrays);\n  return vec4f(col, 1f);\n}\n\nfn edgeFade(fadeStart: f32, radius: f32) -> f32 {\n  return (1f - smoothstep(min(fadeStart, 0.985f), 1f, radius));\n}\n\nstruct orb31Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb31Fragment(_arg_0: orb31Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let animTime = (*u).p_speed;\n  let globalRot = coronaRot(animTime);\n  let globalInvRot = transpose(coronaRot(animTime));\n  let sweepPhase = sin((*u).p_sweepRate);\n  let shellRadius = ((*u).p_radius + ((*u).p_swell * (*u).inputVol));\n  var warpAmount = (((*u).p_warp + ((*u).p_warpSwing * sweepPhase)) * ((1f - (0.25f * (*u).inputVol)) - (0.15f * (*u).outputVol)));\n  warpAmount = max(warpAmount, 0.05f);\n  let rayGain = ((*u).p_rayGain * ((0.7f + (0.8f * (*u).outputVol)) + (0.3f * (*u).inputVol)));\n  let warpFreqNow = max(((*u).p_warpFreq + ((*u).p_freqSwing * sweepPhase)), 0.05f);\n  let smoothKNow = max(((*u).p_smoothK + ((*u).p_smoothSwing * sweepPhase)), 5e-3f);\n  let acc = coronaRender(fragCoord, globalRot, globalInvRot, shellRadius, warpAmount, warpFreqNow, smoothKNow, rayGain);\n  var col = clamp(acc.xyz, vec3f(), vec3f(1));\n  let lum = dot(col, vec3f(0.2125999927520752, 0.7152000069618225, 0.0722000002861023));\n  var a = clamp((lum * (*u).p_alphaGain), 0f, 1f);\n  let fade = edgeFade((*u).p_edgeFade, length(orbUv));\n  col = (col * fade);\n  a *= fade;\n  return vec4f(col, a);\n}"
};
