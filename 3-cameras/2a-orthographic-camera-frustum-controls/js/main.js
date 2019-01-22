function init() {

  const app = new THREE_APP( '#container' );

  // remember to setup the camera before calling app.init
  initCamera( app );

  app.init();

  app.scene.background = new THREE.Color( 0x23485c );

  // app.controls.target.y = 1;

  initLights( app.scene );
  initMeshes( app.scene );



  app.start();

}

init();
