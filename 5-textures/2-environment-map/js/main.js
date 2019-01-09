const app = new THREE_APP( '#container' );
let modelRef = null;

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 2, 1, 2 );

  // prevent the controls from zooming so far that the camera
  // is inside the model
  app.controls.minDistance = 2;

  const lights = initLights();
  const envMaps = loadEnvironments();

  // initMeshes();
  loadModels( lights, envMaps );
  app.start();

}

init();
