function createMeshes() {

  const geometry = new THREE.BoxBufferGeometry( 0.5, 0.5, 0.5 );
  const material = new THREE.MeshStandardMaterial( { color: 0x800080 } );

  // create the first mesh, initially positioned at (0, 0, 0)
  const meshA = new THREE.Mesh( geometry, material );

  // set the position of the first mesh.
  // every other mesh will be positioned relative to this
  meshA.position.x = 0.5;

  // create 9 copies for a total of 10 meshes.
  // Each of these is also positioned at (0, 0, 0) to start with
  const meshB = meshA.clone();
  const meshC = meshA.clone();
  const meshD = meshA.clone();
  const meshE = meshA.clone();
  const meshF = meshA.clone();
  const meshG = meshA.clone();
  const meshH = meshA.clone();
  const meshI = meshA.clone();
  const meshJ = meshA.clone();

  // now add each mesh as a child of the previous mesh
  // the position, rotation, and scale of each mesh is relative
  // to it's parent
  meshA.add( meshB );
  meshB.add( meshC );
  meshC.add( meshD );
  meshD.add( meshE );
  meshE.add( meshF );
  meshF.add( meshG );
  meshG.add( meshH );
  meshH.add( meshI );
  meshI.add( meshJ );

  // move each mesh one unit away from us in the Z axis
  // however, the movement does NOT take places in "world space"
  // instead, it takes place in the coordinate system of the mesh's parent
  // this means that each mesh gets moved one unit in z away from it's parent's position
  meshB.position.set( 0, 0, -1 );
  meshC.position.set( 0, 0, -1 );
  meshD.position.set( 0, 0, -1 );
  meshE.position.set( 0, 0, -1 );
  meshF.position.set( 0, 0, -1 );
  meshG.position.set( 0, 0, -1 );
  meshH.position.set( 0, 0, -1 );
  meshI.position.set( 0, 0, -1 );
  meshJ.position.set( 0, 0, -1 );

  [ meshA, meshB, meshC, meshD, meshE, meshF, meshG, meshH, meshI, meshJ ].forEach( ( mesh ) => {

    mesh.userData.onUpdate = ( delta ) => {

      mesh.rotation.z += delta / 2;

    };

  } );

  return { meshA };

}
