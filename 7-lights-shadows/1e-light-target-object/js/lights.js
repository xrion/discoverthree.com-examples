import {
  HemisphereLight,
  SpotLight,
} from './vendor/three/three.module.js';


function createHemisphereLight() {

  return new HemisphereLight( 0xddeeff, 0x0f0e0d, 1 );

}

function createSpotLight() {

  const spot = new SpotLight( 0xfffffc, 15, 0, Math.PI / 8, 0.5, 2 );

  spot.power = 5000; // 5000 lumens ~ 300 watt bulb

  spot.position.set( -12, 10, -12 );

  return spot;

}


export default function createLights() {

  return {
    ambient: createHemisphereLight(),
    main: createSpotLight(),
  };

}
