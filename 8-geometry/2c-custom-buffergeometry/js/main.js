import App from './vendor/App.module.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';
import createHelpers from './helpers.js';

import setupMaterialControl from './interactivity.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.camera.position.set( 0, 0, 10 );

  app.start();

  const geometries = createGeometries();

  const materials = createMaterials();
  setupMaterialControl( materials );

  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers( meshes );

  console.log( 'Here\'s the non-ndexed BufferGeometry you just created: ', geometries.nonIndexed );
  console.log( '...and here\'s the indexed BufferGeometry you just created: ', geometries.indexed );

  app.scene.add(
    meshes.leftQuad,
    meshes.rightQuad,
    helpers.vertexNormalsHelper,
  );

}

initScene();
