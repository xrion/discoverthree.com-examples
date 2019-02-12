
import {
  Color,
  SkeletonHelper,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

import createSkeleton from './skeleton.js';
import wireframeControl from './interactivity.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 10, 10, 15 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const skeleton = createSkeleton();

  const meshes = createMeshes( skeleton );
  app.scene.add( meshes.skinnedMesh );

  app.scene.add( new SkeletonHelper( meshes.skinnedMesh ) );

  wireframeControl( [ meshes.skinnedMesh.material ] );

}

initScene();
