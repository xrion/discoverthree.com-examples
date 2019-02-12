import {
  BoxBufferGeometry,
  SphereBufferGeometry,
} from './vendor/three/three.module.js';


export default function createGeometries() {

  return {

    box: new BoxBufferGeometry( 2, 2, 2 ),
    sphere: new SphereBufferGeometry( 1, 128, 128 ),

  };

}
