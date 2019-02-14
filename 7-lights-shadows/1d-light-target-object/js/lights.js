import {
  HemisphereLight,
  SpotLight,
} from './vendor/three/three.module.js';

function createHemisphereLight() {

  return new HemisphereLight( 0xddeeff, 0x0f0e0d, 3 );

}

function createSpotLight() {

  const spotLight = new SpotLight( 0xffffff, 1, 0, Math.PI / 6, 0.5, 2 );

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
