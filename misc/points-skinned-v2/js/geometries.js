import {
  BufferGeometry,
  Float32BufferAttribute,
  Vector3,
} from './vendor/three/three.module.js';

function morphDissolve( geometry ) {

  const positions = geometry.attributes.position;

  const dissolvePositions = [];

  const vertex = new Vector3();

  for ( let i = 0; i < positions.count; i++ ) {

    vertex.fromBufferAttribute( positions, i );

    vertex.x = 100 * Math.random();
    vertex.z = 100 * Math.random();

    vertex.toArray( dissolvePositions, dissolvePositions.length );

  }

  const dissolve = new Float32BufferAttribute( dissolvePositions, 3 );
  dissolve.name = 'dissolve';

  geometry.morphAttributes.position.push( dissolve );


}

export default function setupGeometry( models ) {

  const surface = models.dancer.getObjectByName( 'Alpha_Surface' ).geometry;
  const joints = models.dancer.getObjectByName( 'Alpha_Joints' ).geometry;

  surface.computeBoundingBox();

  const minY = surface.boundingBox.min.y;

  surface.userData.height = Math.abs( minY - surface.boundingBox.max.y );

  surface.translate( 0, -minY, 0 );
  joints.translate( 0, -minY, 0 );

  surface.morphAttributes.position = [];
  joints.morphAttributes.position = [];

  morphDissolve( surface );
  morphDissolve( joints );

  const surfaceClone = new BufferGeometry();
  surfaceClone.attributes.position = surface.attributes.position.clone();

  return {

    surface,
    surfaceClone,
    joints,

  };

}
