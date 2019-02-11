import {
  Color,
  Fog,
  SpotLightHelper,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1; // default is 1

  app.scene.background = new Color( 0x8FBCD4 );
  app.scene.fog = new Fog( 0x8FBCD4, 200, 230 );
  app.camera.position.set( -20, 30, 50 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const lightHelper = new SpotLightHelper( lights.main );
  app.scene.add( lightHelper );

  const meshes = createMeshes();
  app.scene.add( meshes.plinth, meshes.ground, meshes.targets.middle, meshes.targets.front, meshes.targets.rear );

  setupLightTargetControls( lights, lightHelper, meshes.targets );

  app.start();

}

initScene();
