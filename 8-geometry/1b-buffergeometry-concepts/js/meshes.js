function createMeshes( scene ) {

  const sphere = initSphere( scene );

  return { sphere };

}

function initSphere( scene ) {

  const geometry = new THREE.SphereBufferGeometry( 1, 8, 8 );

  geometry.translate( 2, 0, 0 );

  const material = new THREE.MeshBasicMaterial( { color: 0x800080, wireframe: true } );

  const sphere = new THREE.Mesh( geometry, material );

  scene.add( sphere );

  // For BufferGeometry, we'll use a VertexNormalsHelper
  // instead of a FaceNormalsHelper, since normals are
  // defined per Vertex, rather than per Face
  // The normals are the red lines coming out of the sphere
  scene.add( new THREE.VertexNormalsHelper( sphere ) );

  console.log( '...and here\'s the sphere geometry you just created: ', geometry );

  return sphere;

}