import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  return {

    fullscreenQuad: new Mesh( geometries.plane, materials.fullscreen ),

  };

}
