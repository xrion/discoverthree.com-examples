import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  return {

    sphere: new Mesh( geometries.sphere, materials.standard ),

  };

}
