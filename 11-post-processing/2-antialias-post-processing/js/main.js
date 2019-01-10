function init() {

  const app = new THREE_APP( '#container' );

  app.antialias = false;
  app.autoresize = false;

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 90, 225, 350 );

  app.controls.target.y = 50;

  const composers = initComposers( app.renderer, app.scene, app.camera );

  const renderer = app.renderer;

  const rendererAA = new THREE.WebGLRenderer( {
    powerPreference: app.powerPreference,
    alpha: app.alpha,
    antialias: true,
    stencil: app.stencil,
  } );

  // rendererAA.setPixelRatio( Math.min( window.devicePixelRatio, app.maxPixelRatio ) );
  // rendererAA.setSize( app.container.clientWidth, app.container.clientHeight );

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

  }

  onResize();

  window.addEventListener( 'resize', onResize );

  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.loader, app.scene );

  app.start();

  initControls( app, renderer, rendererAA, composers );

  addPolarGridHelper( app.scene );

}

init();
