import {
  HemisphereLight,
  PointLight,
} from './vendor/three/three.module.js';


function createHemisphereLight() {

  return new HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

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
  pointLight.position.set( 0, 12, 0 );

  return pointLight;

}

export default function createLights() {

  return {
    ambient: createHemisphereLight(),
    main: createPointLight(),
  };

}
