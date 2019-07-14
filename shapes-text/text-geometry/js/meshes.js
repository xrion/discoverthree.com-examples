import {
  Mesh,
} from './vendor/three/three.module.js';


export default function createMeshes( geometries, materials ) {

  return {

    discover: new Mesh( geometries.text, materials.basic ),

  };

}
