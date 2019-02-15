import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import setupRenderTarget from './renderTarget.js';

import createLights from './lights.js';
import createMaterials from './materials.js';
import createGeometries from './geometries.js';
import createMeshes from './meshes.js';

import setupAnimation from './animation.js';

function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.4;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 3, 5, 6 );

  const RT = setupRenderTarget( app );

  app.start();

  const lights = createLights();

  const materials = createMaterials( RT.target.texture );
  const geometries = createGeometries();

  const meshes = createMeshes( geometries, materials );

  setupAnimation( meshes );

  app.scene.add(
    lights.ambient,
    lights.main,

    meshes.box,
  );

  RT.scene.add(

    // remember that due to the way the Scene Graph
    // works, adding things to a second scene will remove them
    // from the first. So we need to clone the lights to have
    // them in bth scenes
    lights.ambient.clone(),
    lights.main.clone(),

    meshes.torusKnot,

  );

}

initScene();
