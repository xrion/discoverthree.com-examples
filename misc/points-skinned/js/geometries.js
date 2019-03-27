import {
  Float32BufferAttribute,
  Vector3,
} from './vendor/three/three.module.js';

function morphTwist( geometry ) {

  const positions = geometry.attributes.position;

  const twistAPositions = [];
  const twistBPositions = [];
  const twistCPositions = [];

  const direction = new Vector3( 0, 0, 1 ).normalize();
  const vertexA = new Vector3();
  const vertexB = new Vector3();
  const vertexC = new Vector3();

  for ( let i = 0; i < positions.count; i++ ) {

    vertexA.fromBufferAttribute( positions, i );
    vertexB.copy( vertexA );
    vertexC.copy( vertexA );

    vertexB.x *= 2;
    vertexB.y *= 2;

    vertexC.z *= 2;

    vertexA.applyAxisAngle( direction, Math.PI * vertexA.x * 2 ).toArray( twistAPositions, twistAPositions.length );
    vertexB.applyAxisAngle( direction, Math.PI * vertexB.x * 2 ).toArray( twistBPositions, twistBPositions.length );
    vertexC.applyAxisAngle( direction, -Math.PI * vertexC.x ).toArray( twistCPositions, twistCPositions.length );

  }

  const twistA = new Float32BufferAttribute( twistAPositions, 3 );
  twistA.name = 'twistA';

  const twistB = new Float32BufferAttribute( twistBPositions, 3 );
  twistB.name = 'twistB';

  const twistC = new Float32BufferAttribute( twistCPositions, 3 );
  twistC.name = 'twistC';

  geometry.morphAttributes.position.push( twistA, twistB, twistC );

}

export default function setupGeometry( models ) {

  const surface = models.dancer.getObjectByName( 'Alpha_Surface' ).geometry;
  const joints = models.dancer.getObjectByName( 'Alpha_Joints' ).geometry;

  surface.morphAttributes.position = [];
  joints.morphAttributes.position = [];

  morphTwist( surface );
  morphTwist( joints );

  return {

    surface,
    joints,

  };

}
