import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import setupCameras from './cameras.js';
import setupOnResize from './resize.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.5;
  app.scene.background = new Color( 0x23485c );
  app.controls.target.y = 1;

  const cameras = setupCameras( app );

  setupOnResize( app, cameras );

  return app;

}
