import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  return {

    quad: new Mesh( geometries.bufferGeometry, materials.basic ),

  };

}
