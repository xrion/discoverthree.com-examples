import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createShapes from './shapes.js';

function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 15 );

  app.start();

  const geometries = createGeometries();
  const materials = createMaterials();
  const shapes = createShapes( geometries, materials );

  app.scene.add(
    shapes.lineSegments,
    shapes.line,
    shapes.lineLoop,
  );

}

initScene();
