import {
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  SphereBufferGeometry,
} from './vendor/three/three.module.js';

import pointOnSphericalSpiral from './utility/pointOnSphericalSpiral.js';

function createInstancedSpiral() {

  const offsets = [];
  const instanceIndex = [];

  const instancedGeometry = new InstancedBufferGeometry();

  const sphereGeo = new SphereBufferGeometry( 0.015, 16, 16 );

  instancedGeometry.index = sphereGeo.index;
  instancedGeometry.attributes.position = sphereGeo.attributes.position;

  for ( let i = -5000; i < 5000; i++ ) {

    const t = ( 4000 + i ) * ( 5000 / 4000 );

    const position = pointOnSphericalSpiral( t );
    offsets.push( position.x, position.y, position.z );
    instanceIndex.push( ( Math.abs( i ) % 10 * 0.1 ) );
  }

  const offsetAttribute = new InstancedBufferAttribute( new Float32Array( offsets ), 3 );
  instancedGeometry.addAttribute( 'offset', offsetAttribute );

  const indexAttribute = new InstancedBufferAttribute( new Float32Array( instanceIndex ), 1 );
  instancedGeometry.addAttribute( 'instanceIndex', indexAttribute );

  return instancedGeometry;

}

export default function createGeometries() {

  return {

    instancedSpiral: createInstancedSpiral(),

  };

}
