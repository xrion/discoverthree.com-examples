import {
  SphereBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    sphere: new SphereBufferGeometry( 0.015, 12, 12 ),

  };

}
