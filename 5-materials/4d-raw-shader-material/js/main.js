import createApp from './app.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

async function initScene() {

  const app = createApp();
  app.start();

  const geometries = createGeometries();
  const materials = createMaterials( app.camera );
  const meshes = createMeshes( geometries, materials );

  // now that we've created the mesh,
  // we can replace the temp matrix in the material
  materials.purple.uniforms.modelMatrix.value = meshes.box.matrixWorld;

  app.scene.add(

    meshes.box,

  );

  console.log( 'Here\'s the RawShaderMaterial you just created: ', materials.purple );

}

initScene();
