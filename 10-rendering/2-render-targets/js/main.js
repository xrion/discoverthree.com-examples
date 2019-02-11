import {
  Color,
  PerspectiveCamera,
  Scene,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  // We need to create a separate scene and camera for the RenderTarget
  const sceneRT = new Scene();
  sceneRT.background = new Color( 0x800080 );

  // You'll need to set up a separate camera as well.
  // You COULD technically reuse the main camera,
  // but you'll probably run into problems
  // For example, weird things will happen with the zoom if we
  // use orbit controls
  const cameraRT = new PerspectiveCamera( 35, 1, 1, 100 );
  cameraRT.position.z = 5;

  const target = initRenderTarget();

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 3, 5, 6 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  sceneRT.add( lights.ambient.clone(), lights.main.clone() );

  const meshes = createMeshes( target.texture );
  app.scene.add( meshes.box );
  sceneRT.add( meshes.torusKnot );

  function renderToTarget( rt ) {

    app.renderer.render( sceneRT, cameraRT, rt, true );

  }

  // overwrite the app's default render function
  app.render = () => {

    renderToTarget( target );

    // now do the normal render
    app.renderer.render( app.scene, app.camera );

  };

}

initScene();
