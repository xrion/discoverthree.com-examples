import {
  HemisphereLight,
  DirectionalLight,
} from '../vendor/three/three.module.js';

function createAmbientLight() {

  return new HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

}

function createMainLight() {

  const direct = new DirectionalLight( 0xffffff, 5 );
  direct.position.set( 10, 10, 10 );

  return direct;

}

export default function createLights() {

  return {

    ambient: createAmbientLight(),
    main: createMainLight(),

  };

}
