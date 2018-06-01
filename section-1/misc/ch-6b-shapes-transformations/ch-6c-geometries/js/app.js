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

  renderer.setAnimationLoop( () => {

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

  // const boxGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
  // const whiteMat = new THREE.MeshStandardMaterial( { color: 0xffffff } );

  // const boxMesh = new THREE.Mesh( boxGeo, whiteMat );
  // scene.add( boxMesh );

  // CylinderBufferGeometry
  // const geo = new THREE.CylinderBufferGeometry( 2, 2, 6, 64 );
  // const mat = new THREE.MeshStandardMaterial( { color: 0xffffff } );

  // const mesh = new THREE.Mesh( geo, mat );
  // scene.add( mesh );

  // SphereBufferGeometry
  // const geo = new THREE.SphereBufferGeometry( 2, 64, 64 );
  // const mat = new THREE.MeshStandardMaterial( { color: 0xffffff } );

  // const mesh = new THREE.Mesh( geo, mat );
  // scene.add( mesh );

  // IcosahedronBufferGeometry
  // const geo = new THREE.IcosahedronBufferGeometry( 2, 0 );
  // const mat = new THREE.MeshStandardMaterial( { color: 0xffffff } );

  // const mesh = new THREE.Mesh( geo, mat );
  // scene.add( mesh );

  // TorusKnotBufferGeometry
  // const geo = new THREE.TorusKnotBufferGeometry( 2, 0.5, 100, 16 );
  // const mat = new THREE.MeshStandardMaterial( { color: 0xffffff } );

  // const mesh = new THREE.Mesh( geo, mat );
  // scene.add( mesh );

  // DodecahedronBufferGeometry
  // const geo = new THREE.DodecahedronBufferGeometry( 2, 0 );
  // const mat = new THREE.MeshStandardMaterial( { color: 0xffffff } );

  // const mesh = new THREE.Mesh( geo, mat );
  // scene.add( mesh );

  // ExtrudeBufferGeometry
  // const heartShape = new THREE.Shape(); // From http://blog.burlock.org/html5/130-paths
  // heartShape.moveTo( 2.5, 2.5 );
  // heartShape.bezierCurveTo( 2.5, 2.5, 2.0, 0, 0, 0 );
  // heartShape.bezierCurveTo( -3.0, 0, -3.0, 3.5, -3.0, 3.5 );
  // heartShape.bezierCurveTo( -3.0, 5.5, -1.0, 7.7, 2.5, 9.5 );
  // heartShape.bezierCurveTo( 6.0, 7.7, 8.0, 5.5, 8.0, 3.5 );
  // heartShape.bezierCurveTo( 8.0, 3.5, 8.0, 0, 5.0, 0 );
  // heartShape.bezierCurveTo( 3.5, 0, 2.5, 2.5, 2.5, 2.5 );

  // const extrudeSettings = {
  //   steps: 64,
  //   amount: 0.5,
  //   bevelEnabled: true,
  //   bevelThickness: 0.25,
  //   bevelSize: 0.25,
  //   bevelSegments: 1,
  // };

  // const geo = new THREE.ExtrudeBufferGeometry( heartShape, extrudeSettings );
  // const mat = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  // const mesh = new THREE.Mesh( geo, mat );

  // mesh.scale.multiplyScalar( 0.3 );
  // mesh.rotation.z = Math.PI;
  // mesh.position.set( 0.75, 1.5, 0 );

  // scene.add( mesh );

  // LatheBufferGeometry

  const points = [];

  for ( let i = 0; i < 20; i++ ) {
    points.push( new THREE.Vector2( -Math.sin( i * 0.2 ) * 1.0 + 0.5, Math.cos( -i * 0.5 ) * 1.0 + 0.5 ) );
  }

  const geo = new THREE.LatheBufferGeometry( points );
  const mat = new THREE.MeshStandardMaterial( { color: 0xffffff, side: THREE.DoubleSide } );

  const mesh = new THREE.Mesh( geo, mat );
  mesh.rotation.z = Math.PI;

  scene.add( mesh );

  // TextBufferGeometry
  // const loader = new THREE.FontLoader();

  // loader.load( 'fonts/droid_sans_regular.typeface.json', ( font ) => {

  //   const geo = new THREE.TextBufferGeometry( 'Smile!', {
  //     font,
  //     size: 0.5,
  //     height: 0.25,
  //     curveSegments: 12,
  //     bevelEnabled: true,
  //     bevelThickness: 0.1,
  //     bevelSize: 0.05,
  //     bevelSegments: 5,
  //   } );

  //   const mat = new THREE.MeshStandardMaterial( { color: 0xffffff } );

  //   const mesh = new THREE.Mesh( geo, mat );
  //   scene.add( mesh );
  // } );

}

function initRenderer() {

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setClearColor( 0x8FBCD4, 1.0 );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

}

// perform any updates to the scene, called once per frame
// avoid heavy computation here
function update() {

  // Don't delete this function

}

function render() {

  renderer.render( scene, camera );

}

function onWindowResize() {

  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize( container.clientWidth, container.clientHeight );

}

window.addEventListener( 'resize', onWindowResize );

init();
