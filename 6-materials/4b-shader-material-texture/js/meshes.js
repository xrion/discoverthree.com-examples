import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  return {

    box: new Mesh( geometries.box, materials.bamboo ),

  };

}
