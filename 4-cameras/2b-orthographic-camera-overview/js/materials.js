import {
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    standard: new MeshStandardMaterial( { flatShading: true } ),

  };

}
