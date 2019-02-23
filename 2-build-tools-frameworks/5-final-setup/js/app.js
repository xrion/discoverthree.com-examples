import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  // All parameters are optional,
  // defaults are listed here
  const app = new App( {

    // ID or class string, or DOM element
    // This is the only argument we'll usually
    // supply, for clarity, although we can omit
    // this too to use the default 'scene-container
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
  } );

  // If you need a custom renderer, camera, scene or controls
  // set them up first, and then call app.init()

  // app.camera = new OrthographicCamera( ...
  // app.controls = new MapControls( ...

  app.init();

  // Setup renderer, scene, camera, controls

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );

  app.camera.position.set( -2.5, 2.5, 8 );
  app.controls.target.y = 1;

  return app;

}