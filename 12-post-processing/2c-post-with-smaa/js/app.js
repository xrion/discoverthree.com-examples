import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  const app = new App( {

    container: '#scene-container',

    renderer: {

      // we should disable gamma correction for
      // post processing, since gamma correction
      // needs to always be done as the final step
      // We "should" be adding a gamma correction pass
      // as the final pass
      // For simplicity we'll skip that in these examples

      // gammaOutput: false,

    },

  } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 3, 5, 15 );

  app.controls.autoRotate = true;

  return app;

}
