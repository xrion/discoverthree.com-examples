import {
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    standard: new MeshStandardMaterial( {
      metalness: 0.1,
      roughness: 0.8,
    } ),

  };

}
