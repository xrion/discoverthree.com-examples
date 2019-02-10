async function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 10, 5, 15 );

  const meshes = createMeshes();
  app.scene.add( meshes.sphere );

  // For BufferGeometry, we'll use a VertexNormalsHelper
  // instead of a FaceNormalsHelper, since normals are
  // defined per Vertex, rather than per Face
  // The normals are the red lines coming out of the sphere
  app.scene.add( new THREE.VertexNormalsHelper( meshes.sphere ) );

  const models = await loadModels();

  app.start();

}

initScene();
