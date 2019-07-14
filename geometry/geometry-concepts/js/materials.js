import {
  MeshBasicMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    wireframe: new MeshBasicMaterial( { color: 0x800080, wireframe: true } ),

  };

}
