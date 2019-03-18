import {
  TextBufferGeometry,
} from './vendor/three/three.module.js';

function createTextGeometry( fonts ) {

  const textGeometry = new TextBufferGeometry( 'Discover three.js! \n :)', {

    font: fonts.droidSerifRegular,
    size: 1,
    height: 0.1,
    curveSegments: 12,
    bevelEnabled: false,
    bevelThickness: 0.25,
    bevelSize: 0.5,
    bevelSegments: 5,

  } );

  // We want to center the mesh (horizontally) on the screen.
  // However, the geometry is created with it's "pivot" or zero point
  // at the bottom edge of the first letter, so we'll need to translate the geometry

  // To do this, compute the bounding box
  textGeometry.computeBoundingBox();

  // then offset the geometry by half the width of the box
  const centerOffset = -0.5 * ( textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x );
  textGeometry.translate( centerOffset, 0, 0 );

  return textGeometry;

}

export default function createGeometries( fonts ) {

  return {

    text: createTextGeometry( fonts ),

  };

}
