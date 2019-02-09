function createMeshes( scene ) {

  const cube = initCube( scene );
  const sphere = initSphere( scene );

  return { cube, sphere };

}

function initCube( scene ) {

  const geometry = new THREE.BoxGeometry( 2, 2, 2 );

  const material = new THREE.MeshBasicMaterial( { color: 0x800080, wireframe: true } );

  const cube = new THREE.Mesh( geometry, material );
  cube.position.x = -2;

  scene.add( cube );

  // yellow lines represent "normals" of each face
  // that is, the direction that is perpendicular to the face
  scene.add( new THREE.FaceNormalsHelper( cube ) );

  console.log( 'Here\'s the cube geometry you just created: ', geometry );

  return cube;

}

function initSphere( scene ) {

  const geometry = new THREE.SphereGeometry( 1, 8, 8 );

  // this time we'll translate the geometry instead of the mesh
  // the visible effect will be the same, but there
  // are important differences in doing it this way,
  // in particular, it's MUCH less efficient
  geometry.translate( 2, 0, 0 );

  const material = new THREE.MeshBasicMaterial( { color: 0x800080, wireframe: true } );

  const sphere = new THREE.Mesh( geometry, material );

  scene.add( sphere );

  // Note that, even though the normals are defined per Face,
  // when it comes to actually renderering the Geometry it gets
  // converted to a BufferGeometry, and normals are calculated
  // per Vertex instead
  scene.add( new THREE.FaceNormalsHelper( sphere ) );

  console.log( '...and here\'s the sphere geometry you just created: ', geometry );

  return sphere;

}
