import {
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    ground: new MeshStandardMaterial( {
      color: 0x001100,
      metalness: 0,
      roughness: 1,
    } ),

  };

}
