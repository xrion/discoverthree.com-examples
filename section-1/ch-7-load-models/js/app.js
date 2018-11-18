// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let controls;
let renderer;
let scene;

let mixers = [];
const clock = new THREE.Clock();

function init() {

  container = document.querySelector( '#container' );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x8FBCD4 );

  initCamera();
  initControls();
  initLights();
  loadModels();
  initRenderer();

  renderer.setAnimationLoop( () => {

    update();
    render();

  } );

}

function initCamera() {

  camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 1, 1000 );
  camera.position.set( -50, 50, 150 );

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

function loadModels() {

  const loader = new THREE.GLTFLoader();

  // the loader will report the loading progress to this function as it loads the file.
  // We'll ignore this for now though to keep things simples
  const onProgress = () => {};

  // The loader will send any error messages to this function, and we'll log
  // them to to console
  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // A reusable function to setup the models. We're passing in a position parameter
  // so that they can be individually placed around the scene
  const setupModel = ( gltf, position ) => {

    const model = gltf.scene;
    model.position.copy( position );

    const animation = gltf.animations[ 0 ];

    const mixer = new THREE.AnimationMixer( model );
    mixers.push( mixer );

    const action = mixer.clipAction( animation );
    action.play();

    scene.add( model );

  };

  // load the first model. Each model is loaded asynchronously,
  // so there is no way to know which one will finish loading first
  loader.load( 'models/parrot.glb', ( gltf ) => {

    // create a Vector3 specifying the position of the model
    const parrotPosition = new THREE.Vector3( 0, 0, 50 );
    // call the setupModel function with the custom position
    setupModel( gltf, parrotPosition );

  }, onProgress, onError );

  // load the second model
  loader.load( 'models/flamingo.glb', ( gltf ) => {

    const flamingoPosition = new THREE.Vector3( 150, 0, -200 );
    setupModel( gltf, flamingoPosition );

  }, onProgress, onError );

  // load the third model
  loader.load( 'models/stork.glb', ( gltf ) => {

    const storkPosition = new THREE.Vector3( 0, -50, -200 );
    setupModel( gltf, storkPosition );

  }, onProgress, onError );

}

function initRenderer() {

  // create a WebGLRenderer and set its width and height
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

}

function update() {

  const delta = clock.getDelta();

  mixers.forEach( ( mixer ) => { mixer.update( delta ) } );

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