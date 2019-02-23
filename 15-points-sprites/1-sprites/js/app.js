import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.25;
  app.camera.position.set( -20, 0, -20 );

  return app;

}
