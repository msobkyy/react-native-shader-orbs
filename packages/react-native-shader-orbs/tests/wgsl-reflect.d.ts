// wgsl_reflect's default entry is a CommonJS file inside an ESM package, which Node can't load.
// Its real ESM build has no type file of its own, so point it at the package's types.
declare module "wgsl_reflect/wgsl_reflect.module.js" {
  export { WgslReflect } from "wgsl_reflect";
}
