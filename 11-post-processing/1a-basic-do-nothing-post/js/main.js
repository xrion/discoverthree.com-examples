function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 3, 5, 6 );

  const composer = initPostProcessing( app.renderer, app.scene, app.camera );

  // We'll need to add an onResize function.
  // The app will take of updating the renderer's size and pizel ratio for us,
  // so we just to take these and calculate the new size for the composer
  app.onResize = () => {

    const pixelRatio = app.renderer.getPixelRatio();
    const size = app.renderer.getSize();

    const newWidth = Math.floor( size.width * pixelRatio ) || 1;
    const newHeight = Math.floor( size.height * pixelRatio ) || 1;
    composer.setSize( newWidth, newHeight );

  }

  initLights( app.scene );
  initMeshes( app.scene );
  // loadModels();

  // overwrite the app's default render function to use the
  // EffectComposer instead
  app.render = () => {

    // render using the composer instead of the app.renderer
    composer.render();

  }

  app.start();

}

init();
