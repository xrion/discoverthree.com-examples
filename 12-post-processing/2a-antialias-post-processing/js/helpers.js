import {
  PolarGridHelper,
} from './vendor/three/three.module.js';

function createPolarGridHelper() {

  const radius = 5;
  const radials = 16;
  const circles = 8;
  const divisions = 64;

  const polarGridHelper = new PolarGridHelper( radius, radials, circles, divisions );

  polarGridHelper.position.set( 0, -1, 0 );

  return polarGridHelper;

}

export default function createHelpers() {

  return {

    polarGridHelper: createPolarGridHelper(),

  };
}
