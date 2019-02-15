import {
  Mesh,
} from './vendor/three/three.js';

export default function createMeshes( geometries, materials ) {

  return {
    tri: new Mesh(
      geometries.bufferGeometry,
      materials.basic,
    ),
  };

}
