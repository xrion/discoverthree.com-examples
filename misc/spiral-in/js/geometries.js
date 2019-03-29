import {
  BoxBufferGeometry,
  Float32BufferAttribute,
} from './vendor/three/three.module.js';


function createSphereAttributes( geometry, radius = 1 ) {

  const positions = geometry.attributes.position;
  const count = positions.count;

  const spherePositions = [];

  for ( let i = 0; i < count; i++ ) {

    const x = positions.getX( i );
    const y = positions.getY( i );
    const z = positions.getZ( i );

    spherePositions.push(

      x * Math.sqrt( 1 - ( y * y / 2 ) - ( z * z / 2 ) + ( y * y * z * z / 3 ) ) * radius,
      y * Math.sqrt( 1 - ( z * z / 2 ) - ( x * x / 2 ) + ( z * z * x * x / 3 ) ) * radius,
      z * Math.sqrt( 1 - ( x * x / 2 ) - ( y * y / 2 ) + ( x * x * y * y / 3 ) ) * radius,

    );

  }

  geometry.attributes.spherePositions = new Float32BufferAttribute( spherePositions, 3 );

}


export default function createGeometries() {

  let box = new BoxBufferGeometry( 2, 2, 2, 2, 2, 2 );
  box = box.toNonIndexed();

  createSphereAttributes( box, 2 );

  console.log( box );

  return {

    box,

  };

}
