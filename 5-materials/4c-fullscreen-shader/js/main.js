import createApp from './app.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();
  app.start();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  setupAnimation( meshes );


  app.scene.add(

    meshes.fullscreenQuad,

  );

  console.log( 'Here\'s the ShaderMaterial you just created: ', materials.fullscreen );

}

initScene();
