function initShapes() {

  const geometry = new THREE.BufferGeometry();

  const vertices = new Float32Array( [
    -1, -1, 0, // vertex A
    1, -1, 0, // vertex B
    1, 1, 0, // vertex C
    -1, 1, 0, // vertex D
  ] );

  // itemSize = 3 because there are 3 components (x, y, z) per vertex
  geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

  // Top Left, RED: THREE.LineSegments (drawn with gl.LINE_STRIP)
  // every pair of vertices is a line.
  // For n vertices, n / 2 lines
  // A -> B
  // C -> D

  const lineSegments = new THREE.LineSegments( geometry, new THREE.LineBasicMaterial( { color: 0xff0000 } ) );
  lineSegments.position.set( -2, 1.5, 0 );

  // Top Right, WHITE: THREE.Line (drawn with gl.LINES)
  // lines created between every pair of vertices
  // for n vertices, n-1 lines
  // A -> B
  // B -> C
  // c -> D

  const line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
  line.position.set( 2, 1.5, 0 );

  // Bottom, BLACK: THREE.LineLoop (drawn with gl.LINE_LOOP)
  // lines created between every pair of vertices, and connects
  // the last vertex back to the first
  // for n vertices, n
  // A -> B
  // B -> C
  // c -> D
  // D -> A

  const lineLoop = new THREE.LineLoop( geometry, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
  lineLoop.position.set( 0, -1.5, 0 );

  return { lineSegments, line, lineLoop };

}
