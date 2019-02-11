import {
  HemisphereLight,
  PointLight,
} from './vendor/three/three.module.js';

function createAmbientLight() {

  // we'll measure the ambient light's intensity in Lux, which means
  // "luminous flux per unit area". Of course, luminous flux is another
  // unit, and understanding these leads down a long rabbit hole of defintions
  // which you SHOULD go down at some point.
  // For now, just think of it as amount of light per unit area

  // You can use the chart here as a shortcut:
  // https://en.wikipedia.org/wiki/Lux#Illuminance

  // There are two kinds of ambient light
  // const ambientLight = new AmbientLight(  0x666666,  1  );

  const ambientLight = new HemisphereLight(

    // sky color ( dim blue, evening )
    0xddeeff,

    // ground color ( dim grey)
    0x0f0e0d,

    //

    // intensity( irradiance )
    // here, we'll assume a dim twilight value
    1

    // increasing this even a little bit - say to around 5

  );

  return ambientLight;

}

function createPointLight() {

  const pointLight = new PointLight(

    // color - you can pick this from a lightbulb color chart
    // here's we're going for a slight yellow (picked from a light color chart): http://www.westinghouselighting.com/color-temperature.aspx
    // to emphasize the effect
    0xFFF093,

    // intensity - leave it at 1 since we'll overwrite it with light.power below
    1,

    // distance: always 0 (meaning infinite) for physically correct lights
    0,

    // decay - how fast the light fades along the beam
    // always 2 for physically correct lights
    2,

  );

  // power is in lumens - 5000 is roughly a 300w bulb
  pointLight.power = 5000;

  // pointlight is 10 metres above the scene
  pointLight.position.set( 0, 10, 0 );

  return pointLight;

}

export default function createLights() {

  const ambient = createAmbientLight();

  const main = createPointLight();

  return { ambient, main };

}