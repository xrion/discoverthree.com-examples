import {
  // Color,
  PCFSoftShadowMap,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.15;
  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = PCFSoftShadowMap;

  app.camera.position.set( 0, 2.5, 7 );
  app.controls.target.set( 0, 1.5, 0 );
  app.controls.minDistance = 5;
  app.controls.maxDistance = 15;

  return app;

}
