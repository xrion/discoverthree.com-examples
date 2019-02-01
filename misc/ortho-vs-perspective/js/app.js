// the camera and renderer are used in more than one function so we'll declare them first
let orthographicCamera;
let perspectiveCamera;
let orthographicControls;
let perspectiveControls;
let currentCamera;
let renderer;
let scene;

// frustum size for orthographic camera
const frustumSize = 15;

const info = document.querySelector( '#selected-camera' );
const button = document.querySelector( '#switch-camera' );
const container = document.querySelector( '#container' );

// The init function will do all of the heavy lifting to create and animate the scene
function init() {

  // Create the Scene
  scene = new THREE.Scene();

  initCameras();

  initLights();

  initBoxes();

  // set up the renderer
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

  // set up a simple animation loop
  renderer.setAnimationLoop( () => {

    renderer.render( scene, currentCamera );


  } );

}

function initLights() {

  // create a global illumination light
  const ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
  scene.add( ambientLight );

  // create an omnidirectional light
  const pointLight = new THREE.PointLight( 0xffffff, 1.0 );
  pointLight.position.set( 0, 0, 200 );
  scene.add( pointLight );

}

function initBoxes() {

  // create a box
  const boxGeometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
  const boxMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } );

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  boxMaterial.color.convertSRGBToLinear();

  const box = new THREE.Mesh( boxGeometry, boxMaterial );
  box.position.set( 0, 0, 0 );

  for ( let i = 0; i <= 5; i++ ) {

    const nextBox = box.clone();
    nextBox.position.set( 0.5 * i, 0.2 * i, -( 12 + i * 5 ) );
    scene.add( nextBox );

  }

}

function initCameras() {

  // common parameters
  const near = 10; // the near clipping plane
  const far = 100; // the far clipping plane

  // Perspective camera parameters
  const fov = 35; // AKA "Field of View"
  const aspect = 1; // the container is always square in this example

  perspectiveCamera = new THREE.PerspectiveCamera( fov, aspect, near, far );
  perspectiveCamera.position.set( 3.5, 4, 5 );

  // Orthographic camera parameters
  const left = -frustumSize / 2;
  const right = frustumSize / 2;
  const top = frustumSize / 2;
  const bottom = -frustumSize / 2;

  orthographicCamera = new THREE.OrthographicCamera( left, right, top, bottom, near, far );
  orthographicCamera.position.set( 4, 2.3, 3.7 );

  currentCamera = perspectiveCamera;

  perspectiveControls = new THREE.OrbitControls( perspectiveCamera );
  perspectiveControls.target.set( 3, 3, 0 );
  perspectiveControls.update();

  orthographicControls = new THREE.OrbitControls( orthographicCamera );
  orthographicControls.target.set( 3.75, 1.9, 0 );
  orthographicControls.update();
  orthographicControls.enabled = false;

}

// set up automatic resizing - much simpler than normal since the
// container is always square!
function onWindowResize() {


  renderer.setSize( container.clientWidth, container.clientHeight );
}

// add an event listener to the window which will fire when it changes size
window.addEventListener( 'resize', onWindowResize );

// switch between the two cameras when clicking / tapping
function switchCamera() {

  if ( currentCamera === perspectiveCamera ) {

    currentCamera = orthographicCamera;
    info.innerHTML = 'Orthographic Camera';

    perspectiveControls.enabled = false;
    orthographicControls.enabled = true;

  } else {

    currentCamera = perspectiveCamera;
    info.innerHTML = 'Perspective Camera';

    orthographicControls.enabled = false;
    perspectiveControls.enabled = true;

  }
}

button.addEventListener( 'click', switchCamera );

init();
