// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let controls;
let renderer;
let scene;
let mesh;

let wheelFrontLeft;
let wheelFrontRight;
let wheelRearLeft;
let wheelRearRight;

function init() {

  container = document.querySelector( '#container' );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x8FBCD4 );

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

  camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 0.1, 100 );
  camera.position.set( 0, 0, 7 );

}

function initControls() {

  controls = new THREE.OrbitControls( camera, container );

}

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
  scene.add( ambientLight );

  const mainLight = new THREE.DirectionalLight( 0xffffff, 0.75 );

  // the "light-in-camera" pattern
  camera.add( mainLight );
  scene.add( camera );

}

function initMaterials() {

  const textureLoader = new THREE.TextureLoader();

  const texture = textureLoader.load( 'textures/uv_test.png' );
  texture.anisotropy = 16;

  return new THREE.MeshStandardMaterial( {
    map: texture,
  } );

}

function initMeshes() {

  // create a Group to hold the pieces of the car
  const car = new THREE.Group();
  scene.add( car );

  const material = initMaterials();

  const bodyGeometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
  const body = new THREE.Mesh( bodyGeometry, material );
  body.scale.set( 1.5, 0.5, 0.5 );
  car.add( body );

  const wheelGeo = new THREE.CylinderBufferGeometry( 0.4, 0.4, 0.15, 64 );
  wheelGeo.rotateX( Math.PI / 2 );

  wheelFrontLeft = new THREE.Mesh( wheelGeo, material );
  wheelFrontLeft.position.set( -1, -0.5, 0.6 );
  car.add( wheelFrontLeft );

  wheelFrontRight = new THREE.Mesh( wheelGeo, material );
  wheelFrontRight.position.set( -1, -0.5, -0.6 );
  wheelFrontRight.rotation.z = 2.5;
  car.add( wheelFrontRight );

  wheelRearLeft = wheelFrontLeft.clone();
  wheelRearLeft.position.x = 1;
  wheelRearLeft.rotation.z = -2.5;
  car.add( wheelRearLeft );

  wheelRearRight = wheelFrontRight.clone();
  wheelRearRight.position.x = 1;
  wheelRearRight.rotation.z = 1.75;
  car.add( wheelRearRight );

}

function initRenderer() {

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

}

const rotationSpeed = 0.01;

function update() {

  wheelFrontLeft.rotation.z += rotationSpeed;
  wheelFrontRight.rotation.z += rotationSpeed;
  wheelRearLeft.rotation.z += rotationSpeed;
  wheelRearRight.rotation.z += rotationSpeed;

}

function render() {

  renderer.render( scene, camera );

}

function onWindowResize() {

  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();

  renderer.setSize( container.clientWidth, container.clientHeight );

}

window.addEventListener( 'resize', onWindowResize );

init();
