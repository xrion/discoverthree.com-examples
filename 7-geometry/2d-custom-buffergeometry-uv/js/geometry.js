function createGeometry() {

  const geometry = new THREE.BufferGeometry();

  const vertices = new Float32Array( [
    // lower face
    -1, 1, 0, // vertex 0
    -1, -1, 0, // vertex 1
    1, -1, 0, // vertex 2

    // upper face
    1, -1, 0, // vertex 3
    1, 1, 0, // vertex 4
    -1, 1, 0, // vertex 5
  ] );

  geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

  // compute the normals automatically
  geometry.computeVertexNormals();

  const uvs = new Float32Array( [

    // lower face
    0, 1,
    0, 0,
    1, 0,

    // upper face
    1, 0,
    1, 1,
    0, 1,

  ] );

  geometry.addAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );

  console.log( 'Here\s the geometry you just created: ', geometry );

  return geometry;

}

function createGeometryIndexed() {

  const geometry = new THREE.BufferGeometry();

  const vertices = new Float32Array( [

    -1, 1, 0, // vertex 0
    -1, -1, 0, // vertex 1
    1, -1, 0, // vertex 2
    1, 1, 0, // vertex 3

  ] );

  geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

  // note that the indices for each face
  // are the same as the Face indices in our Geometry example
  const indices = [

    // lower face
    0, 1, 2,

    // upper face
    2, 3, 0,

  ];

  geometry.setIndex( indices );

  // compute the normals automatically
  geometry.computeVertexNormals();

  const uvs = new Float32Array( [

    // set one UV coordinate for each vertex
    0, 1,
    0, 0,
    1, 0,
    1, 1,

  ] );

  geometry.addAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );

  console.log( '...and here\s the indexed geometry you just created: ', geometry );

  return geometry;

}
