import createApp from './app.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createLines from './lines.js';

function initScene() {

  const app = createApp();
  app.start();

  const geometries = createGeometries();
  const materials = createMaterials();
  const lines = createLines( geometries, materials );

  app.scene.add(

    lines.square,

  );

}

initScene();
