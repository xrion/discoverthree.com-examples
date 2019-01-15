const app = new THREE_APP( '#container' );
let modelRef = null;

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

   initLights( app.scene );

  const texture = initCanvasTexture();

  initMeshes( app.scene, texture );

  app.start();

}

init();
