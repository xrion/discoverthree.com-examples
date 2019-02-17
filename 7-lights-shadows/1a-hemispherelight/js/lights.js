import {
  HemisphereLight,
} from './vendor/three/three.module.js';


function createHemisphereLight() {

  // we'll measure the ambient light's intensity in Lux, which means
  // "luminous flux per unit area". Of course, luminous flux is another
  // unit, and understanding these leads down a long rabbit hole of defintions
  // which you SHOULD go down at some point.
  // For now, just think of it as amount of light per unit area

  // You can use the chart here as a shortcut:
  // https://en.wikipedia.org/wiki/Lux#Illuminance

  const ambientLight = new HemisphereLight(

    // sky color ( dim blue, evening )
    0xddeeff,

    // ground color ( dim grey)
    0x0f0e0d,

    // intensity( irradiance )
    100,

  );

  ambientLight.position.y = 12;

  return ambientLight;

}

export default function createLights() {

  return {

    ambient: createHemisphereLight(),

  };

}
