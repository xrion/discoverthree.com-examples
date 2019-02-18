import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createLines from './lines.js';

function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 15 );

  app.start();

  const geometries = createGeometries();
  const materials = createMaterials();
  const lines = createLines( geometries, materials );

  app.scene.add(

    lines.lineSegments,
    lines.line,
    lines.lineLoop,

  );

}

initScene();
