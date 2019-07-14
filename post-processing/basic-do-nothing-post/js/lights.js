import {
  HemisphereLight,
  DirectionalLight,
} from './vendor/three/three.module.js';

function createHemisphereLight() {

  return new HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

}

function createDirectionalLight() {

  const direct = new DirectionalLight( 0xfffffc, 15 );
  direct.position.set( 5, 10, 15 );

  return direct;

}

export default function createLights() {

  return {

    ambient: createHemisphereLight(),
    main: createDirectionalLight(),

  };

}
