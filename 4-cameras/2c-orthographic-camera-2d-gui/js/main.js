import createApps from './apps.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

import loadModels from './models.js';

import setupAnimation from './animation.js';
import setupControls from './interactivity.js';


async function initScene() {

  const apps = createApps();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels( materials );

  const helpers = createHelpers();

  setupAnimation( models );
  setupControls( models );

  apps.main.scene.add(

    lights.ambient,
    lights.main,

    meshes.ground,

    models.horse.main,

  );

  apps.gui.scene.add(

    models.horse.gui,

    helpers.grid,

  );


}

initScene();