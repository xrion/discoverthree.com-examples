import {
  Color,
  SkeletonHelper,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 2, 2, 2 );

  app.controls.target.y = 0.75;

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const models = await loadModels();
  app.scene.add( models.cesiumMan );

  app.scene.add( new SkeletonHelper( models.cesiumMan ) );

  wireframeControl( [ models.cesiumMan.children[ 1 ].material ] );

  app.start();

}

initScene();
