export default function setupOnResize( app, composers ) {

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

}
