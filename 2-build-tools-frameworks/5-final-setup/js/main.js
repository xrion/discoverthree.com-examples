import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';
import loadTextures from './textures.js';

import setupAnimation from './animation.js';

async function initScene() {

  // Step 1: create your app

  // All spec arguments are optional,
  // defaults are listed here
  const spec = {

    // ID or class string, or DOM element
    // This is the only argument we'll usual
    container: '#scene-container',

    autoResize: true,

    // also requires Stats.js to be loaded to work
    showStats: false,

    renderer: {
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: true,

      // override the three.js default of 2.0 which was set for
      // historical reasons but is not correct
      gammaFactor: 2.2,

      // should nearly always be true, unless using postprocessing or GPGPU
      gammaOutput: true,

      // set this to a value less than 3 to increase performance on low power mobile devices with high pixel ratio
      maxPixelRatio: Infinity,

      // should always be true when using a physically based workflow
      physicallyCorrectLights: true,
    },
    camera: {
      fov: 35,
      near: 1,
      far: 1000,
    },
    controls: {
      // set to false to skip setting up controls
      setup: true,
      autoUpdate: true,
    },
  };

  const app = new App( spec );

  // Remember, you will usually just need this line!
  // const app = new App( { container: '#scene-container' } );

  // Step 2: create custom app.renderer, app.camera, app.scene or app.controls
  // and then call app.init()

  // app.camera = new OrthographicCamera( ...

  app.init();

  // Step 3: setup renderer, scene, camera, controls
  // In general this is just a couple of lines,
  // we'll move them into separate function in cases where
  // they are getting longer (e.g. setupRenderer, setupControl,...)

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );

  app.camera.position.set( -2.5, 2.5, 8 );
  app.controls.target.y = 1;

  // Step 4: start the render loop
  // You usually want to do this as early as possible to make sure that
  // you users are not staring at a black screen!
  app.start();

  // Step 5: create or load thing you want to add
  // to your scene: lights, meshes, load models etc.

  const lights = createLights();

  const geometries = createGeometries();

  const textures = loadTextures();
  const materials = createMaterials( textures );
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels( materials );

  // Step 6: setup animations
  setupAnimation( meshes, models );

  // Step 7: add everything to your scene
  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.box,

    models.parrot,
    models.flamingo,
    models.stork,

  );

  // Step 9: Sit back and enjoy your beautiful creation!

}

initScene();
