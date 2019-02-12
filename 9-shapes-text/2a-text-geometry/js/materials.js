import {
  MeshBasicMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {
    basic: new MeshBasicMaterial(),
  };

}
