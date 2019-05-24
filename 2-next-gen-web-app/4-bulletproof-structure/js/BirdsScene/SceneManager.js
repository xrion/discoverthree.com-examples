import {
  WEBGL,
} from './vendor/three/WebGL.js';

import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createLights from './lighting/createLights.js';

import setupModels from './models/setupModels.js';

import setupAnimation from './animation/setupAnimation.js';

export default class SceneManager {

  constructor( container ) {

    if ( !WEBGL.isWebGLAvailable() ) {

      console.error( 'SceneManager: Couldn\'t get up a WebGL context, exiting.' );
      return;

    }

    this.app = new App( {
      container,
    } );

  }

  async init() {

    this.app.init();

    this.app.scene.background = new Color( 0x8FBCD4 );
    this.app.camera.position.set( -1.5, 1.5, 6.5 );

    const lights = createLights();

    const models = await setupModels( this.app.scene );

    setupAnimation( models );

    this.app.scene.add(

      lights.ambient,
      lights.main,

      models.parrot,
      models.flamingo,
      models.stork,

    );

  }

  start() {

    this.app.start();

  }

}
