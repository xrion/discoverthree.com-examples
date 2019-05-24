import {
  HemisphereLight,
} from '../vendor/three/three.module.js';

export default function createAmbientLight() {

  return new HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

}
