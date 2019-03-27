import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.camera.position.set( 0, 2, 8 );

  return app;

}
