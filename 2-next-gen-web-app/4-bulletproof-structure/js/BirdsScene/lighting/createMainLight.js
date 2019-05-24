import {
  DirectionalLight,
} from '../vendor/three/three.module.js';

export default function createMainLight() {

  const direct = new DirectionalLight( 0xffffff, 5 );

  direct.position.set( 10, 10, 10 );

  return direct;

}
