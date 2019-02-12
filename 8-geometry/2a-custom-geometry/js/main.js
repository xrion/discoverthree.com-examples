import App from './vendor/App.module.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

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

  console.log( 'Here\'s the geometry you just created: ', geometries.geometry );
  console.log( '... and here\'s what it looks like after being converted to a BufferGeometry: ', geometries.bufferGeometry );

  app.scene.add( meshes.tri );

}

initScene();
