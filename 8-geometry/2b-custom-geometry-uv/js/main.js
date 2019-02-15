import App from './vendor/App.js';

import createGeometries from './geometries.js';
import loadTextures from './textures.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import setupControls from './interactivity.js';

function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.camera.position.set( 0, 0, 5 );

  app.start();

  const geometries = createGeometries();
  const textures = loadTextures();

  const materials = createMaterials( textures );

  const meshes = createMeshes( geometries, materials );

  setupControls( materials );

  app.scene.add( meshes.quad );

  console.log( 'Here\'s the geometry you just created: ', geometries.geometry );
  console.log( '... and here\'s what it looks like after being converted to a BufferGeometry: ', geometries.bufferGeometry );

}

initScene();
