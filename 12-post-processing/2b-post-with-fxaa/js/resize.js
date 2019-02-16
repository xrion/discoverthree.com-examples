export default function setupOnResize( app, composer ) {

  // We'll need to add an onResize function.
  // The app will take of updating the renderer's size and pizel ratio for us,
  // so we just to take these and calculate the new size for the composer
  app.onResize = () => {

    const pixelRatio = app.renderer.getPixelRatio();
    const size = app.renderer.getSize();

    const newWidth = Math.floor( size.width * pixelRatio ) || 1;
    const newHeight = Math.floor( size.height * pixelRatio ) || 1;
    composer.setSize( newWidth, newHeight );

  };

}
