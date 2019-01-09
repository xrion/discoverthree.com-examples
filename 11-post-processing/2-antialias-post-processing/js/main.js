function init() {

  const app = new THREE_APP( '#container' );

  app.antialias = false;
  app.autoresize = false;

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 60, 150, 300 );

  app.controls.target.y = 50;

  const composers = initComposers( app.renderer, app.scene, app.camera );

  const renderer = app.renderer;

  const rendererAA = new THREE.WebGLRenderer( {
    powerPreference: app.powerPreference,
    alpha: app.alpha,
    antialias: true,
    stencil: app.stencil,
  } );

  rendererAA.setPixelRatio( Math.min( window.devicePixelRatio, app.maxPixelRatio ) );
  rendererAA.setSize( app.container.clientWidth, app.container.clientHeight );

  rendererAA.domElement.style.display = 'none';
  app.container.appendChild( rendererAA.domElement );



  const onResize = () => {

    const width = app.container.clientWidth;
    const height =  app.container.clientHeight;

    const pixelRatio = Math.min( window.devicePixelRatio, app.maxPixelRatio );

    app.camera.aspect = width / height;

    app.camera.updateProjectionMatrix();

    renderer.setSize( width, height );
    renderer.setPixelRatio( pixelRatio );
    rendererA.setSize( width, height );
    rendererA.setPixelRatio( pixelRatio );

    const newWidth = Math.floor( width * pixelRatio ) || 1;
    const newHeight = Math.floor( height * pixelRatio ) || 1;
    composer.setSize( newWidth, newHeight );

  }

  window.addEventListener( 'reset', onResize );

  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.loader, app.scene );

  app.start();

  initControls( app, renderer, rendererAA, composers );

}

init();
