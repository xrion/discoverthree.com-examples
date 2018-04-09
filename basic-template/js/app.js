// the camera and renderer are used in more than one function so we'll declare them first
let camera;
let renderer;

// The init function will do all of the heavy lifting to create and animate the scene
function init() {
  // Create the Scene
  const scene = new THREE.Scene();

  // Create the Camera
  const fov = 35; // AKA "Field of View"
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1; // the near clipping plane
  const far = 1000; // the far clipping plane

  camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

  camera.position.set( 0, 0, 40 );

  // Set up camera controls
  const controls = new THREE.OrbitControls( camera );
  controls.enableDamping = true; // gives a feeling of "weight" to the controls

  // create a global illumination light
  const ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
  scene.add( ambientLight );

  // create an omnidirectional light
  const pointLight = new THREE.PointLight( 0xffffff, 1.0 );
  pointLight.position.set( 0, 0, 20 );
  scene.add( pointLight );

  // set up the renderer
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );

  // add the automatically created <canvas> element to the page
  document.querySelector( '#container' ).appendChild( renderer.domElement );

  // create a box
  const boxGeometry = new THREE.BoxBufferGeometry( 12, 12, 12 );
  const boxMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const boxMesh = new THREE.Mesh( boxGeometry, boxMaterial );

  // add the box to the scene
  scene.add( boxMesh );

  // set up a simple animation loop
  renderer.animate( () => {
    renderer.render( scene, camera );

    // required of controls.enableDamping is set, see above
    controls.update();
  } );
}

// set up automatic resizing
function onWindowResize() {
  // reset the camera's aspect ratio to the new size
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}

// add an event listener to the window which will fire when it changes size
window.addEventListener( 'resize', onWindowResize );

// call the init function to create the scene and start animating
init();
