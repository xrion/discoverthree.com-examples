function createGeometry() {

  const geometry = new THREE.Geometry();

  geometry.vertices.push(
    new THREE.Vector3( -1, 1, 0 ), // vertex 0
    new THREE.Vector3( -1, -1, 0 ), // vertex 1
    new THREE.Vector3( 1, -1, 0 ), // vertex 2
    new THREE.Vector3( 1, 1, 0 ), // vertex 3
  );

  // create a face made up of 3 vertices. Faces are always triangles
  // The face references the vertices by their position in
  // the geometry.vertices array
  geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );

  geometry.faces.push( new THREE.Face3( 2, 3, 0 ) );

  // the face's normal is initialzed as (0, 0, 0)
  // either set it manually, or use this function to calculate
  // smooth normals automatically
  geometry.computeFaceNormals();

  // for UVs, we need to create one UV mapping per vertex per material index
  // geometry.faceVertexUvs[ 0 ][ faceIndex ][ vertexIndex ]

  // each UV is a Vector2, mapping the point in 3D to the 2D UV coordinate
  // on the texture.
  // Here, we only have one material so material index is always 0

  // first face
  geometry.faceVertexUvs[ 0 ].push( [
    new THREE.Vector2( 0, 1 ),
    new THREE.Vector2( 0, 0 ),
    new THREE.Vector2( 1, 0 ),
  ] );

  // second face
  geometry.faceVertexUvs[ 0 ].push( [
    new THREE.Vector2( 1, 0 ),
    new THREE.Vector2( 1, 1 ),
    new THREE.Vector2( 0, 1 ),
  ] );


  geometry.uvsNeedUpdate = true;


  console.log( 'Here\'s the geometry you just created: ', geometry );

  const bufferGeometry = new THREE.BufferGeometry().fromGeometry( geometry );

  console.log( '... and here\'s what it looks like after being converted to a BufferGeometry: ', bufferGeometry );

  // never use a Geometry directly, always convert it to a BufferGeometry first
  return bufferGeometry;

}
