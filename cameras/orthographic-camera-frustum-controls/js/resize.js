export default function setupOnResize( app ) {

  // the app's auto resizing is only set up for PerspectiveCamera
  app.autoResize = false;

  function onResize() {

    const newWidth = app.container.clientWidth;
    const newHeight = app.container.clientHeight;

    app.camera.left = -newWidth / 2;
    app.camera.right = newWidth / 2;
    app.camera.top = newHeight / 2;
    app.camera.bottom = -newHeight / 2;

    app.camera.updateProjectionMatrix();

    app.renderer.setSize( newWidth, newHeight );
    app.renderer.setPixelRatio( window.devicePixelRatio );

  }

  window.addEventListener( 'resize', onResize );


}
