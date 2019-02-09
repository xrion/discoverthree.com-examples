function createMeshes( scene, sceneRT, target ) {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const material = new THREE.MeshStandardMaterial( {
    map: target.texture,
  } );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

  const geometryRT = new THREE.TorusKnotBufferGeometry( 0.75, 0.2, 128, 32 );
  const materialRT = new THREE.MeshStandardMaterial();
  const meshRT = new THREE.Mesh( geometryRT, materialRT );

  sceneRT.add( meshRT );

  // this won't work since our App is only calling
  // onUpdate functions for objects in the main app.scene
  // meshRT.userData.onUpdate = ( delta ) => {
  //   meshRT.rotation.x -= delta / 2;
  //   meshRT.rotation.y -= delta / 2;
  //   meshRT.rotation.z += delta / 2;
  // }

  // so we can hijack the onUpdate function from a different
  // function. It's a little hacky, but it's fine for this simple example
  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y -= delta / 5;

    meshRT.rotation.x -= delta / 2;
    meshRT.rotation.y -= delta / 2;
    meshRT.rotation.z += delta / 2;
  };

}
