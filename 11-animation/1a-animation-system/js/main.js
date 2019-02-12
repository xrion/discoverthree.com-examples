import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import setupAnimation from './animation.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 15, 15, 15 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  setupAnimation( meshes.box );

  app.scene.add( meshes.box );
}

initScene();
