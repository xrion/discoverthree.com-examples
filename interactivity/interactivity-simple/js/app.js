import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.5;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 5, 10, 15 );

  // disable keys in the orbit controls so that we can use
  // them to control our box
  app.controls.enableKeys = false;

  return app;

}
