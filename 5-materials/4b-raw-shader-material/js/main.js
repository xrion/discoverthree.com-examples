import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createMaterials from './materials.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  app.start();

  const meshes = createMeshes();
  app.scene.add( meshes.box );

  const materials = createMaterials( app.camera, meshes.box );
  meshes.box.material = materials.rawShaderMaterial;

}

initScene();
