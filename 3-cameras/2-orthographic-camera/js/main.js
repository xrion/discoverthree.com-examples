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
  const geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );

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

  };

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 2, 0 );
  const rotation = new THREE.Euler();
  const scale = new THREE.Vector3( 10, 10, 10 );
  app.loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, position, rotation, scale ), null, onError );

}

function init() {

  app.init();

  // the standard resize function will not work for the OrthograpicCamera
  app.autoResize = false;

  // call this before app.start()

  const container = document.querySelector( '#container' );

  const left = - container.clientWidth / 2;
  const right = container.clientWidth / 2;
  const top = container.clientHeight / 2;
  const bottom = - container.clientHeight / 2;
  app.camera = new THREE.OrthographicCamera( left, right, top, bottom, 0.1, 1000 );

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 500 );

  initLights();
  // initMeshes();
  loadModels();

  app.start();

}

init();
