import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import loadFonts from './fonts.js';
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

  const fonts = await loadFonts();

  const geometries = createGeometries( fonts );
  const materials = createMaterials();

  const meshes = createMeshes( geometries, materials );

  console.log( 'Here\'s the font you just loaded: ', fonts.droidSerifRegular );

  app.scene.add( meshes.discover );

}

initScene();
