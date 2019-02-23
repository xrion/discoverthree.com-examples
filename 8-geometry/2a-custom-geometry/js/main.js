import createApp from './app.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import setupControls from './interactivity.js';

function initScene() {

  const app = createApp();
  app.start();

  const geometries = createGeometries();

  const materials = createMaterials();

  const meshes = createMeshes( geometries, materials );

  setupControls( materials );

  app.scene.add( meshes.tri );

  console.log( 'Here\'s the geometry you just created: ', geometries.geometry );
  console.log( '... and here\'s what it looks like after being converted to a BufferGeometry: ', geometries.bufferGeometry );

}

initScene();
