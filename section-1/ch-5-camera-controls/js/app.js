// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let controls;
let renderer;
let scene;
let mesh;

function init() {

  // Get a reference to the container element that will hold our scene
  container = document.querySelector( '#container' );

  initScene();
  initCamera();
  initControls();
  initLights();
  initMeshes();
  initRenderer();

  renderer.animate( () => {

    update();
    render();

  } );

}

function initScene() {

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x8FBCD4 );

}

function initCamera() {

  camera = new THREE.PerspectiveCamera(
    35, // FOV
    container.clientWidth / container.clientHeight, // aspect
    0.1, // near clipping plane
    100, // far clipping plane
  );

  camera.position.set( 0, 0, 10 );

}

function initControls() {

  controls = new THREE.OrbitControls( camera, container );

}

function initLights() {

  const key = new THREE.DirectionalLight( 0xffffff, 2.0 );
  key.position.set( 30, 10, 30 );

  const fill = new THREE.DirectionalLight( 0xffffff, 0.5 );
  fill.position.set( -30, 10, 30 );

  const back = new THREE.DirectionalLight( 0xffffff, 1.0 );
  back.position.set( 300, 30, -30 );

  const ambient = new THREE.AmbientLight( 0xffffff );

  scene.add( key, fill, back, ambient );

}

function initMeshes() {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const textureLoader = new THREE.TextureLoader();

  const texture = textureLoader.load( 'textures/uv_test.png' );
  texture.anisotropy = 16;

  const material = new THREE.MeshStandardMaterial( {
    color: 0xffffff,
    map: texture,
  } );

  mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

}

function initRenderer() {

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

}

// perform any updates to the scene, called once per frame
// avoid heavy computation here
function update() {

  // Don't delete this function!

}

// render, or 'draw a still image', of the scene
function render() {

  renderer.render( scene, camera );

}

// a function that will be called every time the window gets resized.
// It can get called a lot, so don't put any heavy computation in here!
function onWindowResize() {

  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize( container.clientWidth, container.clientHeight );

}

window.addEventListener( 'resize', onWindowResize );

// call the init function to set everything up
init();
