import createApp from './app.js';

import createLights from './lights.js';
import createMaterials from './materials.js';
import createHelpers from './helpers.js';

import loadModels from './models.js';

import setupControls from './interactivity.js';
import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();
  app.start();

  const lights = createLights();

  const materials = createMaterials();

  const models = await loadModels( materials );

  const helpers = createHelpers( models );

  setupControls( materials );
  setupAnimation( models );

  app.scene.add(

    lights.ambient,
    lights.main,

    models.cesiumMan,

    helpers.skeletonHelper,

  );

  console.log( 'Here\'s the model we just loaded: ', models.cesiumMan );

  const bones = models.cesiumMan.children[ 0 ];
  const skinnedMesh = models.cesiumMan.children[ 1 ];

  console.log( 'The cesiumMan model that we just loads consists of two parts.' );

  console.log( 'The first is the array of bones that make up the skeleton: ', bones );

  console.log( 'The second part is the skinned mesh, the position of which is controlled by the bones": ', skinnedMesh );

  console.log( 'Finally, here are the AnimationClips that control the bones',  models.cesiumMan.animations );

}

initScene();
