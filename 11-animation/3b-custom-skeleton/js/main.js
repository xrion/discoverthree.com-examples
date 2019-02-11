
import {
  Color,
  SkeletonHelper,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 10, 10, 15 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.skinnedMesh );

  app.scene.add( new SkeletonHelper( meshes.skinnedMesh ) );

  wireframeControl( [ meshes.skinnedMesh.material ] );

  app.start();

}

initScene();
