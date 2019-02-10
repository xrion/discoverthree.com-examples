
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 10, 10, 15 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.skinnedMesh );

  app.scene.add( new THREE.SkeletonHelper( meshes.skinnedMesh ) );

  wireframeControl( [ meshes.skinnedMesh.material ] );

  app.start();

}

initScene();
