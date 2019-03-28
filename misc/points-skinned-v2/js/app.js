import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.camera.position.set( 0, 1, 4 );
  app.controls.target.y = 1;

  return app;

}
