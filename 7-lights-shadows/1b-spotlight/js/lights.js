import {
  HemisphereLight,
  SpotLight,
} from './vendor/three/three.module.js';

function createHemisphereLight() {

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
    // here, we'll assume a very dim twilight value
    1

    // increasing this even a little bit - say to around 5

  );

  return ambientLight;

}

function createSpotLight() {

  const spotLight = new SpotLight(
    0xffffff, // color

    // intensity - leave it at 1 since we'll overwrite it with light.power below
    1,

    // distance: always 0 (meaning infinite) for physically correct lights
    0,

    // width of the spotlight beam in Radian. Max 180 degres (Math.PI)
    Math.PI / 6,

    // how sharp the edges of the spotlight are
    0.5, // exponent/penumbra

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
