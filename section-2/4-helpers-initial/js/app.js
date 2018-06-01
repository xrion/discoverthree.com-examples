
// this vector will be reused so that we don't create a new one for each point
const vec = new THREE.Vector3();
const a = 0.009; // spiral param

// formula for a spherical spiral here: http://mathworld.wolfram.com/SphericalSpiral.html
function pointOnShericalSpiral( t ) {

  const c = Math.atan( a * t );
  const cosC = Math.cos( c );

  const x = Math.cos( t ) * cosC;
  const y = Math.sin( t ) * cosC;
  const z = -Math.sin( c );


  return vec.set( x, y, z );

}

// declare any variables used in multiple functions here
let container;
let scene;
let camera;
let renderer;
let spiral;

// The init function will do all of the heavy lifting to create and animate the scene
function init() {

  container = document.querySelector( '#container' );

  // Create the Scene
  scene = new THREE.Scene();

  initCameras();

  spiral = initSpiral();
  scene.add( spiral );

  addArrowHelper();

  addAxesHelper();

  addBoxHelper();

  addBox3Helper();

  addGridHelper();

  addPolarGridHelper();

  addPlaneHelper();

  // set up the renderer
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

  // set up a simple animation loop
  renderer.setAnimationLoop( () => {

    renderer.render( scene, camera );

    spiral.rotation.x -= 0.0025;
    spiral.rotation.y += 0.0025;
    spiral.rotation.z -= 0.0025;

  } );

}

function initSpiral() {

  const group = new THREE.Group();

  const geometry = new THREE.SphereBufferGeometry( 0.015, 12, 12 );
  const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
  const sphere = new THREE.Mesh( geometry, material );

  for ( let i = -500; i < 500; i++ ) {

    const nextSphere = sphere.clone();
    const position = pointOnShericalSpiral( i );
    nextSphere.position.copy( position );
    group.add( nextSphere );
  }

  return group;

}

function initCameras() {

  const near = 1; // the near clipping plane
  const far = 100; // the far clipping plane
  const fov = 50; // AKA "Field of View"
  const aspect = container.clientWidth / container.clientHeight;

  camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
  camera.position.set( 0, 0, 5 );

  const controls = new THREE.OrbitControls( camera );

}

function addArrowHelper() { /* TODO */ }

function addAxesHelper() { /* TODO */ }

function addBoxHelper() { /* TODO */ }

function addBox3Helper() { /* TODO */ }

function addGridHelper() { /* TODO */ }

function addPolarGridHelper() { /* TODO */ }

function addPlaneHelper() { /* TODO */ }

// set up automatic resizing - much simpler than normal since the
// container is always square!
function onWindowResize() {

  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( container.clientWidth, container.clientHeight );

}

// add an event listener to the window which will fire when it changes size
window.addEventListener( 'resize', onWindowResize );

init();
