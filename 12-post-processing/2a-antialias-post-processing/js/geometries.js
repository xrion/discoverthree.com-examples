import {
  BoxBufferGeometry,
} from './vendor/three/three.module.js';


export default function createGeometries() {

  return {

    box: new BoxBufferGeometry( 3, 4, 3, 4, 4, 4 ),

  };

}
