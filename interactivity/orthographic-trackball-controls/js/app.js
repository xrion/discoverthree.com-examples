import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createCamera from './camera.js';

export default function createApp() {

  const app = new App( {
    container: '#scene-container',
    controls: {
      // we don't want to setup the default OrbitControls here
      setupOrbitControls: false,
    },
  } );

  createCamera( app );

  app.init();

  app.renderer.toneMappingExposure = 0.4;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  return app;

}
