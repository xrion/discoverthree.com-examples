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

  direct.castShadow = true;
  direct.shadow.mapSize.width = 2048;
  direct.shadow.mapSize.height = 2048;
  direct.shadow.camera.near = 5.5;
  direct.shadow.camera.far = 7.5;

  direct.shadow.camera.top = 0.75;
  direct.shadow.camera.right = 0.75;
  direct.shadow.camera.bottom = -0.2;
  direct.shadow.camera.left = -0.75;

  return direct;

}

export default function createLights() {

  return {

    ambient: createHemisphereLight(),
    main: createDirectionalLight(),

  };

}
