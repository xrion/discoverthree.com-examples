import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.camera.position.set( 0.5, 0.5, 0.5 );

  // app.controls.autoRotate = true;
  // app.controls.autoRotateSpeed = -0.2;

  return app;

}
