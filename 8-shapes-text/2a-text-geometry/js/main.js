const app = new THREE_APP( '#container' );
let modelRef = null;

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );


  const lights = initLights( app.scene );

  // initMeshes( app.scene );
  // loadModels();
  loadFont( app.scene );

  app.start();

}

init();
