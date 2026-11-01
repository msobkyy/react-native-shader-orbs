import type { OrbDefinition } from "../types";

/*
 * Shader by XorDev (https://x.com/XorDev), ported for Orbkit with the author's
 * permission. Non-commercial use only, with attribution to XorDev; keep this
 * notice with the file. shadercn's runtime (renderer.ts) is MIT-licensed.
 */
export const orb24: OrbDefinition = {
  "slug": "orb-24",
  "title": "ORB-24",
  "note": "a Minecraft Earth — a perfect voxel sphere whose seasons cycle it through lush, cherry-grove, ice, mesa and desert worlds",
  "entryPoint": "orb24Fragment",
  "uniformSize": 240,
  "offsets": {
    "anim": {
      "offset": 0,
      "size": 1
    },
    "c_dirt": {
      "offset": 4,
      "size": 3
    },
    "c_grass": {
      "offset": 8,
      "size": 3
    },
    "c_lava": {
      "offset": 12,
      "size": 3
    },
    "c_leaf": {
      "offset": 16,
      "size": 3
    },
    "c_ore": {
      "offset": 20,
      "size": 3
    },
    "c_sand": {
      "offset": 24,
      "size": 3
    },
    "c_stone": {
      "offset": 28,
      "size": 3
    },
    "c_water": {
      "offset": 32,
      "size": 3
    },
    "inputVol": {
      "offset": 35,
      "size": 1
    },
    "outputVol": {
      "offset": 36,
      "size": 1
    },
    "p_blocks": {
      "offset": 37,
      "size": 1
    },
    "p_cave": {
      "offset": 38,
      "size": 1
    },
    "p_contrast": {
      "offset": 39,
      "size": 1
    },
    "p_core": {
      "offset": 40,
      "size": 1
    },
    "p_drift": {
      "offset": 41,
      "size": 1
    },
    "p_gain": {
      "offset": 42,
      "size": 1
    },
    "p_glow": {
      "offset": 43,
      "size": 1
    },
    "p_light": {
      "offset": 44,
      "size": 1
    },
    "p_ore": {
      "offset": 45,
      "size": 1
    },
    "p_radius": {
      "offset": 46,
      "size": 1
    },
    "p_rough": {
      "offset": 47,
      "size": 1
    },
    "p_scale": {
      "offset": 48,
      "size": 1
    },
    "p_sea": {
      "offset": 49,
      "size": 1
    },
    "p_season": {
      "offset": 50,
      "size": 1
    },
    "p_shuffle": {
      "offset": 51,
      "size": 1
    },
    "p_spin": {
      "offset": 52,
      "size": 1
    },
    "p_texture": {
      "offset": 53,
      "size": 1
    },
    "p_tilt": {
      "offset": 54,
      "size": 1
    },
    "p_trees": {
      "offset": 55,
      "size": 1
    },
    "res": {
      "offset": 56,
      "size": 2
    },
    "time": {
      "offset": 58,
      "size": 1
    }
  },
  "params": [
    {
      "key": "spin",
      "label": "Spin",
      "default": 0.22,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": true
    },
    {
      "key": "tilt",
      "label": "Tilt",
      "default": 0.45,
      "min": 0,
      "max": 4,
      "step": 0.02,
      "integrate": false
    },
    {
      "key": "drift",
      "label": "Terrain drift",
      "default": 0.12,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "season",
      "label": "Season rate",
      "default": 0.3,
      "min": 0,
      "max": 10,
      "step": 0.05,
      "integrate": true
    },
    {
      "key": "shuffle",
      "label": "Ember rate",
      "default": 0.8,
      "min": 0,
      "max": 20,
      "step": 0.1,
      "integrate": true
    },
    {
      "key": "radius",
      "label": "Radius",
      "default": 1.15,
      "min": 0.15,
      "max": 3,
      "step": 0.015,
      "integrate": false
    },
    {
      "key": "blocks",
      "label": "Blocks",
      "default": 64,
      "min": 16,
      "max": 96,
      "step": 1,
      "integrate": false
    },
    {
      "key": "rough",
      "label": "Mountains",
      "default": 0.45,
      "min": 0,
      "max": 0.8,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "scale",
      "label": "Terrain scale",
      "default": 2.4,
      "min": 0.5,
      "max": 8,
      "step": 0.05,
      "integrate": false
    },
    {
      "key": "sea",
      "label": "Sea level",
      "default": 0.5,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "trees",
      "label": "Trees",
      "default": 0.75,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "cave",
      "label": "Caves",
      "default": 0.4,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "ore",
      "label": "Ore density",
      "default": 0.12,
      "min": 0,
      "max": 0.6,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "glow",
      "label": "Ore glow",
      "default": 0.9,
      "min": 0,
      "max": 5,
      "step": 0.03,
      "integrate": false
    },
    {
      "key": "core",
      "label": "Molten core",
      "default": 0.5,
      "min": 0,
      "max": 1,
      "step": 0.01,
      "integrate": false
    },
    {
      "key": "texture",
      "label": "Texture grain",
      "default": 0.6,
      "min": 0,
      "max": 1,
      "step": 0.01,
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
      "key": "grass",
      "label": "Grass",
      "default": "#6abe30"
    },
    {
      "key": "dirt",
      "label": "Mud",
      "default": "#6f4a2f"
    },
    {
      "key": "stone",
      "label": "Stone",
      "default": "#8a8a90"
    },
    {
      "key": "sand",
      "label": "Sand",
      "default": "#dbcf9c"
    },
    {
      "key": "water",
      "label": "Water",
      "default": "#2f66d0"
    },
    {
      "key": "leaf",
      "label": "Leaves",
      "default": "#3e8f27"
    },
    {
      "key": "ore",
      "label": "Ore",
      "default": "#4de3ff"
    },
    {
      "key": "lava",
      "label": "Lava",
      "default": "#ff7b26"
    }
  ],
  "statePresets": {
    "idle": {
      "core": 0.5,
      "drift": 0.12,
      "gain": 1,
      "glow": 0.9,
      "light": 1,
      "season": 0.3,
      "shuffle": 0.8,
      "spin": 0.22
    },
    "speaking": {
      "core": 1,
      "drift": 0.35,
      "gain": 1.1,
      "glow": 1.6,
      "light": 1.15,
      "season": 0.6,
      "shuffle": 1.6,
      "spin": 0.85
    },
    "thinking": {
      "core": 0.35,
      "drift": 1.7,
      "gain": 0.95,
      "glow": 1.3,
      "light": 0.9,
      "season": 1.8,
      "shuffle": 4.5,
      "spin": 0.04
    }
  },
  "wgsl": "struct orb24Params {\n  anim: f32,\n  c_dirt: vec3f,\n  c_grass: vec3f,\n  c_lava: vec3f,\n  c_leaf: vec3f,\n  c_ore: vec3f,\n  c_sand: vec3f,\n  c_stone: vec3f,\n  c_water: vec3f,\n  inputVol: f32,\n  outputVol: f32,\n  p_blocks: f32,\n  p_cave: f32,\n  p_contrast: f32,\n  p_core: f32,\n  p_drift: f32,\n  p_gain: f32,\n  p_glow: f32,\n  p_light: f32,\n  p_ore: f32,\n  p_radius: f32,\n  p_rough: f32,\n  p_scale: f32,\n  p_sea: f32,\n  p_season: f32,\n  p_shuffle: f32,\n  p_spin: f32,\n  p_texture: f32,\n  p_tilt: f32,\n  p_trees: f32,\n  res: vec2f,\n  time: f32,\n}\n\n@group(0) @binding(0) var<uniform> params: orb24Params;\n\nstruct World {\n  cherry: f32,\n  clim: vec4f,\n  drift: vec3f,\n  maxH: f32,\n  seaN: f32,\n  treeMul: f32,\n  vs: f32,\n}\n\nfn rot2(angle: f32) -> mat2x2f {\n  let c = cos(angle);\n  let s = sin(angle);\n  return mat2x2f(vec2f(c, -(s)), vec2f(s, c));\n}\n\nfn hash(p: vec2f) -> f32 {\n  return fract((sin(dot(p, vec2f(127.0999984741211, 311.70001220703125))) * 43758.5453123f));\n}\n\nfn noise(p: vec2f) -> f32 {\n  let i = floor(p);\n  let f = fract(p);\n  let ff = ((f * f) * (vec2f(3) - (f * 2f)));\n  return mix(mix(hash(i), hash((i + vec2f(1, 0))), ff.x), mix(hash((i + vec2f(0, 1))), hash((i + vec2f(1))), ff.x), ff.y);\n}\n\nfn ckN3(p: vec3f) -> f32 {\n  let v = (((noise(p.xy) + noise((p.yz + 19.1f))) + noise((p.zx + 47.3f))) / 3f);\n  return clamp((0.5f + ((v - 0.5f) * 1.9f)), 0f, 1f);\n}\n\nfn ckField(dir: vec3f, world: World) -> f32 {\n  let u = (&params);\n  let q = ((dir * (*u).p_scale) + world.drift);\n  return ((ckN3(q) * 0.65f) + (ckN3(((q * 2.6f) + 31.7f)) * 0.35f));\n}\n\nfn ckTerrain(dir: vec3f, world: World) -> f32 {\n  let u = (&params);\n  let h = (1f + ((((*u).p_rough * max((ckField(dir, world) - world.seaN), 0f)) * 1.2f) * (1f + (world.clim.w * 0.8f))));\n  let stepH = (3f * world.vs);\n  let hq = (1f + (floor(((h - 1f) / stepH)) * stepH));\n  return mix(h, hq, (world.clim.w * 0.85f));\n}\n\nstruct TreeCell {\n  dir: vec3f,\n  h1: f32,\n  h2: f32,\n}\n\nfn ckTreeCell(dir: vec3f) -> TreeCell {\n  let u = (&params);\n  let ad = abs(dir);\n  var fuv = vec2f();\n  var face = 0f;\n  if (((ad.x >= ad.y) && (ad.x >= ad.z))) {\n    fuv = (dir.yz / ad.x);\n    face = f32(select(1i, 0i, (dir.x > 0f)));\n  }\n  else {\n    if ((ad.y >= ad.z)) {\n      fuv = (dir.xz / ad.y);\n      face = f32(select(3i, 2i, (dir.y > 0f)));\n    }\n    else {\n      fuv = (dir.xy / ad.z);\n      face = f32(select(5i, 4i, (dir.z > 0f)));\n    }\n  }\n  let grid = max(((*u).p_blocks / 6f), 2f);\n  let cell = floor((((fuv * 0.5f) + 0.5f) * grid));\n  let h1 = hash(((cell * 1.17f) + (face * 19.3f)));\n  let h2 = hash(((cell * 0.71f) + ((face * 7.7f) + 9.3f)));\n  let jit = (vec2f(hash((cell + (7.1f + face))), hash((cell + (13.7f + face)))) - 0.5f);\n  let auv = (((((cell + 0.5f) + (jit * 0.3f)) / grid) * 2f) - 1f);\n  var cp = vec3f();\n  if ((face < 1.5f)) {\n    cp = vec3f(f32(select(-1i, 1i, (face < 0.5f))), auv.x, auv.y);\n  }\n  else {\n    if ((face < 3.5f)) {\n      cp = vec3f(auv.x, f32(select(-1i, 1i, (face < 2.5f))), auv.y);\n    }\n    else {\n      cp = vec3f(auv, f32(select(-1i, 1i, (face < 4.5f))));\n    }\n  }\n  return TreeCell(normalize(cp), h1, h2);\n}\n\nfn ckBiome(dir: vec3f, world: World) -> f32 {\n  return ckN3((((dir * 1.3f) + world.drift) + 57.9f));\n}\n\nfn ckTreeMaterial(cc: vec3f, treeDir: vec3f, h2: f32, r: f32, ha: f32, lat: f32, world: World) -> f32 {\n  if ((world.clim.z > 0.5f)) {\n    let spikeH = ((2f + ((6f * h2) * h2)) * world.vs);\n    let w = (mix(1.15f, 0.3f, clamp(((r - ha) / spikeH), 0f, 1f)) * world.vs);\n    if ((((lat < w) && (r > (ha - world.vs))) && (r < (ha + spikeH)))) {\n      return 3f;\n    }\n  }\n  else {\n    if ((world.clim.w > 0.5f)) {\n      let cacH = ((1.5f + (2f * h2)) * world.vs);\n      if ((((lat < (0.6f * world.vs)) && (r > (ha - world.vs))) && (r < (ha + cacH)))) {\n        return 3f;\n      }\n    }\n    else {\n      if ((world.cherry > 0.5f)) {\n        let trunkTop = (ha + ((2f + (1.5f * h2)) * world.vs));\n        if ((((lat < (0.75f * world.vs)) && (r > (ha - world.vs))) && (r < trunkTop))) {\n          return 2f;\n        }\n        var dd = (cc - (treeDir * (trunkTop + (0.6f * world.vs))));\n        dd = (dd + (treeDir * (dot(dd, treeDir) * 0.8f)));\n        let lv = floor((cc / world.vs));\n        let rag = hash(((lv.xy * 0.61f) + (lv.z * 2.23f)));\n        if ((length(dd) < ((2.2f + (0.5f * rag)) * world.vs))) {\n          return 3f;\n        }\n      }\n      else {\n        let trunkTop = (ha + ((2.5f + (2f * h2)) * world.vs));\n        if ((((lat < (0.75f * world.vs)) && (r > (ha - world.vs))) && (r < trunkTop))) {\n          return 2f;\n        }\n        let dd = (cc - (treeDir * (trunkTop + (0.7f * world.vs))));\n        let lv = floor((cc / world.vs));\n        let rag = hash(((lv.xy * 0.61f) + (lv.z * 2.23f)));\n        if ((length(dd) < ((1.7f + (0.5f * rag)) * world.vs))) {\n          return 3f;\n        }\n      }\n    }\n  }\n  return 0f;\n}\n\nfn ckVoxel(cc: vec3f, world: World) -> f32 {\n  let u = (&params);\n  let r = length(cc);\n  let dir = (cc / max(r, 1e-4f));\n  if ((r < world.maxH)) {\n    let h = ckTerrain(dir, world);\n    if ((r < h)) {\n      if ((h > (1f + (1.5f * world.vs)))) {\n        let cv = ckN3(((cc * ((*u).p_scale * 1.9f)) + 71.3f));\n        let cw = (((*u).p_cave * 0.16f) * smoothstep(world.maxH, (world.maxH - 0.45f), r));\n        if ((abs((cv - 0.5f)) < cw)) {\n          return 0f;\n        }\n      }\n      return 1f;\n    }\n  }\n  if (((r >= (world.maxH + (8f * world.vs))) || ((*u).p_trees <= 1e-3f))) {\n    return 0f;\n  }\n  let tree = ckTreeCell(dir);\n  let thrMax = (clamp((*u).p_trees, 0f, 1f) * 0.8f);\n  if ((tree.h1 <= (1f - thrMax))) {\n    return 0f;\n  }\n  let bioA = ckBiome(tree.dir, world);\n  var dens = select(select(0f, 0.25f, (bioA > 0.3f)), 1f, (bioA > 0.58f));\n  dens *= world.treeMul;\n  if ((tree.h1 <= (1f - (thrMax * dens)))) {\n    return 0f;\n  }\n  let fA = ckField(tree.dir, world);\n  let ha = (1f + (((*u).p_rough * max((fA - world.seaN), 0f)) * 1.2f));\n  if (((fA <= (world.seaN + 0.015f)) || (ha >= (1f + ((*u).p_rough * 0.42f))))) {\n    return 0f;\n  }\n  let lat = length((cc - (tree.dir * dot(cc, tree.dir))));\n  return ckTreeMaterial(cc, tree.dir, tree.h2, r, ha, lat, world);\n}\n\nstruct orb24Fragment_Input {\n  @location(0) uv: vec2f,\n}\n\n@fragment fn orb24Fragment(_arg_0: orb24Fragment_Input) -> @location(0) vec4f {\n  let u = (&params);\n  let fragCoord = (_arg_0.uv * (*u).res);\n  let orbUv = (((fragCoord * 2f) - (*u).res) / min((*u).res.x, (*u).res.y));\n  let glowNow = ((*u).p_glow * (0.7f + (1f * (*u).outputVol)));\n  let gainNow = ((*u).p_gain * (0.9f + (0.3f * (*u).outputVol)));\n  let lightNow = ((*u).p_light * (1f + (0.3f * (*u).inputVol)));\n  let drift = vec3f(((*u).p_drift * 0.31f), ((*u).p_drift * 0.17f), (-((*u).p_drift) * 0.23f));\n  let t5 = (fract(((*u).p_season * 0.05f)) * 5f);\n  let clim = vec4f(clamp((1f - min(abs(t5), abs((t5 - 5f)))), 0f, 1f), clamp((1f - abs((t5 - 4f))), 0f, 1f), clamp((1f - abs((t5 - 2f))), 0f, 1f), clamp((1f - abs((t5 - 3f))), 0f, 1f));\n  let cherry = clamp((1f - abs((t5 - 1f))), 0f, 1f);\n  let treeMul = (dot(clim, vec4f(1, 0.15000000596046448, 0.8999999761581421, 0.30000001192092896)) + (cherry * 0.9f));\n  let vs = (2f / clamp((*u).p_blocks, 8f, 96f));\n  let seaN = (0.25f + (clamp((*u).p_sea, 0f, 1f) * 0.5f));\n  let maxH = ((1f + ((((*u).p_rough * (1f - seaN)) * 1.2f) * 1.8f)) + 1e-3f);\n  let bound = (maxH + (8.5f * vs));\n  let world = World(cherry, clim, drift, maxH, seaN, treeMul, vs);\n  let duv = (orbUv / (*u).p_radius);\n  var ro = vec3f((duv.x * bound), (duv.y * bound), 2.9f);\n  var rd = vec3f(0, 0, -1);\n  let tiltM = rot2((*u).p_tilt);\n  let spinM = rot2(-((*u).p_spin));\n  let roYZ = (tiltM * vec2f(ro.y, ro.z));\n  ro = vec3f(ro.x, roYZ);\n  let roXZ = (spinM * vec2f(ro.x, ro.z));\n  ro = vec3f(roXZ.x, ro.y, roXZ.y);\n  let rdYZ = (tiltM * vec2f(rd.y, rd.z));\n  rd = vec3f(rd.x, rdYZ);\n  let rdXZ = (spinM * vec2f(rd.x, rd.z));\n  rd = vec3f(rdXZ.x, rd.y, rdXZ.y);\n  var Lo = vec3f(-0.48970210552215576, 0.6855829358100891, 0.5386723279953003);\n  let loYZ = (tiltM * vec2f(Lo.y, Lo.z));\n  Lo = vec3f(Lo.x, loYZ);\n  let loXZ = (spinM * vec2f(Lo.x, Lo.z));\n  Lo = vec3f(loXZ.x, Lo.y, loXZ.y);\n  let sgn = vec3f(f32(select(-1i, 1i, (rd.x >= 0f))), f32(select(-1i, 1i, (rd.y >= 0f))), f32(select(-1i, 1i, (rd.z >= 0f))));\n  rd = normalize((sgn * max(abs(rd), vec3f(9.999999747378752e-5))));\n  let b = dot(rd, ro);\n  let c = (dot(ro, ro) - (bound * bound));\n  let disc = ((b * b) - c);\n  if ((disc < 0f)) {\n    return vec4f();\n  }\n  let sq = sqrt(disc);\n  let p0 = (ro + (rd * ((-(b) - sq) + (vs * 1e-3f))));\n  let tSpan = (2f * sq);\n  var vp = floor((p0 / vs));\n  let tDelta = (vec3f(vs) / abs(rd));\n  var tMax = ((((vp + step(vec3f(), rd)) * vs) - p0) / rd);\n  var mat = 0f;\n  var mask = vec3f(0, 0, 1);\n  var tCur = 0f;\n  for (var i = 0u; i < 160u; i += 1u) {\n    let m = ckVoxel(((vp + 0.5f) * vs), world);\n    if ((m > 0.5f)) {\n      mat = m;\n      break;\n    }\n    if (((tMax.x < tMax.y) && (tMax.x < tMax.z))) {\n      tCur = tMax.x;\n      tMax = vec3f((tMax.x + tDelta.x), tMax.y, tMax.z);\n      vp = vec3f((vp.x + sgn.x), vp.y, vp.z);\n      mask = vec3f(1, 0, 0);\n    }\n    else {\n      if ((tMax.y < tMax.z)) {\n        tCur = tMax.y;\n        tMax = vec3f(tMax.x, (tMax.y + tDelta.y), tMax.z);\n        vp = vec3f(vp.x, (vp.y + sgn.y), vp.z);\n        mask = vec3f(0, 1, 0);\n      }\n      else {\n        tCur = tMax.z;\n        tMax = vec3f(tMax.xy, (tMax.z + tDelta.z));\n        vp = vec3f(vp.xy, (vp.z + sgn.z));\n        mask = vec3f(0, 0, 1);\n      }\n    }\n    if ((tCur > tSpan)) {\n      break;\n    }\n  }\n  if ((mat < 0.5f)) {\n    return vec4f();\n  }\n  let cc = ((vp + 0.5f) * vs);\n  let r = length(cc);\n  let dir = (cc / max(r, 1e-4f));\n  let n = ((mask * sgn) * -1f);\n  let hp = (p0 + (rd * tCur));\n  let vseed = vec2f(dot(vp, vec3f(1, 57, 113)), dot(vp, vec3f(27, 7, 91)));\n  let h1 = hash((vseed * 0.013f));\n  let h2 = hash(((vseed * 0.029f) + 5.7f));\n  var uvFace = vec2f();\n  if ((mask.x > 0.5f)) {\n    uvFace = hp.yz;\n  }\n  else {\n    if ((mask.y > 0.5f)) {\n      uvFace = hp.xz;\n    }\n    else {\n      uvFace = hp.xy;\n    }\n  }\n  let grain = hash(((floor((fract((uvFace / vs)) * 4f)) * 0.37f) + (vseed * 0.11f)));\n  var texMul = mix(1f, (0.72f + (0.55f * grain)), (*u).p_texture);\n  let lam = clamp(dot(n, Lo), 0f, 1f);\n  let wrap = clamp(((dot(dir, Lo) * 0.5f) + 0.5f), 0f, 1f);\n  let ao = (0.55f + (0.45f * clamp(((dot(n, dir) * 0.5f) + 0.5f), 0f, 1f)));\n  let shade = (((0.32f + ((0.5f * wrap) * wrap)) + ((0.85f * lam) * lightNow)) * ao);\n  var col = vec3f();\n  if ((mat < 1.5f)) {\n    let f = ckField(dir, world);\n    let h = (1f + (((*u).p_rough * max((f - seaN), 0f)) * 1.2f));\n    let depth = (h - r);\n    let topF = step(depth, (vs * 1.15f));\n    let snow = vec3f(0.9200000166893005, 0.949999988079071, 1);\n    let layer = hash(vec2f((floor((r / (vs * 2f))) * 0.371f), 5.3f));\n    let mesaBand = select(select(select(select(vec3f(0.4000000059604645, 0.25, 0.18000000715255737), vec3f(0.8399999737739563, 0.6499999761581421, 0.27000001072883606), (layer < 0.9f)), vec3f(0.8799999952316284, 0.7900000214576721, 0.6700000166893005), (layer < 0.8f)), vec3f(0.6299999952316284, 0.25999999046325684, 0.15000000596046448), (layer < 0.68f)), vec3f(0.7400000095367432, 0.41999998688697815, 0.20999999344348907), (layer < 0.5f));\n    let mesaTop = mix(vec3f(0.7200000286102295, 0.3799999952316284, 0.20000000298023224), mesaBand, step((1f + ((*u).p_rough * 0.1f)), h));\n    let climGrass = ((((((*u).c_grass * clim.x) + ((*u).c_sand * clim.y)) + (snow * clim.z)) + (mesaTop * clim.w)) + (mix((*u).c_grass, vec3f(0.6200000047683716, 0.8500000238418579, 0.30000001192092896), 0.6f) * cherry));\n    let climDirt = ((((*u).c_dirt * ((clim.x + clim.y) + cherry)) + (((*u).c_dirt * vec3f(0.75, 0.8500000238418579, 1.0499999523162842)) * clim.z)) + (mesaBand * clim.w));\n    let climSand = ((((*u).c_sand * ((clim.x + clim.y) + cherry)) + (mix((*u).c_sand, snow, 0.9f) * clim.z)) + (vec3f(0.7200000286102295, 0.3499999940395355, 0.20000000298023224) * clim.w));\n    let climWater = ((((*u).c_water * ((clim.x + clim.y) + cherry)) + (vec3f(0.6200000047683716, 0.8199999928474426, 0.9200000166893005) * clim.z)) + (mix((*u).c_water, vec3f(0.41999998688697815, 0.30000001192092896, 0.2199999988079071), 0.4f) * clim.w));\n    if (((topF > 0.5f) && (f < seaN))) {\n      let deep = (clamp(((seaN - f) / 0.12f), 0f, 1f) * (1f - (0.55f * clim.z)));\n      let wc = (climWater * mix(1.3f, 0.55f, deep));\n      var shim = (0.85f + (0.25f * sin(((((*u).anim * 2.5f) + (grain * 6.2831f)) + (dir.x * 4f)))));\n      shim = mix(shim, 1.02f, clim.z);\n      col = (((wc * (0.45f + (0.55f * wrap))) * shim) + (wc * (lam * 0.35f)));\n    }\n    else {\n      let dirtF = step(depth, (vs * 2.4f));\n      let up = clamp(dot(n, dir), 0f, 1f);\n      var albedo = mix((*u).c_stone, climDirt, dirtF);\n      albedo = mix(albedo, (*u).c_stone, ((dirtF * (1f - topF)) * step(h2, 0.3f)));\n      let bio = ckBiome(dir, world);\n      let desertF = step(bio, 0.3f);\n      albedo = mix(albedo, climGrass, ((topF * step(0.45f, up)) * (1f - desertF)));\n      albedo = mix(albedo, climSand, (desertF * dirtF));\n      albedo = mix(albedo, climDirt, (((topF * step((1f + ((*u).p_rough * 0.28f)), h)) * 0.85f) * (1f - (0.9f * clim.z))));\n      albedo = mix(albedo, (*u).c_stone, ((topF * step((1f + ((*u).p_rough * 0.45f)), h)) * (1f - (0.85f * clim.z))));\n      albedo = mix(albedo, climSand, (topF * step(abs(((f - seaN) - 0.017f)), 0.018f)));\n      let oc = floor((cc / (2.5f * vs)));\n      let oseed = vec2f(dot(oc, vec3f(1, 57, 113)), dot(oc, vec3f(27, 7, 91)));\n      let fleck = step(0.5f, hash(((floor((fract((uvFace / vs)) * 4f)) * 0.53f) + (oseed * 0.19f))));\n      let icePatch = ((clim.z * step(hash(((oseed * 0.023f) + 9.1f)), 0.5f)) * step((1f + ((*u).p_rough * 0.06f)), h));\n      albedo = mix(albedo, vec3f(0.550000011920929, 0.699999988079071, 0.9200000166893005), (icePatch * (0.45f + (0.4f * fleck))));\n      let veinF = (((1f - dirtF) * step((1f - (*u).p_ore), hash((oseed * 0.017f)))) * step(h1, 0.8f));\n      let oreType = hash(((oseed * 0.041f) + 2.9f));\n      let oreHue = select(select(vec3f(0.1599999964237213), ((*u).c_ore * vec3f(0.25, 0.44999998807907104, 1.2000000476837158)), (oreType < 0.75f)), (*u).c_ore, (oreType < 0.4f));\n      let oreLit = select(0i, 1i, (oreType < 0.75f));\n      albedo = mix(albedo, oreHue, (veinF * (0.2f + (0.65f * fleck))));\n      let twinkle = (0.55f + (0.45f * sin(((*u).p_shuffle + (hash((oseed * 0.013f)) * 37f)))));\n      let depthDim = mix(1f, 0.62f, clamp((depth / max(((*u).p_rough * 0.9f), 0.05f)), 0f, 1f));\n      let coreR = (1f - ((*u).p_rough * 0.6f));\n      let coreF = ((*u).p_core * smoothstep((coreR + 0.15f), (coreR - 0.05f), r));\n      let emis = ((oreHue * ((((veinF * fleck) * f32(oreLit)) * glowNow) * twinkle)) + (((*u).c_lava * (coreF * (0.9f + (0.4f * sin((((*u).p_shuffle * 1.6f) + (h1 * 51f))))))) * (0.6f + (1.4f * (*u).outputVol))));\n      col = ((albedo * (shade * depthDim)) + emis);\n    }\n  }\n  else {\n    if ((mat < 2.5f)) {\n      col = ((*u).c_dirt * (0.5f * shade));\n    }\n    else {\n      let climLeaf = (((((*u).c_leaf * (clim.x + (clim.y * 0.9f))) + (vec3f(0.6200000047683716, 0.7599999904632568, 0.949999988079071) * clim.z)) + (mix((*u).c_leaf, vec3f(0.44999998807907104, 0.6200000047683716, 0.25), 0.5f) * clim.w)) + (vec3f(0.9300000071525574, 0.699999988079071, 0.8199999928474426) * cherry));\n      col = (climLeaf * shade);\n      let leafGrain = mix((0.5f + (0.9f * grain)), (0.85f + (0.3f * grain)), clim.z);\n      texMul = mix(1f, leafGrain, (*u).p_texture);\n    }\n  }\n  col = (col * (texMul * gainNow));\n  col = pow(max(col, vec3f()), vec3f((*u).p_contrast));\n  return vec4f(col, 1f);\n}"
};
