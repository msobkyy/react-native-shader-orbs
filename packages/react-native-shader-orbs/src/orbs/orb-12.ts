import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb12: OrbDefinition = {
  "slug": "orb-12",
  "title": "ORB-12",
  "note": "a ball of glossy toy bricks, studs up — it rebuilds itself while it thinks",
  "entryPoint": "orb12Fragment",
  "uniformSize": 176,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_brickA": {
      "offset": 4,
      "size": 3
    },
    "c_brickB": {
      "offset": 8,
      "size": 3
    },
    "c_brickC": {
      "offset": 12,
      "size": 3
    },
    "c_brickD": {
      "offset": 16,
      "size": 3
    },
    "c_brickE": {
      "offset": 20,
      "size": 3
    },
    "inputVol": {
      "offset": 23,
      "size": 1
    },
    "outputVol": {
      "offset": 24,
      "size": 1
    },
    "p_contrast": {
      "offset": 25,
      "size": 1
    },
    "p_gain": {
      "offset": 26,
      "size": 1
    },
    "p_gap": {
      "offset": 27,
      "size": 1
    },
    "p_gloss": {
      "offset": 28,
      "size": 1
    },
    "p_light": {
      "offset": 29,
      "size": 1
    },
    "p_patch": {
      "offset": 30,
      "size": 1
    },
    "p_radius": {
      "offset": 31,
      "size": 1
    },
    "p_rebuild": {
      "offset": 32,
      "size": 1
    },
    "p_seam": {
      "offset": 33,
      "size": 1
    },
    "p_spin": {
      "offset": 34,
      "size": 1
    },
    "p_stud": {
      "offset": 35,
      "size": 1
    },
    "p_studs": {
      "offset": 36,
      "size": 1
    },
    "p_tilt": {
      "offset": 37,
      "size": 1
    },
    "res": {
      "offset": 38,
      "size": 2
    },
    "time": {
      "offset": 40,
      "size": 1
    }
  },
  "params": [
    {
      "key": "spin",
      "label": "Spin",
      "default": 0.25,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": true
    },
    {
      "key": "tilt",
      "label": "Tilt",
      "default": 0.55,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "rebuild",
      "label": "Rebuild rate",
      "default": 0.4,
      "min": 0,
      "max": 20,
      "step": 0.1,
      "integrate": true
    },
    {
      "key": "gap",
      "label": "Missing bricks",
      "default": 0.07,
      "min": 0,
      "max": 0.8,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "studs",
      "label": "Studs",
      "default": 18,
      "min": 8,
      "max": 48,
      "step": 1,
      "integrate": false
    },
    {
      "key": "radius",
      "label": "Radius",
      "default": 0.95,
      "min": 0.15,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "patch",
      "label": "Colour patches",
      "default": 0.35,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "stud",
      "label": "Stud relief",
      "default": 0.85,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "seam",
      "label": "Seams",
      "default": 0.6,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "gloss",
      "label": "Gloss",
      "default": 1,
      "min": 0,
      "max": 3,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "light",
      "label": "Key light",
      "default": 1,
      "min": 0,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "gain",
      "label": "Gain",
      "default": 1,
      "min": 0.05,
      "max": 5,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "default": 1,
      "min": 0.15,
      "max": 10,
      "step": 0.05,
      "integrate": false
    }
  ],
  "colors": [
    {
      "key": "brickA",
      "label": "Red",
      "default": "#c4281c"
    },
    {
      "key": "brickB",
      "label": "Yellow",
      "default": "#f2cd37"
    },
    {
      "key": "brickC",
      "label": "Blue",
      "default": "#1e5aa8"
    },
    {
      "key": "brickD",
      "label": "Green",
      "default": "#00852b"
    },
    {
      "key": "brickE",
      "label": "White",
      "default": "#f4f4f4"
    }
  ],
  "statePresets": {
    "idle": {
      "gain": 1,
      "gap": 0.07,
      "gloss": 1,
      "light": 1,
      "rebuild": 0.4,
      "spin": 0.25
    },
    "speaking": {
      "contrast": 0.95,
      "gain": 1.25,
      "gap": 0,
      "gloss": 2.4,
      "light": 1.35,
      "rebuild": 0.5,
      "seam": 0.3,
      "spin": 1.6,
      "stud": 0.6,
      "tilt": 0.42
    },
    "thinking": {
      "contrast": 1.05,
      "gain": 1.05,
      "gap": 0.55,
      "gloss": 0.55,
      "light": 1.15,
      "rebuild": 9,
      "seam": 0.95,
      "spin": 0.03,
      "stud": 1,
      "tilt": 0.9
    }
  },
  "stateColors": {
    "speaking": {
      "brickA": "#ff3b6b",
      "brickB": "#ffc93c",
      "brickC": "#21d4fd",
      "brickD": "#7af5a0",
      "brickE": "#ffffff"
    }
  },
  "wgsl": "struct orb12Params {\n  anim: f32,\n  c_brickA: vec3f,\n  c_brickB: vec3f,\n  c_brickC: vec3f,\n  c_brickD: vec3f,\n  c_brickE: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_contrast: f32,\n  p_gain: f32,\n  p_gap: f32,\n  p_gloss: f32,\n  p_light: f32,\n  p_patch: f32,\n  p_radius: f32,\n  p_rebuild: f32,\n  p_seam: f32,\n  p_spin: f32,\n  p_stud: f32,\n  p_studs: f32,\n  p_tilt: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb12Params;\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nstruct BrickHit {\n  bid: vec3f,\n  off: f32,\n  orient: f32,\n}\n\nfn lgBrick(cellIdx: vec3f) -> BrickHit {\n  let orient = (cellIdx.y - (2f * floor((cellIdx.y / 2f))));\n  let lc = select(cellIdx.z, cellIdx.x, (orient < 0.5f));\n  let sc = select(cellIdx.x, cellIdx.z, (orient < 0.5f));\n  let srow = floor((sc / 2f));\n  let off = floor((hash(vec2f((cellIdx.y * 3.17f), (srow * 7.31f))) * 4f));\n  let bid = vec3f(floor(((lc + off) / 4f)), cellIdx.y, (srow + (orient * 913f)));\n  return BrickHit(bid, off, orient);\n}\n\nfn lgSolid(cc: vec3f, cell: vec3f, gap: f32) -> f32 {\n  let u = (&params);\n  let r = length(cc);\n  if ((r >= 1f)) {\n    return 0f;\n  }\n  if ((r > (1f - (2.2f * cell.y)))) {\n    let brick = lgBrick(floor((cc / cell)));\n    let blink = fract((hash(((brick.bid.xy * 0.173f) + (brick.bid.z * 0.089f))) + ((*u).p_rebuild * 0.03f)));\n    if ((blink < gap)) {\n      return 0f;\n    }\n  }\n  return 1f;\n}\n\nfn noise(p: vec2f) -> f32 {\n  let i = floor(p);\n  let f = fract(p);\n  let ff = ((f * f) * (vec2f(3) - (f * 2f)));\n  return mix(mix(hash(i), hash((i + vec2f(1, 0))), ff.x), mix(hash((i + vec2f(0, 1))), hash((i + vec2f(1))), ff.x), ff.y);\n}\n\nstruct orb12Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb12Fragment(_arg_0: orb12Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let uv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let glossNow = ((*u).p_gloss * (0.7f + (0.9f * (*u).outputVol)));\n  let gainNow = ((*u).p_gain * (0.92f + (0.25f * (*u).outputVol)));\n  let lightNow = ((*u).p_light * (1f + (0.3f * (*u).inputVol)));\n  let pitch = (2f / clamp((*u).p_studs, 8f, 48f));\n  let cell = vec3f(pitch, (pitch * 1.2f), pitch);\n  let gap = clamp((*u).p_gap, 0f, 0.9f);\n  let bound = ((1f + (length(cell) * 0.5f)) + 1e-3f);\n  let duv = (uv / (*u).p_radius);\n  var ro = vec3f((duv.x * bound), (duv.y * bound), 2.6f);\n  var rd = vec3f(0, 0, -1);\n  let tiltM = rot2((*u).p_tilt);\n  let spinM = rot2(-((*u).p_spin));\n  let roT = (tiltM * vec2f(ro.y, ro.z));\n  ro = vec3f(ro.x, roT);\n  let roS = (spinM * vec2f(ro.x, ro.z));\n  ro = vec3f(roS.x, ro.y, roS.y);\n  let rdT = (tiltM * vec2f(rd.y, rd.z));\n  rd = vec3f(rd.x, rdT);\n  let rdS = (spinM * vec2f(rd.x, rd.z));\n  rd = vec3f(rdS.x, rd.y, rdS.y);\n  var Lo = vec3f(-0.48970210552215576, 0.6855829358100891, 0.5386723279953003);\n  let loT = (tiltM * vec2f(Lo.y, Lo.z));\n  Lo = vec3f(Lo.x, loT);\n  let loS = (spinM * vec2f(Lo.x, Lo.z));\n  Lo = vec3f(loS.x, Lo.y, loS.y);\n  var Vo = vec3f(0, 0, 1);\n  let voT = (tiltM * vec2f(Vo.y, Vo.z));\n  Vo = vec3f(Vo.x, voT);\n  let voS = (spinM * vec2f(Vo.x, Vo.z));\n  Vo = vec3f(voS.x, Vo.y, voS.y);\n  let sgn = vec3f(f32(select(-1i, 1i, (rd.x >= 0f))), f32(select(-1i, 1i, (rd.y >= 0f))), f32(select(-1i, 1i, (rd.z >= 0f))));\n  rd = normalize((sgn * max(abs(rd), vec3f(9.999999747378752e-5))));\n  let b = dot(rd, ro);\n  let c = (dot(ro, ro) - (bound * bound));\n  let disc = ((b * b) - c);\n  if ((disc < 0f)) {\n    return vec4f();\n  }\n  let sq = sqrt(disc);\n  let p0 = (ro + (rd * ((-(b) - sq) + (pitch * 1e-3f))));\n  let tSpan = (2f * sq);\n  var vp = floor((p0 / cell));\n  let tDelta = (cell / abs(rd));\n  var tMax = ((((vp + step(vec3f(), rd)) * cell) - p0) / rd);\n  var hitF = 0f;\n  var mask = vec3f(0, 0, 1);\n  var tCur = 0f;\n  for (var i = 0u; i < 96u; i += 1u) {\n    if ((lgSolid(((vp + 0.5f) * cell), cell, gap) > 0.5f)) {\n      hitF = 1f;\n      break;\n    }\n    if (((tMax.x < tMax.y) && (tMax.x < tMax.z))) {\n      tCur = tMax.x;\n      tMax = vec3f((tMax.x + tDelta.x), tMax.y, tMax.z);\n      vp = vec3f((vp.x + sgn.x), vp.y, vp.z);\n      mask = vec3f(1, 0, 0);\n    }\n    else {\n      if ((tMax.y < tMax.z)) {\n        tCur = tMax.y;\n        tMax = vec3f(tMax.x, (tMax.y + tDelta.y), tMax.z);\n        vp = vec3f(vp.x, (vp.y + sgn.y), vp.z);\n        mask = vec3f(0, 1, 0);\n      }\n      else {\n        tCur = tMax.z;\n        tMax = vec3f(tMax.xy, (tMax.z + tDelta.z));\n        vp = vec3f(vp.xy, (vp.z + sgn.z));\n        mask = vec3f(0, 0, 1);\n      }\n    }\n    if ((tCur > tSpan)) {\n      break;\n    }\n  }\n  if ((hitF < 0.5f)) {\n    return vec4f();\n  }\n  let cc = ((vp + 0.5f) * cell);\n  let r = length(cc);\n  let dir = (cc / max(r, 1e-4f));\n  let brick = lgBrick(vp);\n  let n = ((mask * sgn) * -1f);\n  let hp = (p0 + (rd * tCur));\n  let cph = hash(((brick.bid.xy * 1.37f) + (brick.bid.z * 0.91f)));\n  var rn = ((noise(((dir.xy * 2.6f) + 7f)) * 0.5f) + (noise(((dir.yz * 2.6f) + 13f)) * 0.5f));\n  rn = clamp((0.5f + ((rn - 0.5f) * 2.2f)), 0f, 0.999f);\n  let idx = floor((clamp(mix(cph, rn, clamp((*u).p_patch, 0f, 1f)), 0f, 0.999f) * 5f));\n  var albedo = select(select(select(select((*u).c_brickE, (*u).c_brickD, (idx < 3.5f)), (*u).c_brickC, (idx < 2.5f)), (*u).c_brickB, (idx < 1.5f)), (*u).c_brickA, (idx < 0.5f));\n  albedo = (albedo * (0.93f + (0.14f * hash(((brick.bid.xy * 0.53f) + (brick.bid.z * 1.7f))))));\n  let sp = (hp / cell);\n  let lcC = select(sp.z, sp.x, (brick.orient < 0.5f));\n  let scC = select(sp.x, sp.z, (brick.orient < 0.5f));\n  let u4 = fract(((lcC + brick.off) / 4f));\n  let v2 = fract((scC / 2f));\n  let wY = fract(sp.y);\n  let dL = ((min(u4, (1f - u4)) * 4f) * pitch);\n  let dS = ((min(v2, (1f - v2)) * 2f) * pitch);\n  let dY = (min(wY, (1f - wY)) * cell.y);\n  var seamD = 0f;\n  if ((mask.y > 0.5f)) {\n    seamD = min(dL, dS);\n  }\n  else {\n    if ((mask.x > 0.5f)) {\n      seamD = min(dY, select(dL, dS, (brick.orient < 0.5f)));\n    }\n    else {\n      seamD = min(dY, select(dS, dL, (brick.orient < 0.5f)));\n    }\n  }\n  let seam = ((1f - smoothstep(0f, (0.07f * pitch), seamD)) * clamp((*u).p_seam, 0f, 1f));\n  var nEff = n;\n  var studF = 0f;\n  var shadowF = 0f;\n  var engrave = 0f;\n  let studAmt = clamp((*u).p_stud, 0f, 1f);\n  if (((mask.y > 0.5f) && (n.y > 0.5f))) {\n    let cuv = (fract((hp.xz / pitch)) - 0.5f);\n    let sd = length(cuv);\n    let rim = (smoothstep(0.14f, 0.29f, sd) * (1f - smoothstep(0.29f, 0.335f, sd)));\n    let tiltN = normalize(vec3f(cuv.x, 0.42f, cuv.y));\n    nEff = normalize(mix(n, tiltN, (rim * studAmt)));\n    studF = (1f - smoothstep(0.285f, 0.33f, sd));\n    let lxz = normalize((Lo.xz + vec2f(9.999999747378752e-6)));\n    let away = clamp(dot(normalize((cuv + vec2f(9.999999747378752e-6))), (lxz * -1f)), 0f, 1f);\n    shadowF = ((smoothstep(0.47f, 0.335f, sd) * (1f - studF)) * (0.35f + (0.65f * away)));\n    engrave = ((smoothstep(0.11f, 0.135f, sd) * (1f - smoothstep(0.155f, 0.18f, sd))) * studF);\n  }\n  let lam = clamp(dot(nEff, Lo), 0f, 1f);\n  let wrap = clamp(((dot(dir, Lo) * 0.5f) + 0.5f), 0f, 1f);\n  let depthDim = mix(1f, 0.55f, clamp(((1f - r) / (3f * cell.y)), 0f, 1f));\n  let shade = (((0.34f + ((0.42f * wrap) * wrap)) + ((0.8f * lam) * lightNow)) * depthDim);\n  var col = ((albedo * shade) * (1f + (0.1f * studF)));\n  col = (col * (1f - ((shadowF * 0.38f) * studAmt)));\n  col = (col * (1f - ((engrave * 0.14f) * studAmt)));\n  let bevel = (smoothstep((0.05f * pitch), (0.085f * pitch), seamD) * (1f - smoothstep((0.085f * pitch), (0.16f * pitch), seamD)));\n  col = (col + (albedo * ((bevel * (0.18f + (0.5f * lam))) * clamp((*u).p_seam, 0f, 1f))));\n  col = (col * (1f - (seam * 0.8f)));\n  let ndh = clamp(dot(nEff, normalize((Lo + Vo))), 0f, 1f);\n  let spec = (pow(ndh, 48f) + (0.22f * pow(ndh, 8f)));\n  col = (col + (vec3f(1) * (((spec * glossNow) * (1f - seam)) * depthDim)));\n  col = (col * gainNow);\n  col = pow(max(col, vec3f()), vec3f((*u).p_contrast));\n  return vec4f(col, 1f);\n}"
};
