import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  const app = new App( {

    container: '#scene-container',
    showStats: true,
    autoresize: false,

    renderer: {
      antialias: false,
    },

  } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 5, 10, 20 );

  app.controls.target.y = 0.5;

  return app;

}
