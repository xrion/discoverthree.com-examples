import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.6;

  app.camera.position.set( 5, 2.5, 8 );

  // app.controls.target.y = 1;

  app.controls.autoRotate = true;
  app.controls.autoRotateSpeed = -0.1;

  return app;

}
