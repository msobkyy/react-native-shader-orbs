import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb11: OrbDefinition = {
  "slug": "orb-11",
  "title": "ORB-11",
  "note": "quantum orbital, rainbow chroma",
  "entryPoint": "orb11Fragment",
  "uniformSize": 104,
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
    "p_baseVis": {
      "offset": 3,
      "size": 1
    },
    "p_chromaSpread": {
      "offset": 4,
      "size": 1
    },
    "p_flowAmp": {
      "offset": 5,
      "size": 1
    },
    "p_flowScale": {
      "offset": 6,
      "size": 1
    },
    "p_flowSpeed": {
      "offset": 7,
      "size": 1
    },
    "p_glow": {
      "offset": 8,
      "size": 1
    },
    "p_metalDark": {
      "offset": 9,
      "size": 1
    },
    "p_posScale": {
      "offset": 10,
      "size": 1
    },
    "p_precess": {
      "offset": 11,
      "size": 1
    },
    "p_probGain": {
      "offset": 12,
      "size": 1
    },
    "p_probPow": {
      "offset": 13,
      "size": 1
    },
    "p_radialDecay": {
      "offset": 14,
      "size": 1
    },
    "p_radialPow": {
      "offset": 15,
      "size": 1
    },
    "p_radius": {
      "offset": 16,
      "size": 1
    },
    "p_rotSpeed": {
      "offset": 17,
      "size": 1
    },
    "p_speed": {
      "offset": 18,
      "size": 1
    },
    "p_swell": {
      "offset": 19,
      "size": 1
    },
    "p_waveFreq": {
      "offset": 20,
      "size": 1
    },
    "res": {
      "offset": 22,
      "size": 2
    },
    "time": {
      "offset": 24,
      "size": 1
    }
  },
  "params": [
    {
      "key": "speed",
      "label": "Anim speed",
      "default": 0.9,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "rotSpeed",
      "label": "Rotation speed",
      "default": 0.5,
      "min": 0,
      "max": 5,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "radius",
      "label": "Radius",
      "default": 0.9,
      "min": 0.15,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "swell",
      "label": "Input swell",
      "default": 0.07,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "posScale",
      "label": "Orbital zoom",
      "default": 0.5,
      "min": 0.15,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "flowSpeed",
      "label": "Flow speed",
      "default": 0.35,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "flowAmp",
      "label": "Flow amount",
      "default": 0.45,
      "min": 0,
      "max": 4,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "flowScale",
      "label": "Flow scale",
      "default": 0.3,
      "min": 0.3,
      "max": 10,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "precess",
      "label": "Precession",
      "default": 0.3,
      "min": 0,
      "max": 4,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "radialPow",
      "label": "Radial power",
      "default": 0.5,
      "min": 0.5,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "radialDecay",
      "label": "Radial decay",
      "default": 1,
      "min": 0.3,
      "max": 30,
      "step": 0.15,
      "integrate": false
    },
    {
      "key": "probPow",
      "label": "Probability curve",
      "default": 0.4,
      "min": 0.1,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "probGain",
      "label": "Probability gain",
      "default": 3,
      "min": 0.15,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "waveFreq",
      "label": "Wave frequency",
      "default": 4,
      "min": 0,
      "max": 20,
      "step": 0.5,
      "integrate": false
    },
    {
      "key": "chromaSpread",
      "label": "Chroma spread",
      "default": 0.18,
      "min": 0,
      "max": 1.5,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "glow",
      "label": "Glow",
      "default": 0.9,
      "min": 0,
      "max": 5,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "metalDark",
      "label": "Metal darkness",
      "default": 0,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "baseVis",
      "label": "Base visibility",
      "default": 0.12,
      "min": 0,
      "max": 1.5,
      "step": 0.01,
      "integrate": false
    }
  ],
  "colors": [],
  "statePresets": {
    "idle": {
      "baseVis": 0.12,
      "chromaSpread": 0.18,
      "flowAmp": 0.45,
      "flowScale": 0.3,
      "flowSpeed": 0.35,
      "glow": 0.9,
      "metalDark": 0,
      "posScale": 0.5,
      "precess": 0.3,
      "probGain": 3,
      "probPow": 0.4,
      "radialDecay": 1,
      "radialPow": 0.5,
      "radius": 0.9,
      "rotSpeed": 0.5,
      "speed": 0.9,
      "swell": 0.07,
      "waveFreq": 4
    },
    "speaking": {
      "baseVis": 0.12,
      "chromaSpread": 0.12,
      "flowAmp": 0.8,
      "flowScale": 2.2,
      "flowSpeed": 2.75,
      "glow": 0.9,
      "metalDark": 0,
      "posScale": 1,
      "precess": 1.3,
      "probGain": 4.3,
      "probPow": 0.31,
      "radialDecay": 1,
      "radialPow": 0.5,
      "radius": 0.9,
      "rotSpeed": 0.5,
      "speed": 2.45,
      "swell": 0.07,
      "waveFreq": 4
    },
    "thinking": {
      "baseVis": 0.12,
      "chromaSpread": 0.41,
      "flowAmp": 1.1,
      "flowScale": 0.3,
      "flowSpeed": 0.35,
      "glow": 0.9,
      "metalDark": 0,
      "posScale": 0.65,
      "precess": 0,
      "probGain": 3,
      "probPow": 0.4,
      "radialDecay": 1.9,
      "radialPow": 0.5,
      "radius": 0.9,
      "rotSpeed": 0.5,
      "speed": 0.9,
      "swell": 0.07,
      "waveFreq": 4
    }
  },
  "wgsl": "struct orb11Params {\n  anim: f32,\n  inputVol: f32,\n  outputVol: f32,\n  p_baseVis: f32,\n  p_chromaSpread: f32,\n  p_flowAmp: f32,\n  p_flowScale: f32,\n  p_flowSpeed: f32,\n  p_glow: f32,\n  p_metalDark: f32,\n  p_posScale: f32,\n  p_precess: f32,\n  p_probGain: f32,\n  p_probPow: f32,\n  p_radialDecay: f32,\n  p_radialPow: f32,\n  p_radius: f32,\n  p_rotSpeed: f32,\n  p_speed: f32,\n  p_swell: f32,\n  p_waveFreq: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb11Params;\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn noise(p: vec2f) -> f32 {\n  let i = floor(p);\n  let f = fract(p);\n  let ff = ((f * f) * (vec2f(3) - (f * 2f)));\n  return mix(mix(hash(i), hash((i + vec2f(1, 0))), ff.x), mix(hash((i + vec2f(0, 1))), hash((i + vec2f(1))), ff.x), ff.y);\n}\n\nfn fbm(pIn: vec2f) -> f32 {\n  var p = pIn;\n  var v = 0f;\n  var a = 0.5f;\n  for (var i = 0u; i < 5u; i += 1u) {\n    v += (a * noise(p));\n    p = ((p * 2.03f) + vec2f(11.699999809265137, 7.300000190734863));\n    a *= 0.5f;\n  }\n  return v;\n}\n\nstruct orb11Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb11Fragment(_arg_0: orb11Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let r2d = length(uv);\n  let R = ((*u).p_radius + ((*u).p_swell * (*u).inputVol));\n  let mask = smoothstep(0.012f, -0.012f, (r2d - R));\n  let nr = clamp((r2d / max(R, 1e-3f)), 0f, 1f);\n  let z = sqrt(max((1f - (nr * nr)), 0f));\n  let posScale = ((*u).p_posScale * ((0.8f + (0.45f * (*u).outputVol)) + (0.2f * (*u).inputVol)));\n  let radialPow = ((*u).p_radialPow * (0.7f + (0.8f * (*u).outputVol)));\n  let radialDecay = ((*u).p_radialDecay * (1.25f - (0.5f * (*u).outputVol)));\n  let probPow = ((*u).p_probPow * (1.3f - (0.55f * (*u).outputVol)));\n  let probGain = ((*u).p_probGain * ((0.7f + (0.6f * (*u).outputVol)) + (0.5f * (*u).inputVol)));\n  let waveFreq = ((*u).p_waveFreq * (0.6f + (1f * (*u).outputVol)));\n  let chromaSpread = ((*u).p_chromaSpread * ((0.6f + (0.9f * (*u).outputVol)) + (0.5f * (*u).inputVol)));\n  let animTime = (*u).p_speed;\n  let cosT = cos((animTime * (*u).p_rotSpeed));\n  let sinT = sin((animTime * (*u).p_rotSpeed));\n  let nxy = (uv / max(R, 1e-3f));\n  let sp = (vec3f(nxy, z) * posScale);\n  var pos = vec3f(((sp.x * cosT) - (sp.z * sinT)), sp.y, ((sp.x * sinT) + (sp.z * cosT)));\n  let tilt = (sin(((animTime * 0.21f) + 1.7f)) * (*u).p_precess);\n  let cx = cos(tilt);\n  let sx = sin(tilt);\n  pos = vec3f(pos.x, ((pos.y * cx) - (pos.z * sx)), ((pos.y * sx) + (pos.z * cx)));\n  let flowT = (*u).p_flowSpeed;\n  let fAmp = ((*u).p_flowAmp * ((0.7f + (0.6f * (*u).outputVol)) + (0.4f * (*u).inputVol)));\n  let w = vec3f(fbm(((pos.yz * (*u).p_flowScale) + vec2f((flowT * 0.7f), (-(flowT) * 0.4f)))), fbm(((pos.zx * (*u).p_flowScale) + (vec2f((-(flowT) * 0.55f), (flowT * 0.62f)) + 3.7f))), fbm(((pos.xy * (*u).p_flowScale) + (vec2f((flowT * 0.5f), (flowT * 0.85f)) + 7.1f))));\n  pos = (pos + ((w - 0.5f) * fAmp));\n  let r = (length(pos) + 1e-3f);\n  let theta = acos(clamp((pos.y / r), -1f, 1f));\n  let phi = atan2(pos.z, pos.x);\n  const a0 = 0.5f;\n  let rho = ((2f * r) / (5f * a0));\n  let radial = (pow(rho, radialPow) * exp((-(rho) / radialDecay)));\n  let angular = (pow(sin(theta), 3f) * cos((phi + (animTime * 0.2f))));\n  let psi = (radial * angular);\n  var probability = (psi * psi);\n  let waveN = max(1f, floor((waveFreq + 0.5f)));\n  let wavePhase = (((phi * waveN) + (theta * 2.5f)) - (animTime * 2f));\n  probability *= (0.85f + (0.15f * sin(wavePhase)));\n  let patches = fbm(((pos.xy * 1.6f) + vec2f((flowT * 0.4f), (-(flowT) * 0.3f))));\n  probability *= (0.65f + (0.7f * patches));\n  probability = (pow(probability, probPow) * probGain);\n  probability = clamp(probability, 0f, 1f);\n  let fresnel = pow((1f - z), 1.5f);\n  let chromaOffset = ((((phi * 2f) + (theta * 1.5f)) + (animTime * 0.3f)) + (probability * 3f));\n  let rainbowRaw = vec3f(((sin(chromaOffset) * 0.5f) + 0.5f), ((sin((chromaOffset + chromaSpread)) * 0.5f) + 0.5f), ((sin((chromaOffset + (chromaSpread * 2f))) * 0.5f) + 0.5f));\n  let rainbow = (normalize((rainbowRaw + 0.01f)) * length(rainbowRaw));\n  let bandFreq = ((chromaOffset * 3f) + (fresnel * 2.4f));\n  let chromaticBands = vec3f(((sin(bandFreq) * 0.5f) + 0.5f), ((sin((bandFreq + 2.094f)) * 0.5f) + 0.5f), ((sin((bandFreq + 4.189f)) * 0.5f) + 0.5f));\n  var glowColor = mix(rainbow, chromaticBands, 0.12f);\n  glowColor = pow(glowColor, vec3f(0.800000011920929));\n  let darkMetal = vec3f((*u).p_metalDark);\n  let lightMetal = mix(vec3f(0.8999999761581421, 0.9200000166893005, 0.949999988079071), glowColor, 0.7f);\n  let metalGradient = smoothstep(0f, 1f, ((probability * 0.7f) + (fresnel * 0.3f)));\n  let metalColor = mix(darkMetal, lightMetal, metalGradient);\n  let orbGlow = ((*u).p_glow + (0.6f * (*u).outputVol));\n  let totalGlow = (((0.25f + (fresnel * 0.6f)) + (probability * 0.8f)) * orbGlow);\n  let glowAmount = clamp(pow(totalGlow, 0.7f), 0f, 1f);\n  var surfaceColor = mix(metalColor, glowColor, glowAmount);\n  let normal = vec3f(nxy, z);\n  let specular = pow(max(dot(normal, vec3f(0.40824830532073975, 0.40824830532073975, 0.8164966106414795)), 0f), 32f);\n  surfaceColor = (surfaceColor + (mix(vec3f(1), glowColor, 0.6f) * (specular * 0.4f)));\n  let visibility = clamp(((((probability * 1.2f) + (fresnel * 0.3f)) + (*u).p_baseVis) + ((*u).inputVol * 0.15f)), 0f, 1f);\n  let alpha = (mask * visibility);\n  return vec4f((surfaceColor * alpha), alpha);\n}"
};
