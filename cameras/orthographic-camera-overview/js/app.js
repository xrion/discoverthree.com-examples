import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp( cameras ) {

  const app = new App( { container: '#scene-container' } );

  app.camera = cameras.main;

  app.init();

  app.renderer.toneMappingExposure = 0.5;
  app.scene.background = new Color( 0x23485c );
  app.controls.target.y = 1;

  return app;

}
