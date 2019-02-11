import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  app.start();

  const shaderMaterial = createShaderMaterial();

  const meshes = createMeshes( shaderMaterial );
  app.scene.add( meshes.box );


}

initScene();
