import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import loadFonts from './fonts.js';
import createShapes from './shapes.js';
import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createLines from './lines.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x222222 );

  app.camera.position.set( 15, 5, 20 );
  app.controls.target.x = 0.5;

  app.start();

  const fonts = await loadFonts();

  const shapes = createShapes( fonts );
  const geometries = createGeometries( shapes );
  const materials = createMaterials();

  const lines = createLines( geometries, materials );

  setupAnimation( lines );

  console.log( 'Here\'s the font you just loaded: ', fonts.droidSerifRegular );
  console.log( 'Here\'s the shapes we created from the font: ', shapes );
  console.log( '...and here are the geometries we created from the shapes: ', geometries );
  console.log( 'Finally, we turned added the geometries to a Group ', lines.text );

  app.scene.add( lines.text );

}

initScene();
