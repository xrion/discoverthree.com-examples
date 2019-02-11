
import {
  VertexNormalsHelper,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.camera.position.set( 0, 0, 10 );

  app.start();

  const meshes = createMeshes();
  app.scene.add( meshes.leftQuad, meshes.rightQuad );

  // add a helper to show normals in the left square.
  // red lines are normals
  app.scene.add( new VertexNormalsHelper( meshes.leftQuad ) );

}

initScene();
