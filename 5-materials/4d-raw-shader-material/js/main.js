import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

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
