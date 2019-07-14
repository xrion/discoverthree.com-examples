import {
  Color,
  // BasicShadowMap, // lowest quality
  // PCFShadowMap, // medium quality
  PCFSoftShadowMap, // highest quality
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  const app = new App( {
    container: '#scene-container',
    showStats: true,
  } );

  app.init();

  app.renderer.toneMappingExposure = 0.3;
  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = PCFSoftShadowMap;

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );


  return app;

}
