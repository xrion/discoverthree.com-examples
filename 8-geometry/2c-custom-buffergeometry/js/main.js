
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  // app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 10 );

  const meshes = createMeshes();
  app.scene.add( meshes.leftQuad, meshes.rightQuad );

  // add a helper to show normals in the left square.
  // red lines are normals
  app.scene.add( new THREE.VertexNormalsHelper( meshes.leftQuad ) );

  app.start();

}

initScene();
