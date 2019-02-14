export default function setupOnResize( app, cameras ) {

  // the app will automatically resize app.camera, but since we have two cameras here
  // we'll need to do this manually
  app.autoResize = false;

  function onResize() {

    const newWidth = app.container.clientWidth;
    const newHeight = app.container.clientHeight;

    cameras.overview.aspect = newWidth / newHeight;
    cameras.overview.updateProjectionMatrix();

    cameras.main.left = -newWidth / 2;
    cameras.main.right = newWidth / 2;
    cameras.main.top = newHeight / 2;
    cameras.main.bottom = -newHeight / 2;

    cameras.main.updateProjectionMatrix();

    app.renderer.setSize( newWidth, newHeight );
    app.renderer.setPixelRatio( Math.min( window.devicePixelRatio, app.maxPixelRatio ) );

  }

  window.addEventListener( 'resize', onResize );

}
