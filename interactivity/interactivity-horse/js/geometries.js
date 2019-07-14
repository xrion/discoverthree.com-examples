import {
  PlaneBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  const plane = new PlaneBufferGeometry( 1000, 1000 );
  plane.rotateX( -Math.PI / 2 );

  return {

    plane,

  };

}
