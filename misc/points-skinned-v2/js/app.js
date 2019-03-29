import {
  PCFSoftShadowMap,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = PCFSoftShadowMap;

  app.renderer.toneMappingExposure = 0.6;

  app.camera.position.set( 0, 1, 8 );
  app.controls.target.y = 1;

  return app;

}
