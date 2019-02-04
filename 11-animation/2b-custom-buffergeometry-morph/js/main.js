
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.camera.position.set( 0, 0, 10 );

  const meshes = initMeshes( app.scene );

  leftMorphControl( meshes.meshA );
  rightMorphControl( meshes.meshB );

  app.start();

}

init();
