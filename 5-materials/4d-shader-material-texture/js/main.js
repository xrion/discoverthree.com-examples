const app = new App( '#scene-container' );

import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  app.init();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  const shaderMaterial = createShaderMaterial();

  const meshes = createMeshes( shaderMaterial );
  app.scene.add( meshes.box );

  app.start();

}

initScene();
