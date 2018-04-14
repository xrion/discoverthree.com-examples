// the camera and renderer are used in more than one function so we'll declare them first
let container;
let camera;
let renderer;

// The init function will do all of the heavy lifting to create and animate the scene
function init() {
  // Create the Scene
  const scene = new THREE.Scene();

  // Create the Camera
  const fov = 35; // AKA "Field of View"
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 1000; // the far clipping plane

  camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

  camera.position.set( 40, 20, 40 );

  // Set up camera controls
  const controls = new THREE.OrbitControls( camera );
  controls.enableDamping = true; // gives a feeling of "weight" to the controls
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 0.1;

  // create a global illumination light
  const ambientLight = new THREE.AmbientLight( 0x333333, 1.0 );
  scene.add( ambientLight );

  // create an omnidirectional light
  const pointLight = new THREE.PointLight( 0xffffff, 0.5 );
  pointLight.position.set( 0, 0, 20 );
  scene.add( pointLight );

  // set up the renderer
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );
  renderer.setClearColor( 0xffffff, 1 );


  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

  const DNA = createDNA();
  scene.add( DNA );

  // set up a simple animation loop
  renderer.animate( () => {
    renderer.render( scene, camera );

    DNA.rotation.z += 0.001;

    // required of controls.enableDamping is set, see above
    controls.update();
  } );
}

function randomColor() {
  return new THREE.Color( Math.random(), Math.random(), Math.random() );
}

// formula for a point on a DNA helix as described by Crick And Watson
function helixPoint( a, b, t ) {

  return new THREE.Vector3( a * Math.cos( t ), a * Math.sin( t ), b * t );

}

function helixPointsArray( a, b ) {

  const curvePoints = [];

  for ( let t = -20; t < 12; t += 0.5 ) {

    curvePoints.push( helixPoint( a, b, t ) );

  }

  return curvePoints;

}

function helixMesh( pointsOnCurve, color ) {

  const curve = new THREE.CatmullRomCurve3( pointsOnCurve );

  const geometry = new THREE.TubeBufferGeometry( curve, 100, 0.25, 12, false );
  const material = new THREE.MeshToonMaterial( { color } );
  return new THREE.Mesh( geometry, material );

}

// assume same number of upper and lower points for simplicity
function createConnectingRods( DNA, upperHelixPoints, lowerHelixPoints ) {

  upperHelixPoints.forEach( ( upperPoint, index ) => {

    if( index % 2 !== 0 ) return;

    const lowerPoint = lowerHelixPoints[ index ];

    const curve = new THREE.LineCurve3( upperPoint, lowerPoint );

    const geometry = new THREE.TubeBufferGeometry( curve, 100, 0.25, 12, false );
    const material = new THREE.MeshToonMaterial( { color: randomColor() } );
    DNA.add( new THREE.Mesh( geometry, material ) );

  } );
}

function createDNA() {

  const DNA = new THREE.Group();

  const upperHelixPoints = helixPointsArray( 3, 3.1, 0xff00ff );
  const lowerHelixPoints = helixPointsArray( -3, 2.9 );

  const upperHelix = helixMesh( upperHelixPoints, 0xff00ff );
  const lowerHelix = helixMesh( lowerHelixPoints, 0x00ff00 );

  DNA.add( upperHelix, lowerHelix );

  createConnectingRods( DNA, upperHelixPoints, lowerHelixPoints );

  return DNA;

}

// set up automatic resizing
function onWindowResize() {
  // reset the camera's aspect ratio to the new size
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( container.clientWidth, container.clientHeight );
}

// add an event listener to the window which will fire when it changes size
window.addEventListener( 'resize', onWindowResize );

// call the init function to create the scene and start animating
init();
