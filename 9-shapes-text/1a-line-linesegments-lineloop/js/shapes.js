import {
  Line,
  LineLoop,
  LineSegments,
} from './vendor/three/three.module.js';

// Top Left, RED: LineSegments (drawn with gl.LINE_STRIP)
// every pair of vertices is a line.
// For n vertices, n / 2 lines
// A -> B
// C -> D
function createLineSegments( geometries, materials ) {


  const lineSegments = new LineSegments( geometries.square, materials.red );
  lineSegments.position.set( -2, 1.5, 0 );

  return lineSegments;

}

// Top Right, WHITE: Line (drawn with gl.LINES)
// lines created between every pair of vertices
// for n vertices, n-1 lines
// A -> B
// B -> C
// c -> D
function createLine( geometries, materials ) {

  const line = new Line( geometries.square, materials.white );
  line.position.set( 2, 1.5, 0 );

  return line;

}

// Bottom, BLACK: LineLoop (drawn with gl.LINE_LOOP)
// lines created between every pair of vertices, and connects
// the last vertex back to the first
// for n vertices, n
// A -> B
// B -> C
// c -> D
// D -> A
function createLineLoop( geometries, materials ) {

  const lineLoop = new LineLoop( geometries.square, materials.black );
  lineLoop.position.set( 0, -1.5, 0 );

  return lineLoop;


}

export default function initShapes( geometries, materials ) {

  return {
    lineSegments: createLineSegments( geometries, materials ),
    line: createLine( geometries, materials ),
    lineLoop: createLineLoop( geometries, materials ),

  };

}
