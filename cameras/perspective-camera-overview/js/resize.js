export default function setupOnResize( app, cameras ) {

  // the app will automatically resize app.camera, but since we have two cameras here
  // we'll need to do this manually
  app.autoResize = false;

  function onResize() {

    cameras.main.aspect = app.container.clientWidth / app.container.clientHeight;
    cameras.main.updateProjectionMatrix();

    cameras.overview.aspect = app.container.clientWidth / app.container.clientHeight;
    cameras.overview.updateProjectionMatrix();

    app.renderer.setSize( app.container.clientWidth, app.container.clientHeight );
    app.renderer.setPixelRatio( window.devicePixelRatio );

  }

  window.addEventListener( 'resize', onResize );

}
