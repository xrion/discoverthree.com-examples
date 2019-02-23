import createApp from './app.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createLines from './lines.js';

function initScene() {

  const app = createApp();

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 5 );

  app.start();

  const geometries = createGeometries();
  const materials = createMaterials();
  const lines = createLines( geometries, materials );

  app.scene.add(

    lines.square,

  );

}

initScene();
