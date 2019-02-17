import {
  PlaneBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    // 1x1 plane for walls and floor
    // we'll scale and rotate the meshes into place
    plane: new PlaneBufferGeometry( 1, 1 ),

  };

}
