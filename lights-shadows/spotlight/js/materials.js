import {
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    standardBlack: new MeshStandardMaterial( { color: 0x000000 } ),

    standardWhite: new MeshStandardMaterial(),

    standardWhiteRough: new MeshStandardMaterial( {
      metalness: 0,
      roughness: 0.8,
    } ),

  };

}
