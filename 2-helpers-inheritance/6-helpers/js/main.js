const app = new THREE_APP( '#container' );

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  app.scene.add( ambientLight );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 1 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  app.scene.add( frontLight, backLight );

}

function initMeshes() {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080 } );


  mesh = new THREE.Mesh( geometry, material );

  app.scene.add( mesh );

}


function loadModels() {

  // A reusable function to setup the models
  // assumes that the gltf file contains a single model
  // and up to one animation track
  const onLoad = ( gltf, position, rotation, scale ) => {

    const model = gltf.scene.children[ 0 ];

    if( position ) model.position.copy( position );
    if( rotation ) model.rotation.copy( rotation );
    if( scale ) model.scale.copy( scale );


    console.log(model);

    if( gltf.animations[ 0 ] ) {

      const animation = gltf.animations[ 0 ];
      const mixer = new THREE.AnimationMixer( model );

      // we'll check every object in the scene for
      // this function and call it once per frame
      model.userData.onUpdate = ( delta ) => {

        mixer.update( delta );

      };

      const action = mixer.clipAction( animation );
      action.play();

    }

    app.scene.add( model );

    addBoxHelper( model )

  };

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 2, 0 );
  const rotation = new THREE.Euler();
  const scale = new THREE.Vector3( 0.05, 0.05, 0.05 );
  app.loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, position, rotation, scale ), null, onError );

}

function addArrowHelpers() {

  // all our arrows will start at the origin
  const origin = new THREE.Vector3( 0, 0, 0 );
  const length = 7; //
  const headLength = 1; // length of arrow head
  const headWidth = 1; // width of arrow head

  // We'll create 2 arrows pointing in different directions
  const dir1 = new THREE.Vector3( 1, 1, -1 ).normalize();
  const dir2 = new THREE.Vector3( -1, 1, -1 ).normalize();

  // both arrows will start at the origin
  const arrowHelper1 = new THREE.ArrowHelper( dir1, origin, length, 0x407DA3, headLength, headWidth );
  const arrowHelper2 = new THREE.ArrowHelper( dir2, origin, length, 0x407DA3, headLength, headWidth );

  app.scene.add( arrowHelper1, arrowHelper2 );

}

function addAxesHelper() {

  const size = 5;

  const axesHelper = new THREE.AxesHelper( size );
  axesHelper.position.set( 0, -5, 0 );
  app.scene.add( axesHelper );

}

function addBoxHelper( model ) {

  const boxHelper = new THREE.BoxHelper( model, 0x800080 );
  app.scene.add( boxHelper );

}

function addBox3Helper() {

  const min = new THREE.Vector3( -5, -5, -5 );
  const max = new THREE.Vector3( 5, 5, 5 );
  const box = new THREE.Box3( min, max );

  const box3Helper = new THREE.Box3Helper( box, 0xdddddd );
  app.scene.add( box3Helper );

}

function addGridHelper() {

  const size = 10;
  const divisions = 10;

  const gridHelper = new THREE.GridHelper( size, divisions );

  // the extra 0.05 prevents the the grid being at the exact same
  // position as the AxesHelper, which causes flickering
  gridHelper.position.set( 0, -5.05, 0 );

  app.scene.add( gridHelper );

}

function addPolarGridHelper() {

  const radius = 5;
  const radials = 16;
  const circles = 8;
  const divisions = 64;

  const polarGridHelper = new THREE.PolarGridHelper( radius, radials, circles, divisions );

  polarGridHelper.position.set( 0, 5, 0 );

  app.scene.add( polarGridHelper );

}

function addPlaneHelpers() {

  const planeNormal = new THREE.Vector3( 1, 0, 0 );
  const planeAConstant = -4;
  const planeA = new THREE.Plane( planeNormal, planeAConstant );

  const planeBConstant = 4;
  const planeB = new THREE.Plane( planeNormal, planeBConstant );

  const helperSize = 4;
  const planeHelperA = new THREE.PlaneHelper( planeA, helperSize, 0xff0000 );
  const planeHelperB = new THREE.PlaneHelper( planeB, helperSize, 0xff0000 );
  app.scene.add( planeHelperA, planeHelperB );

}

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 25 );

  initLights();
  initMeshes();
  loadModels();

  addArrowHelpers();
  addAxesHelper();
  addBox3Helper();
  addGridHelper();
  addPolarGridHelper();
  addPlaneHelpers();

  app.start();

}

init();
