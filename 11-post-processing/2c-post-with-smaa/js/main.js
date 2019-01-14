function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 3, 5, 15 );

  const effects = initPostProcessing( app.renderer, app.scene, app.camera, app.container );

  // We'll need to add an onResize function.
  // The app will take of updating the renderer's size and pixel ratio for us,
  // so we just to take these and calculate the new size for the composer
  app.onResize = () => {

    const pixelRatio = app.renderer.getPixelRatio();
    const size = app.renderer.getSize();

    const newWidth = Math.floor( size.width * pixelRatio ) || 1;
    const newHeight = Math.floor( size.height * pixelRatio ) || 1;

    // SMAA is a "pass" rather than just a shader like fxaa
    // this means that when we resize the composer, the smaaPass
    // will get resized automatically
    effects.composer.setSize( newWidth, newHeight );

  }

  // call onResize once to set up the sizes
  app.onResize();

  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.scene, app.loader );

  // overwrite the app's default render function to use the
  // EffectComposer instead
  app.render = () => {

    // render using the composer instead of the app.renderer
    effects.composer.render();

  }

  app.start();

}

init();
