import {
  BoxGeometry,
  SphereGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    box: new BoxGeometry( 2, 2, 2 ),
    sphere: new SphereGeometry( 1, 32, 32 ),

  };

}
