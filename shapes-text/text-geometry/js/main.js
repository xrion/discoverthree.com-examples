import createApp from './app.js';

import loadFonts from './fonts.js';
import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

async function initScene() {

  const app = createApp();
  app.start();

  const fonts = await loadFonts();

  const geometries = createGeometries( fonts );
  const materials = createMaterials();

  const meshes = createMeshes( geometries, materials );

  console.log( 'Here\'s the font you just loaded: ', fonts.droidSerifRegular );

  app.scene.add( meshes.discover );

}

initScene();
