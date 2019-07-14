import {
  MeshStandardMaterial,
  ShadowMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    standardBlack: new MeshStandardMaterial( { color: 0x000000 } ),

    standardWhite: new MeshStandardMaterial(),

    standardWhiteRough: new MeshStandardMaterial( {
      metalness: 0.1,
      roughness: 0.8,
    } ),

    shadow: new ShadowMaterial( {
      color: 0x000000,
      opacity: 0.2,
    } ),

  };

}
