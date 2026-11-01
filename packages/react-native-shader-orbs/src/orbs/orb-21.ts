import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb21: OrbDefinition = {
  "slug": "orb-21",
  "title": "ORB-21",
  "note": "light diffusing through a cloud",
  "entryPoint": "orb21Fragment",
  "uniformSize": 144,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_light": {
      "offset": 4,
      "size": 3
    },
    "c_shadow": {
      "offset": 8,
      "size": 3
    },
    "inputVol": {
      "offset": 11,
      "size": 1
    },
    "outputVol": {
      "offset": 12,
      "size": 1
    },
    "p_absorb": {
      "offset": 13,
      "size": 1
    },
    "p_alphaGain": {
      "offset": 14,
      "size": 1
    },
    "p_ambient": {
      "offset": 15,
      "size": 1
    },
    "p_aniso": {
      "offset": 16,
      "size": 1
    },
    "p_camDist": {
      "offset": 17,
      "size": 1
    },
    "p_churn": {
      "offset": 18,
      "size": 1
    },
    "p_density": {
      "offset": 19,
      "size": 1
    },
    "p_edgeSoft": {
      "offset": 20,
      "size": 1
    },
    "p_exposure": {
      "offset": 21,
      "size": 1
    },
    "p_focal": {
      "offset": 22,
      "size": 1
    },
    "p_lightSpin": {
      "offset": 23,
      "size": 1
    },
    "p_power": {
      "offset": 24,
      "size": 1
    },
    "p_radius": {
      "offset": 25,
      "size": 1
    },
    "p_scale": {
      "offset": 26,
      "size": 1
    },
    "p_shadowAbsorb": {
      "offset": 27,
      "size": 1
    },
    "p_shadowLift": {
      "offset": 28,
      "size": 1
    },
    "p_speed": {
      "offset": 29,
      "size": 1
    },
    "p_threshold": {
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
      "default": 10,
      "min": 0.015,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "camDist",
      "label": "Camera distance",
      "default": 4.4,
      "min": 0.5,
      "max": 40,
      "step": 0.2,
      "integrate": false
    },
    {
      "key": "focal",
      "label": "Lens",
      "default": 1.8,
      "min": 0.3,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "radius",
      "label": "Cloud radius",
      "default": 2,
      "min": 0.15,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "scale",
      "label": "Cloud scale",
      "default": 0.8,
      "min": 0.1,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "churn",
      "label": "Churn",
      "default": 0.3,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "threshold",
      "label": "Clumping",
      "default": 0.075,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "edgeSoft",
      "label": "Edge softness",
      "default": 0.8,
      "min": 0.1,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "density",
      "label": "Density",
      "default": 3.2,
      "min": 0.03,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "absorb",
      "label": "Absorption",
      "default": 1.4,
      "min": 0.03,
      "max": 15,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "shadowAbsorb",
      "label": "Shadow depth",
      "default": 2.4,
      "min": 0,
      "max": 20,
      "step": 0.1,
      "integrate": false
    },
    {
      "key": "shadowLift",
      "label": "Shadow lift",
      "default": 0.55,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "aniso",
      "label": "Forward scatter",
      "default": 0.45,
      "min": -0.9,
      "max": 0.9,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "lightSpin",
      "label": "Light orbit",
      "default": 0.12,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "power",
      "label": "Light power",
      "default": 1.9,
      "min": 0.03,
      "max": 40,
      "step": 0.2,
      "integrate": false
    },
    {
      "key": "ambient",
      "label": "Ambient",
      "default": 0.12,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "exposure",
      "label": "Exposure",
      "default": 1,
      "min": 0.03,
      "max": 10,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "alphaGain",
      "label": "Alpha gain",
      "default": 1.5,
      "min": 0.05,
      "max": 10,
      "step": 0.05,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "light",
      "label": "Light",
      "default": "#ffd7a3"
    },
    {
      "key": "shadow",
      "label": "Shadow",
      "default": "#3a4a8c"
    }
  ],
  "statePresets": {
    "idle": {
      "ambient": 0.12,
      "power": 1.9,
      "shadowLift": 0.55
    },
    "speaking": {
      "ambient": 0.46,
      "power": 3.1,
      "shadowLift": 0.95
    },
    "thinking": {
      "ambient": 0.22,
      "power": 2.15,
      "shadowLift": 0.65
    }
  },
  "stateColors": {
    "idle": {
      "light": "#ffd7a3",
      "shadow": "#3a4a8c"
    },
    "speaking": {
      "light": "#ffb066",
      "shadow": "#7a2f6e"
    },
    "thinking": {
      "light": "#e6d4ff",
      "shadow": "#3b3f96"
    }
  },
  "wgsl": "struct orb21Params {\n  anim: f32,\n  c_light: vec3f,\n  c_shadow: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_absorb: f32,\n  p_alphaGain: f32,\n  p_ambient: f32,\n  p_aniso: f32,\n  p_camDist: f32,\n  p_churn: f32,\n  p_density: f32,\n  p_edgeSoft: f32,\n  p_exposure: f32,\n  p_focal: f32,\n  p_lightSpin: f32,\n  p_power: f32,\n  p_radius: f32,\n  p_scale: f32,\n  p_shadowAbsorb: f32,\n  p_shadowLift: f32,\n  p_speed: f32,\n  p_threshold: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb21Params;\n\nfn phaseHG(c: f32, g: f32) -> f32 {\n  let g2 = (g * g);\n  return ((1f - g2) / pow(max(((1f + g2) - ((2f * g) * c)), 1e-4f), 1.5f));\n}\n\nfn density(p: vec3f, animTime: f32, nimbusDensity: f32) -> f32 {\n  let u = (&params);\n  let shell = (1f - (length(p) / (*u).p_radius));\n  if ((shell <= 0f)) {\n    return 0f;\n  }\n  var q = (p * (*u).p_scale);\n  var f = 1f;\n  for (var i = 0u; i < 4u; i += 1u) {\n    q = (q + (cos(((vec3f(q.y, q.z, q.x) * f) + (animTime * (*u).p_churn))) / f));\n    f *= 1.8f;\n  }\n  let n = (((((sin(q.x) + sin(q.y)) + sin(q.z)) / 3f) * 0.5f) + 0.5f);\n  let clump = smoothstep((*u).p_threshold, 1f, n);\n  return ((clump * pow(shell, (*u).p_edgeSoft)) * nimbusDensity);\n}\n\nfn nimbusRender(fragCoord: vec2f, nimbusPower: f32, nimbusDensity: f32) -> vec4f {\n  let u = (&params);\n  let animTime = (*u).p_speed;\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let ro = vec3f(0f, 0f, -((*u).p_camDist));\n  let rd = normalize(vec3f(uv, (*u).p_focal));\n  let L = normalize(vec3f((cos((animTime * (*u).p_lightSpin)) * 0.7f), 0.45f, ((sin((animTime * (*u).p_lightSpin)) * 0.35f) + 0.65f)));\n  let phase = phaseHG(dot(rd, L), (*u).p_aniso);\n  let toCentre = (*u).p_camDist;\n  let tStart = max((toCentre - (*u).p_radius), 0f);\n  let span = (2f * (*u).p_radius);\n  let dt = (span / 56f);\n  var T = 1f;\n  var scattered = vec3f();\n  for (var i = 0u; i < 56u; i += 1u) {\n    let t = (tStart + ((f32(i) + 0.5f) * dt));\n    let p = (ro + (rd * t));\n    let dn = density(p, animTime, nimbusDensity);\n    if ((dn > 1e-3f)) {\n      var shadow = 1f;\n      let lstep = ((*u).p_radius / 4f);\n      for (var i_1 = 0u; i_1 < 4u; i_1 += 1u) {\n        let fk = (f32(i_1) + 1f);\n        let lp = (p + (L * ((fk - 0.5f) * lstep)));\n        shadow *= exp(((-(density(lp, animTime, nimbusDensity)) * lstep) * (*u).p_shadowAbsorb));\n      }\n      let lit = mix(((*u).c_shadow * (*u).p_shadowLift), (*u).c_light, shadow);\n      scattered = (scattered + (lit * ((((T * dn) * dt) * phase) * nimbusPower)));\n      T *= exp(((-(dn) * dt) * (*u).p_absorb));\n      if ((T < 0.01f)) {\n        break;\n      }\n    }\n  }\n  let body = (1f - T);\n  scattered = (scattered + ((*u).c_shadow * (body * (*u).p_ambient)));\n  return vec4f(scattered, body);\n}\n\nstruct orb21Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb21Fragment(_arg_0: orb21Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let nimbusPower = ((*u).p_power * (0.7f + (0.9f * (*u).outputVol)));\n  let nimbusDensity = ((*u).p_density * (1f + (0.35f * (*u).inputVol)));\n  let acc = nimbusRender(fragCoord, nimbusPower, nimbusDensity);\n  let col = tanh((acc.xyz * (*u).p_exposure));\n  let a = clamp((acc.w * (*u).p_alphaGain), 0f, 1f);\n  return vec4f(col, a);\n}"
};
