// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let renderer;
let scene;
let controls;

function init() {

  // Get a reference to the container element that will hold our scene
  container = document.querySelector( '#container' );

  // create a Scene
  scene = new THREE.Scene();

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

function initCamera() {

  camera = new THREE.PerspectiveCamera(
    35, // FOV
    container.clientWidth / container.clientHeight, // aspect
    0.1, // near clipping plane
    100, // far clipping plane
  );

  // move the camera back a bit so that we can view the scene
  camera.position.set( 0, 0, 10 );

}

function initControls() {

  controls = new THREE.OrbitControls( camera, container );

  // gives a feeling of "weight" to the controls
  controls.enableDamping = true;
}

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
  scene.add( ambientLight );

  const pointLight = new THREE.PointLight( 0xffffff, 1.0 );

  // the "light-in-camera" pattern. This works very well with OrbitControls, since it
  // guarantees that a light is always shining on the target we are orbiting around
  camera.add( pointLight );
  scene.add( camera );

}

function initMeshes() {

  const boxGeometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
  const boxMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const boxMesh = new THREE.Mesh( boxGeometry, boxMaterial );

  scene.add( boxMesh );

  const ringGeometry = new THREE.RingBufferGeometry( 1.5, 2.0, 64 );
  const ringMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000, side: THREE.DoubleSide } ); // red color
  const ringMesh = new THREE.Mesh( ringGeometry, ringMaterial );

  ringMesh.scale.set( 1.02, 1.02, 1.02 );

  scene.add( ringMesh );

  const octaGeometry = new THREE.OctahedronBufferGeometry( 0.4 );
  const octaMaterial = new THREE.MeshStandardMaterial( { color: 0x0000ff } );

  const octaMesh1 = new THREE.Mesh( octaGeometry, octaMaterial );
  // move 2 units to the left
  octaMesh1.position.set( -2, 0, 0 );

  const octaMesh2 = new THREE.Mesh( octaGeometry, octaMaterial );
  // move 2 units to the right
  octaMesh2.position.set( 2, 0, 0 );

  const octaMesh3 = new THREE.Mesh( octaGeometry, octaMaterial );
  // move 2 units up
  octaMesh3.position.set( 0, 2, 0 );

  const octaMesh4 = octaMesh3.clone();
  // move 2 units down
  octaMesh4.position.set( 0, -2, 0 );

  scene.add( octaMesh1, octaMesh2, octaMesh3, octaMesh4 );

}

function initRenderer() {

  // create a WebGLRenderer and set its width and height
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

}

// perform any updates to the scene, called once per frame
// avoid heavy computation here
function update() {

  controls.update();

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
