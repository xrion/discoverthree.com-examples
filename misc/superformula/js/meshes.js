import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  return {

    super: new Mesh( geometries.super, materials.standard ),

  };

}
