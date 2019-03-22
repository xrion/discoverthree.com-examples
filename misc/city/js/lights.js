import {
  HemisphereLight,
  DirectionalLight,
} from './vendor/three/three.module.js';


function createHemisphereLight() {

  return new HemisphereLight(

    0xAE9A7F,
    0x6D6E73,

    0.25,

  );

}

function createDirectionalLight() {

  const direct = new DirectionalLight(
    0xFFFFFA,
    3,
  );

  direct.position.set( -4, 3, 4 );

  return direct;

}

export default function createLights() {

  return {

    ambient: createHemisphereLight(),
    main: createDirectionalLight(),

  };

}
