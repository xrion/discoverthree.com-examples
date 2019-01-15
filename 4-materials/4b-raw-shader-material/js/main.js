const app = new THREE_APP( '#container' );

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );


  const cube = initMeshes();
  const rawShaderMaterial = createShaderMaterial( app.camera, cube );
  cube.material = rawShaderMaterial;


  app.start();

}

init();
