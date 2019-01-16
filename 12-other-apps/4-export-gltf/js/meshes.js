function initMeshes( scene ) {

  const loopGeometry = new THREE.TorusKnotBufferGeometry( 2, 0.25, 128, 64, 1, 1 );
  const loopMaterial = new THREE.MeshStandardMaterial( {
    color: 0x000000,
  } );

  const loop = new THREE.Mesh( loopGeometry, loopMaterial );

  scene.add( loop );

  const sphereGeo = new THREE.SphereBufferGeometry( 1.25, 64, 64 );
  const sphereMat = new THREE.MeshStandardMaterial( {
    color: 0xffffff,
  } );

  const sphere = new THREE.Mesh( sphereGeo, sphereMat );
  sphere.position.set( 0.75, 0, 0 );

  sphere.castShadow = true;
  sphere.receiveShadow = true;

  loop.add( sphere );

  // we'll set the loop to animating using our usual method,
  // however there is no way to export this to glTF format,
  // so we'll need to recreate the animation manually after
  // loading
  loop.userData.onUpdate = ( delta ) => {

    loop.rotation.y += delta / 2;
    loop.rotation.z -= delta / 4;

  };

  return loop;

}
