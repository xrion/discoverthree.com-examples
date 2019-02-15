import App from './vendor/App.js';

import createMeshes from './meshes.js';

function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;

  app.camera.position.set( 10, 10, 10 );

  app.controls.rotateSpeed = 0.25;
  app.controls.zoomSpeed = 0.5;
  app.controls.enableDamping = true;
  app.controls.enablePan = false;

  app.start();

  const materials = createMaterials();
  const meshes = createMeshes( materials.spiral );

  meshes.spiral.userData.onUpdate = ( delta ) => {

    materials.spiral.uniforms.time.value -= delta / 30;

  };

  app.scene.add( meshes.spiral );

}

initScene();
