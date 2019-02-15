import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  setupRenderer( app.renderer );

  app.camera.position.set( 0, 2.5, 7 );
  app.controls.target.set( 0, 1.5, 0 );
  app.controls.minDistance = 5;
  app.controls.maxDistance = 15;

  app.start();

  const lights = createLights();
  app.scene.add(
    lights.ambient,
    lights.main,
    lights.main.target,
    lights.top,
    lights.top.target,
    lights.diffuse,
    lights.diffuse.target,
  );

  const textures = initTextures();
  const materials = createMaterials( textures );
  const meshes = createMeshes( materials );

  app.scene.add( meshes.floor, meshes.backWall );

  const models = await loadModels( textures.envMap );
  app.scene.add( models.dancer );

  setupAnimation( models.dancer, lights );

}

initScene();
