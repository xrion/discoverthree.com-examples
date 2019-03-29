import {
  BoxBufferGeometry,
  BufferGeometry,
  CylinderBufferGeometry,
} from './vendor/three/three.module.js';

export default function setupGeometry( models ) {

  const surface = models.dancer.getObjectByName( 'Alpha_Surface' ).geometry;
  const joints = models.dancer.getObjectByName( 'Alpha_Joints' ).geometry;

  surface.computeBoundingBox();

  const minY = surface.boundingBox.min.y;

  surface.userData.height = Math.abs( minY - surface.boundingBox.max.y );

  surface.translate( 0, -minY, 0 );
  joints.translate( 0, -minY, 0 );

  const surfaceClone = new BufferGeometry();
  surfaceClone.attributes.position = surface.attributes.position.clone();

  const truncatedCone = new CylinderBufferGeometry( 10, 0, 100, 64, 1 );
  truncatedCone.translate( 0, -50, 0 );

  const box = new BoxBufferGeometry( 2, 2, 2, 4, 4, 4 );

  return {

    surface,
    surfaceClone,
    joints,
    truncatedCone,
    box,

  };

}
