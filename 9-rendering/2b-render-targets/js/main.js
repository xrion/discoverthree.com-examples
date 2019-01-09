function init() {

  const app = new THREE_APP( '#container' );

  // We need to create a separate scene and camera for the RenderTarget
  const sceneRT = new THREE.Scene();
  sceneRT.background = new THREE.Color( 0x800080 );

  // You'll need to set up a separate camera as well.
  // You COULD technically reuse the main camera,
  // but you'll probably run into problems
  // For example, weird things will happen with the zoom if we
  // use orbit controls
  const cameraRT = new THREE.PerspectiveCamera( 35, 1, 1, 100 );
  cameraRT.position.z = 5;

  const target = initRenderTarget();

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 3, 5, 6 );

  // app.renderer.autoClear = false;


  initLights( app.scene, sceneRT );
  initMeshes( app.scene, sceneRT, target );
  // loadModels();

  function renderToTarget( rt ) {

    // set the renderer and camera to the render target's size
    // app.renderer.setSize( rt.width, rt.height );

    app.renderer.render( sceneRT, cameraRT, rt, true );

    // reset the renderer's size
    // app.renderer.setSize( app.container.clientWidth, app.container.clientHeight );


  }

  // overwrite the app's default render function
  app.render = () => {

    // app.renderer.clear();

    renderToTarget( target );

    // now do the normal render
    app.renderer.render( app.scene, app.camera );

  }

  app.start();

}

init();
