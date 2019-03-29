import pointOnSpiral from './utilities/pointOnSpiral.js';
import { Vector3 } from './vendor/three/three.module.js';

function spiralIn( mesh ) {

  const positions = mesh.geometry.attributes.position;
  const originalPositions = positions.clone();
  const spherePositions = mesh.geometry.attributes.spherePositions;
  const count = positions.count;

  let offset = 0;
  const startVertex = new Vector3();
  const endVertex = new Vector3();

  mesh.userData.onUpdate = ( delta ) => {

    // console.log( offset );

    for ( let i = 0; i < count; i++ ) {

      const fraction = count / i;

      startVertex.fromBufferAttribute( originalPositions, i );

      pointOnSpiral( startVertex, offset * fraction, endVertex );

      startVertex.lerp( endVertex, offset );

      startVertex.toArray( positions.array, i * 3 );

    }

    offset = ( offset + delta ) % 5;
    // offset += delta / 5;
    positions.needsUpdate = true;

  };

}


export default function setupAnimation( meshes ) {

  spiralIn( meshes.box );

}
