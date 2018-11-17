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
  camera.position.set( 0, 0, 15 );

}

function initControls() {

  controls = new THREE.OrbitControls( camera, container );

}

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  scene.add( ambientLight );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 1 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  scene.add( frontLight, backLight );

}

function initMaterials() {

  const textureLoader = new THREE.TextureLoader();

  const texture = textureLoader.load( 'textures/uv_test_bw.png' );
  texture.anisotropy = 16;

  return new THREE.MeshStandardMaterial( {
    map: texture,
    flatShading: true,
    roughness: 0.75,
    metalness: 0.1,
  } );

}

function initMeshes() {

  // create a Group to hold the pieces of the car
  const car = new THREE.Group();
  scene.add( car );

  const material = initMaterials();

  const noseGeometry = new THREE.CylinderBufferGeometry( 0.75, 0.75, 3, 8 );
  const nose = new THREE.Mesh( noseGeometry, material );
  nose.rotation.set( Math.PI / 2, 0, Math.PI / 2 );
  nose.position.x = -1.5;

  const cabinGeometry = new THREE.BoxBufferGeometry( 2, 2.25, 1.5 );
  const cabin = new THREE.Mesh( cabinGeometry, material );
  cabin.position.set( 1, 0.4, 0 );

  const chimneyGeometry = new THREE.CylinderBufferGeometry( 0.3, 0.1, 0.5 );
  const chimney = new THREE.Mesh( chimneyGeometry, material );
  chimney.position.set( -2.5, 0.9, 0 );

  car.add( cabin, nose, chimney );

  const wheelGeo = new THREE.CylinderBufferGeometry( 0.4, 0.4, 1.75, 16 );
  wheelGeo.rotateX( Math.PI / 2 );

  const smallWheelRear = new THREE.Mesh( wheelGeo, material );
  smallWheelRear.position.set( -0.5, -0.5, 0 );

  const smallWheelCenter = smallWheelRear.clone();
  smallWheelCenter.position.x = -1.5;

  const smallWheelFront = smallWheelRear.clone();
  smallWheelFront.position.x = -2.5;

  const bigWheel = smallWheelRear.clone();
  bigWheel.scale.set( 2, 2, 1.25 );
  bigWheel.position.set( 1, -0.1, 0 );

  car.add( smallWheelRear, smallWheelCenter, smallWheelFront, bigWheel );


}

function initRenderer() {

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

}

function update() {

  // wheelFrontLeft.rotation.z += rotationSpeed;
  // wheelFrontRight.rotation.z += rotationSpeed;
  // wheelRearLeft.rotation.z += rotationSpeed;
  // wheelRearRight.rotation.z += rotationSpeed;

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
