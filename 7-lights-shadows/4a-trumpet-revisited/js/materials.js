import {
  Color,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( envMap ) {

  // generally throughout these examples, we
  // don't care about color accuracy that much
  // that is, if we select 0x800080 (purple)
  // we don't mind if it ends up being 0x880088 on our screens
  // however, here we are selecting colors for our metals and
  // the color accuracy DOES matter, so we need to convert it from
  // sRGB color space to Linear color space

  // Hopefully three.js will improve its workflow soon so that this is automatic!

  const brassColor = new Color( 0xB5A642 ).convertSRGBToLinear();
  const silverColor = new Color( 0xC4CACE ).convertSRGBToLinear();

  return {

    brass: new MeshStandardMaterial( {
      metalness: 1,
      roughness: 0.05,
      color: brassColor,
      envMap,
      envMapIntensity: 1,
    } ),

    silver: new MeshStandardMaterial( {
      metalness: 1,
      roughness: 0.05,
      color: silverColor,
      envMap,
      envMapIntensity: 1,
    } ),

    plinth: new MeshStandardMaterial( {
      metalness: 0.5,
      roughness: 0.5,
      envMap,
      envMapIntensity: 0.1,
    } ),

  };

}
