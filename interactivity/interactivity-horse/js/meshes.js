import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  return {

    ground: new Mesh( geometries.plane, materials.ground ),

  };

}
