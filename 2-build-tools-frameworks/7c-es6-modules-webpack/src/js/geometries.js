import {
  SphereBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    sphere: new SphereBufferGeometry( 1.5, 64, 64 ),

  };

}
