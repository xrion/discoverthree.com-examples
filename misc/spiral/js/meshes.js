function createSpiral() {

  const spiral = new THREE.Group();

  const geometry = new THREE.SphereBufferGeometry( 0.015, 12, 12 );
  const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

  const sphere = new THREE.Mesh( geometry, material );

  for ( let i = -500; i < 500; i++ ) {

    const nextSphere = sphere.clone();
    const position = pointOnShericalSpiral( i );
    nextSphere.position.copy( position );
    spiral.add( nextSphere );

  }

  spiral.userData.onUpdate = ( delta ) => {

    spiral.rotation.x -= delta / 8;
    spiral.rotation.y += delta / 6;
    spiral.rotation.z -= delta / 5;

  };

  return spiral;

}

function createMeshes() {

  return {
    spiral: createSpiral(),
  };

}
