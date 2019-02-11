import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  const meshes = createMeshes();
  app.scene.add( meshes.quad );

  const rawShaderMaterial = createShaderMaterial();
  meshes.quad.material = rawShaderMaterial;

  meshes.quad.userData.onUpdate = ( delta ) => {

    rawShaderMaterial.uniforms.time.value += delta;

  };

  app.start();

}

initScene();
