import {
  HemisphereLight,
  DirectionalLight,
} from './vendor/three/three.module.js';


function createHemisphereLight() {

  return new HemisphereLight(

    0xAE9A7F,
    0x6D6E73,

    // full moon
    // 0.3,

    // twilight
    3,

    // very dark overcast sky
    // 100,

    // sunset/rise, clear sky
    // 400,

    // overcast day
    // 1000,

    // normal daylight
    // 10000,

    // direct sun
    // 50000,

  );

}

function createDirectionalLight() {

  const direct = new DirectionalLight(
    0xFFFFFA,
    15,
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
