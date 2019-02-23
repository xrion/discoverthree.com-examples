import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  // app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 10, 10, 10 );

  app.controls.rotateSpeed = 0.25;
  app.controls.zoomSpeed = 0.5;
  app.controls.enableDamping = true;
  app.controls.enablePan = false;

  return app;

}
