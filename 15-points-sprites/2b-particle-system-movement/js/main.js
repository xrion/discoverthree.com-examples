import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createGeometries from './geometries.js';

import loadTextures from './textures.js';
import createMaterials from './materials.js';

import createPoints from './points.js';

import setupAnimation from './animation.js';

function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x34456f );
  app.camera.position.set( 0, 0, 10 );

  app.start();

  const geometries = createGeometries();

  const textures = loadTextures();
  const materials = createMaterials( textures );

  const points = createPoints( geometries, materials );

  setupAnimation( points )

  app.scene.add( points.sphere );



}

initScene();
