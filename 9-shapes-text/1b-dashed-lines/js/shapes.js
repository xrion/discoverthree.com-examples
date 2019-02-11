import {
  BufferAttribute,
  BufferGeometry,
  Line,
  LineDashedMaterial,
} from './vendor/three/three.module.js';

function initShapes() {

  const geometry = new BufferGeometry();

  const vertices = new Float32Array( [
    -1, -1, 0, // vertex A
    1, -1, 0, // vertex B
    1, 1, 0, // vertex C
    -1, 1, 0, // vertex D

    // LineDashedMaterial doesn't play well with LineLoop,
    // so to create a square we'll have to add a 5th vertex
    -1, -1, 0, // vertex E (same as vertex A)
  ] );

  // itemSize = 3 because there are 3 components (x, y, z) per vertex
  geometry.addAttribute( 'position', new BufferAttribute( vertices, 3 ) );

  const dashedMaterial = new LineDashedMaterial( {
    color: 0xff0000,
    scale: 1, // scale of the dashes
    dashSize: 0.5,
    gapSize: 0.5,
  } );

  const dashedSquare = new Line( geometry, dashedMaterial );

  // this is required for LineDashedMaterial to work
  dashedSquare.computeLineDistances();

  return { dashedSquare };

}
