import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 3, 5, 15 );

  app.start();

  const effects = initPostProcessing( app.renderer, app.scene, app.camera, app.container );

  // We'll need to add an onResize function.
  // The app will take of updating the renderer's size and pixel ratio for us,
  // so we just to take these and calculate the new size for the composer
  app.onResize = () => {

    const pixelRatio = app.renderer.getPixelRatio();
    const size = app.renderer.getSize();

    const newWidth = Math.floor( size.width * pixelRatio ) || 1;
    const newHeight = Math.floor( size.height * pixelRatio ) || 1;

    effects.composer.setSize( newWidth, newHeight );
    effects.passes.fxaaPass.uniforms.resolution.value.set( 1 / newWidth, 1 / newHeight );

  };

  // call onResize once to set up the sizes
  app.onResize();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.box );

  const models = await loadModels();
  app.scene.add( models.parrot );

  // overwrite the app's default render function to use the
  // EffectComposer instead
  app.render = () => {

    // render using the composer instead of the app.renderer
    effects.composer.render();

  };

}

initScene();
