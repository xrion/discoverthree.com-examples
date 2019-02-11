import {
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  SphereBufferGeometry,
} from './vendor/three/three.module.js';

function createSpiral( material ) {

  const offsets = [];
  const instanceIndex = [];

  const instancedSphericalGeo = new InstancedBufferGeometry();

  const sphereGeo = new SphereBufferGeometry( 0.015, 16, 16 );

  instancedSphericalGeo.index = sphereGeo.index;
  instancedSphericalGeo.attributes.position = sphereGeo.attributes.position;

  for ( let i = -5000; i < 5000; i++ ) {

    const t = ( 4000 + i ) * ( 5000 / 4000 );

    const position = pointOnSphericalSpiral( t );
    offsets.push( position.x, position.y, position.z );
    instanceIndex.push( ( Math.abs( i ) % 10 * 0.1 ) );
  }

  const offsetAttribute = new InstancedBufferAttribute( new Float32Array( offsets ), 3 );
  instancedSphericalGeo.addAttribute( 'offset', offsetAttribute );

  const indexAttribute = new InstancedBufferAttribute( new Float32Array( instanceIndex ), 1 );
  instancedSphericalGeo.addAttribute( 'instanceIndex', indexAttribute );

  const spiral = new Mesh( instancedSphericalGeo, material );
  spiral.scale.multiplyScalar( 0.6 );

  return spiral;

}

export default function createMeshes( material ) {

  return { spiral: createSpiral( material ) }

}
