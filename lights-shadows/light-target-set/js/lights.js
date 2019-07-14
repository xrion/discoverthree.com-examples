import {
  HemisphereLight,
  SpotLight,
} from './vendor/three/three.module.js';

function createHemisphereLight() {

  return new HemisphereLight( 0xddeeff, 0x0f0e0d, 1 );

}

function createSpotLight() {

  const spotLight = new SpotLight(

    0xffffff, // color

    // intensity - leave it at 1 since we'll overwrite it with light.power below
    1,

    // distance: always 0 (meaning infinite) for physically correct lights
    0,

    // width of the spotlight beam in Radian. Max 180 degres (Math.PI)
    Math.PI / 8,

    // how sharp the edges of the spotlight are
    0.3, // exponent/penumbra

    // decay - how fast the light fades along the beam
    // always 2 for physically correct lights
    2,

  );

  // power is in lumens - 5000 is roughly a 100w bulb
  spotLight.power = 5000;

  spotLight.position.set( -12, 10, -12 );

  return spotLight;

}
export default function createLights() {

  return {
    ambient: createHemisphereLight(),
    main: createSpotLight(),
  };

}
