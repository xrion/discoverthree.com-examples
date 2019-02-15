import {
  CircleBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    circle: new CircleBufferGeometry( 8, 128 ),

  };

}
