import {
  Color,
  Fog,
  OrthographicCamera,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

function createMainApp() {

  const mainApp = new App( { container: '#scene-container' } );

  mainApp.init();

  mainApp.renderer.toneMmainAppingExposure = 0.5;
  mainApp.scene.background = new Color( 0x00BFFF );

  // adding fog in the distance, the same color as the sky is
  // a cheap way to blur the boundary between ground and sky
  mainApp.scene.fog = new Fog( 0x00BFFF, 115, 150 );

  mainApp.camera.position.set( 10, 10, 20 );
  mainApp.controls.target.y = 5;

  // disable keys in the orbit controls so that we can use
  // them to control our horse
  mainApp.controls.enableKeys = false;

  mainApp.start();

  return mainApp;


}

function createGUIApp() {

  const guiApp = new App( {

    container: '#gui-container',
    autoResize: false,

  } );

  const width = guiApp.container.clientWidth;
  const height = guiApp.container.clientHeight;

  guiApp.camera = new OrthographicCamera( -width / 2, width / 2, height / 2, -height / 2, 0.1, 200 );

  // position the camera above looking down
  // remember that it doesn't matter how far above we
  // put the camera, so long as the objects fall inside the
  // frustum they will remain the same size.
  guiApp.camera.position.y = 100;

  guiApp.init();

  guiApp.scene.background = new Color( 0x0000ff );

  // the GUI doesn't need camera controls
  guiApp.controls.enabled = false;

  guiApp.start();

  return guiApp;

}

export default function createApps() {

  return {

    main: createMainApp(),
    gui: createGUIApp(),

  };

}
