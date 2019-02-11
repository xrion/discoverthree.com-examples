import {
  Color,
  GridHelper,
  OrthographicCamera,
} from './vendor/three/three.module.js';

export default function initCamera( app ) {

function initGUI() {

  const appGUI = new THREE_APP( '#gui-container' );

  const width = appGUI.container.clientWidth;
  const height = appGUI.container.clientHeight;

  appGUI.camera = new OrthographicCamera( -width / 2, width / 2, height / 2, -height / 2, 0.1, 200 );

  // position the camera above looking down
  // remember that it doesn't matter how far above we
  // put the camera, so long as the objects fall inside the
  // frustum they will remain the same size.
  appGUI.camera.position.y = 100;

  // the app's auto resizing is only set up for PerspectiveCamera
  appGUI.autoResize = false;

  appGUI.init();

  appGUI.scene.background = new Color( 0x0000ff );

  // add a gridhelper to help visualize the position.
  // In a real app you would probably need to do some calculations
  // to make sure that the size of the grid's squares have meaning
  // here, we've just made it big enough to fill the whole GUI
  const gridHelper = new GridHelper( 300, 10, 10 );
  appGUI.scene.add( gridHelper );

  // the GUI doesn't need camera controls
  appGUI.controls.enabled = false;

  appGUI.start();

  return appGUI;

}
