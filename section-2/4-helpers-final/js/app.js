
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
  camera.position.set( 0, 0, 8 );

  const controls = new THREE.OrbitControls( camera );

}

function addArrowHelper() {

  // all our arrows will start at the origin
  const origin = new THREE.Vector3( 0, 0, 0 );
  const length = 1; // this just so happens to be the radius of our sphere
  const headLength = 0.25; // length of arrow head
  const headWidth = 0.25; // width of arrow head

  // We'll create 6 arrows pointing in various directions
  const dir1 = new THREE.Vector3( 1, 1, 1 ).normalize();
  const dir2 = new THREE.Vector3( 1, 1, -1 ).normalize();
  const dir3 = new THREE.Vector3( 1, -1, 1 ).normalize();
  const dir4 = new THREE.Vector3( 1, -1, -1 ).normalize();
  const dir5 = new THREE.Vector3( -1, 1, 1 ).normalize();
  const dir6 = new THREE.Vector3( -1, 1, -1 ).normalize();
  const dir7 = new THREE.Vector3( -1, -1, 1 ).normalize();
  const dir8 = new THREE.Vector3( -1, -1, -1 ).normalize();

  const arrowHelper1 = new THREE.ArrowHelper( dir1, origin, length, 0xff0000, headLength, headWidth );
  const arrowHelper2 = new THREE.ArrowHelper( dir2, origin, length, 0x0000ff, headLength, headWidth );
  const arrowHelper3 = new THREE.ArrowHelper( dir3, origin, length, 0x00ff00, headLength, headWidth );
  const arrowHelper4 = new THREE.ArrowHelper( dir4, origin, length, 0x00ffff, headLength, headWidth );
  const arrowHelper5 = new THREE.ArrowHelper( dir5, origin, length, 0xff00ff, headLength, headWidth );
  const arrowHelper6 = new THREE.ArrowHelper( dir6, origin, length, 0xffff00, headLength, headWidth );
  const arrowHelper7 = new THREE.ArrowHelper( dir7, origin, length, 0xff0f0f, headLength, headWidth );
  const arrowHelper8 = new THREE.ArrowHelper( dir8, origin, length, 0xf0f0f0, headLength, headWidth );

  scene.add( arrowHelper1, arrowHelper2, arrowHelper3, arrowHelper4, arrowHelper5, arrowHelper6, arrowHelper7, arrowHelper8 );

}

function addAxesHelper() {

  const size = 3;

  const axesHelper = new THREE.AxesHelper( size );
  axesHelper.position.set( -1.5, -1.5, -1.5 );
  scene.add( axesHelper );

}

function addBoxHelper() {

  const boxHelper = new THREE.BoxHelper( spiral, 0x666666 );
  scene.add( boxHelper );

}

function addBox3Helper() {

  const min = new THREE.Vector3( -2, -2, -2 );
  const max = new THREE.Vector3( 2, 2, 2 );
  const box = new THREE.Box3( min, max );

  const helper = new THREE.Box3Helper( box, 0xffff00 );
  scene.add( helper );

}

function addGridHelper() {

  const size = 100;
  const divisions = 100;

  const gridHelper = new THREE.GridHelper( size, divisions );

  gridHelper.position.set( 0, -3, 0 );

  scene.add( gridHelper );

}

function addPolarGridHelper() {

  const radius = 10;
  const radials = 16;
  const circles = 8;
  const divisions = 64;

  const polarGridhelper = new THREE.PolarGridHelper( radius, radials, circles, divisions );

  polarGridhelper.position.set( 0, 3, 0 );

  scene.add( polarGridhelper );

}

function addPlaneHelper() {

  const planeNormal = new THREE.Vector3( 0, 0, 1 );
  const planeConstant = 4;

  const plane = new THREE.Plane( planeNormal, planeConstant );

  const helperSize = 2;
  const planeHelper = new THREE.PlaneHelper( plane, helperSize, 0xff0000 );
  scene.add( planeHelper );

}

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
