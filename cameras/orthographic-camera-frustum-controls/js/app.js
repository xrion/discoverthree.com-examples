import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import setupCamera from './cameras.js';

import setupOnResize from './resize.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  // remember to create the custom camera before calling app.init!
  setupCamera( app );

  app.init();

  app.renderer.toneMappingExposure = 0.5;
  app.scene.background = new Color( 0x23485c );
  app.controls.target.y = 1;

  setupOnResize( app );

  return app;

}
