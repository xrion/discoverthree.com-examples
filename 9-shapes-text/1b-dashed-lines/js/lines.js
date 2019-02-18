import {
  BufferAttribute,
  BufferGeometry,
  Line,
  LineDashedMaterial,
} from './vendor/three/three.module.js';

// Top Right, WHITE: Line (drawn with gl.LINES)
// lines created between every pair of vertices
// for n vertices, n-1 lines
// A -> B
// B -> C
// C -> D
// D -> E (Same as A)
function createLine( geometries, materials ) {

  const line = new Line( geometries.square, materials.dashed );

  // this is required for LineDashedMaterial to work
  line.computeLineDistances();

  return line;

}

export default function initShapes( geometries, materials ) {

  return {

    square: createLine( geometries, materials ),

  };

}
