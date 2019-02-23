import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x222222 );

  app.camera.position.set( 15, 5, 20 );
  app.controls.target.x = 0.5;

  return app;

}
