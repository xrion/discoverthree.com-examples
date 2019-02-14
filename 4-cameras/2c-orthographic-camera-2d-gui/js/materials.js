import {
  MeshBasicMaterial,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    ground: new MeshStandardMaterial( {
      color: 0x001100,
      metalness: 0,
      roughness: 1,
    } ),

    guiHorse: new MeshBasicMaterial( {

      color: 0x00ff00,
      morphTargets: true,

    } ),

  };

}
