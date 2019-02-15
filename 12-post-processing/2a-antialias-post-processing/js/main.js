import {
  Color,
  WebGLRenderer
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.showStats = true;

  app.antialias = false;
  app.autoresize = false;

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 5, 10, 20 );

  app.controls.target.y = 0.5;

  app.start();

  const composers = initComposers( app.renderer, app.scene, app.camera );

  const renderer = app.renderer;

  const rendererAA = new WebGLRenderer( {
    powerPreference: app.powerPreference,
    alpha: app.alpha,
    antialias: true,
    stencil: app.stencil,
  } );

  rendererAA.gammaFactor = app.gammaFactor;
  rendererAA.gammaOutput = app.gammaOutput;

  // rendererAA.setPixelRatio( Math.min( window.devicePixelRatio, app.maxPixelRatio ) );
  // rendererAA.setSize( app.container.clientWidth, app.container.clientHeight );

  rendererAA.domElement.style.display = 'none';
  app.container.appendChild( rendererAA.domElement );

  const onResize = () => {

    const width = app.container.clientWidth;
    const height = app.container.clientHeight;

    const pixelRatio = Math.min( window.devicePixelRatio, app.maxPixelRatio );

    app.camera.aspect = width / height;

    app.camera.updateProjectionMatrix();

    renderer.setSize( width, height );
    renderer.setPixelRatio( pixelRatio );
    rendererAA.setSize( width, height );
    rendererAA.setPixelRatio( pixelRatio );

    const newWidth = Math.floor( width * pixelRatio ) || 1;
    const newHeight = Math.floor( height * pixelRatio ) || 1;
    composers.noAA.setSize( newWidth, newHeight );
    composers.ssaa.setSize( newWidth, newHeight );
    composers.taa.setSize( newWidth, newHeight );
    composers.fxaa.setSize( newWidth, newHeight );
    composers.smaa.setSize( newWidth, newHeight );

    composers.fxaaShader.uniforms.resolution.value.set( 1 / newWidth, 1 / newHeight );

  };

  onResize();

  window.addEventListener( 'resize', onResize );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.box );

  const models = await loadModels();
  // app.scene.add( models.parrot );

  initPostControl( app, renderer, rendererAA, composers );

  addPolarGridHelper( app.scene );

}

initScene();
