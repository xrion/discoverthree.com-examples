import createApp from './app.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

async function initScene() {

  const app = createApp();
  app.start();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  app.scene.add(

    meshes.box,

  );

  console.log( 'Here\'s the ShaderMaterial you just created: ', materials.purple );


}

initScene();
