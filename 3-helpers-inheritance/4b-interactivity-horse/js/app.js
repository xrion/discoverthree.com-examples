import {
  Color,
  Fog,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.5;
  app.scene.background = new Color( 0x00BFFF );

  // adding fog in the distance, the same color as the sky is
  // a cheap way to blur the boundary between ground and sky
  app.scene.fog = new Fog( 0x00BFFF, 115, 150 );

  app.camera.position.set( 10, 10, 20 );
  app.controls.target.y = 5;

  // disable keys in the orbit controls so that we can use
  // them to control our horse
  app.controls.enableKeys = false;

  return app;

}
