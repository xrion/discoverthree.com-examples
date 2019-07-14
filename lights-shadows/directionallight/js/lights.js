import {
  HemisphereLight,
  DirectionalLight,
} from './vendor/three/three.module.js';

function createHemisphereLight() {

  return new HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

}

function createDirectionalLight() {

  // AKA "distant light" or "direct light", "point light at infinity"
  // directional light represents a far away light source like the sun
  // there is no fallof or decay, since for any "normal"
  // scale scene - that is, less than 100,000km or so across,
  // the strength of the light will not change noticeably
  const directionalLight = new DirectionalLight(

    0xddeeff,

    // intensity/ irradiance in lux
    10,

  );

  directionalLight.position.set( -12, 10, -12 );

  return directionalLight;

}

export default function createLights() {

  return {
    ambient: createHemisphereLight(),
    main: createDirectionalLight(),
  };

}
