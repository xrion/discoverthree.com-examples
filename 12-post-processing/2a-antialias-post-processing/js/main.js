function initScene() {

  const app = new THREE_APP( '#container' );

  app.showStats = true;

  app.antialias = false;
  app.autoresize = false;

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 5, 10, 20 );

  app.controls.target.y = 0.5;

  const composers = initComposers( app.renderer, app.scene, app.camera );

  const renderer = app.renderer;

  const rendererAA = new THREE.WebGLRenderer( {
    powerPreference: app.powerPreference,
    alpha: app.alpha,
    antialias: true,
    stencil: app.stencil,
  } );

  rendererAA.gammaFactor = app.gammaFactor;
  rendererAA.gammaOutput = app.gammaOutput;

  // rendererAA.setPixelRatio( Math.min( window.devicePixelRatio, app.maxPixelRatio ) );
  // rendererAA.setSize( app.container.clientWidth, app.container.clientHeight );

  rendererAA.domElement.style.display = 'none';
  app.container.appendChild( rendererAA.domElement );

  const onResize = () => {

    const width = app.container.clientWidth;
    const height = app.container.clientHeight;

    const pixelRatio = Math.min( window.devicePixelRatio, app.maxPixelRatio );

    app.camera.aspect = width / height;

    app.camera.updateProjectionMatrix();

    renderer.setSize( width, height );
    renderer.setPixelRatio( pixelRatio );
    rendererAA.setSize( width, height );
    rendererAA.setPixelRatio( pixelRatio );

    const newWidth = Math.floor( width * pixelRatio ) || 1;
    const newHeight = Math.floor( height * pixelRatio ) || 1;
    composers.noAA.setSize( newWidth, newHeight );
    composers.ssaa.setSize( newWidth, newHeight );
    composers.taa.setSize( newWidth, newHeight );
    composers.fxaa.setSize( newWidth, newHeight );
    composers.smaa.setSize( newWidth, newHeight );

    composers.fxaaShader.uniforms.resolution.value.set( 1 / newWidth, 1 / newHeight );

  };

  onResize();

  window.addEventListener( 'resize', onResize );

  createLights( app.scene );
  createMeshes( app.scene );
  loadModels( app.scene );

  app.start();

  initPostControl( app, renderer, rendererAA, composers );

  addPolarGridHelper( app.scene );

}

initScene();
