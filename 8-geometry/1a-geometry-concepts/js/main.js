import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 10 );

  app.start();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers( meshes );

  app.scene.add(

    meshes.box,
    meshes.sphere,

    helpers.boxFacesHelper,
    helpers.sphereFacesHelper,

  );

  console.log( 'Here\'s the box geometry you just created: ', geometries.box );
  console.log( '...and here\'s the sphere geometry you just created: ', geometries.sphere );

}

initScene();

