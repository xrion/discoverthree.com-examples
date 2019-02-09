function initShapes() {

  const geometry = new THREE.BufferGeometry();

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
  geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

  const dashedMaterial = new THREE.LineDashedMaterial( {
    color: 0xff0000,
    scale: 1, // scale of the dashes
    dashSize: 0.5,
    gapSize: 0.5,
  } );

  const square = new THREE.Line( geometry, dashedMaterial );

  // this is required for LineDashedMaterial to work
  square.computeLineDistances();

  return { square };

}
