import {
  HemisphereLight,
  DirectionalLight,
} from './vendor/three/three.module.js';

export default function createLights() {

  const ambient = new HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

  const main = new DirectionalLight( 0xfffffc, 15 );
  main.position.set( -4, 3, 4 );

  return { ambient, main };

}
