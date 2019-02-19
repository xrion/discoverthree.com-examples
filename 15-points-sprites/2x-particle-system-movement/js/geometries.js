import {
  SphereBufferGeometry,
} from './vendor/three/three.module.js';


export default function createGeometries() {

  return {

    sphere: new SphereBufferGeometry( 2, 32, 8 )

  };

}
