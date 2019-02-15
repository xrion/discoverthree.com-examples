import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadTextures from './textures.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  app.start();

  const geometries = createGeometries();

  const textures = loadTextures();
  const materials = createMaterials( textures );
  const meshes = createMeshes( geometries, materials );

  app.scene.add(

    meshes.box,

  );

  console.log( 'Here\'s the ShaderMaterial you just created: ', materials.bamboo );


}

initScene();
