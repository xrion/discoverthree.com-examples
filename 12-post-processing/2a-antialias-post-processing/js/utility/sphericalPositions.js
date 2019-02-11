import {
  Math as MathUtils,
  Spherical,
  Vector3,
} from './vendor/three/three.module.js';

export default function createSphericalPositions() {

  const initialPos = new Vector3( -1, -1, 0 );

  const positions = [];

  const spherical = new Spherical().setFromVector3( initialPos );

  let yPos = initialPos.y;

  for ( let i = 0; i < 2000; i++ ) {


    spherical.theta += Math.random() * Math.PI;
    spherical.radius = MathUtils.randFloat( 6, 8 );

    const position = new Vector3().setFromSpherical( spherical );
    yPos += 0.004;

    position.y = yPos;

    positions.push( {
      vec: position,
      rot: Math.PI / 2 + spherical.theta,
    } );

  }

  return positions;

}
