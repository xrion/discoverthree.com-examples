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

  camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );

  // move the camera back a bit so that we can view the scene
  camera.position.set( 0, 0, 100 );

  // Set up camera controls
  controls = new THREE.OrbitControls( camera );
  controls.enableDamping = true; // gives a feeling of "weight" to the controls

  initMeshes();

  initLights();

  // create a WebGLRenderer and set its width and height
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

  renderer.setAnimationLoop( () => {

    update();
    render();

  } );

}

let boxMesh;
let octaMesh1;
let octaMesh2;
let octaMesh3;
let octaMesh4;
const group = new THREE.Group();

function initMeshes() {

  scene.add( group );

  const boxGeometry = new THREE.BoxBufferGeometry( 15, 15, 15 );
  const boxMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
  boxMesh = new THREE.Mesh( boxGeometry, boxMaterial );

  group.add( boxMesh );

  const ringGeometry = new THREE.RingBufferGeometry( 20, 15, 64 );
  const ringMaterials = new THREE.MeshPhongMaterial( { color: 0xff0000, side: THREE.DoubleSide } ); // red color
  const ringMesh = new THREE.Mesh( ringGeometry, ringMaterials );

  ringMesh.scale.set( 1.02, 1.02, 1.02 );

  group.add( ringMesh );

  const octaGeometry = new THREE.OctahedronBufferGeometry( 4 );
  const octaMaterial = new THREE.MeshPhongMaterial( { color: 0x0000ff } );
  octaMesh1 = new THREE.Mesh( octaGeometry, octaMaterial );

  octaMesh1.position.set( -20, 0, 0 ); // move 20 units to the left

  octaMesh2 = new THREE.Mesh( octaGeometry, octaMaterial );
  octaMesh2.position.set( 20, 0, 0 ); // move 20 units to the right
  octaMesh3 = new THREE.Mesh( octaGeometry, octaMaterial );

  octaMesh3.position.set( 0, 20, 0 ); // move 20 units up

  octaMesh4 = octaMesh3.clone();
  octaMesh4.position.set( 0, -20, 0 ); // move 20 units down

  group.add( octaMesh1, octaMesh2, octaMesh3, octaMesh4 );

}

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
  scene.add( ambientLight );

  const pointLight = new THREE.PointLight( 0xffffff, 1.0 );
  pointLight.position.set( 0, 0, 20 );
  scene.add( pointLight );

}

// perform any updates to the scene, called once per frame
// avoid heavy computation here
function update() {

  controls.update();

  octaMesh1.rotation.y += 0.01;
  octaMesh2.rotation.y += 0.01;
  octaMesh3.rotation.x += 0.01;
  octaMesh4.rotation.x += 0.01;

  boxMesh.rotation.x += 0.0033;
  boxMesh.rotation.y += 0.0033;
  boxMesh.rotation.z += 0.0033;

  group.rotation.z += 0.0025;

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
