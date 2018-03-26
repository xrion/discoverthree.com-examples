// these need to be accessed inside more than one function so we'll declare them first
let camera;
let renderer;
let scene;
let mesh;

function init() {

  // create a Scene
  scene = new THREE.Scene();

  // set up the options for a perspective camera
  const fov = 35; // fov = Field Of View
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

  // every object is initially created at ( 0, 0, 0 )
  // we'll move the camera back a bit so that we can view the scene
  camera.position.set( 0, 0, 40 );

  // create a geometry
  const geometry = new THREE.TorusKnotBufferGeometry( 5, 1 );

  // create a default (white) Basic material
  const material = new THREE.MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  mesh = new THREE.Mesh( geometry, material );

  // add the mesh to the scene object
  scene.add( mesh );

  // create a WebGLRenderer and set its width and height
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  // add the automatically created <canvas> element to the page
  document.querySelector( '#container' ).appendChild( renderer.domElement );

}

function animate() {

  // render, or 'create a still image', of the scene
  renderer.render( scene, camera );

}

// call the init function to set everything up
init();

// then call the animate function to render the scene
animate();
