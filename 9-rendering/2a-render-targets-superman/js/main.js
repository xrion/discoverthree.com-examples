const app = new THREE_APP( '#container' );
let mesh;

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
  const geometry = new THREE.BoxBufferGeometry( 1.3, 1.9, 0.7 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080, transparent: true, opacity: 0.5 } );
  mesh = new THREE.Mesh( geometry, material );

  mesh.userData.onUpdate = ( delta ) => {
    mesh.rotation.x += -delta;
    mesh.rotation.y += -delta;
  }

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

    let mixer;
    if( gltf.animations[ 0 ] ) {

      const animation = gltf.animations[ 0 ];
      mixer = new THREE.AnimationMixer( model );

      const action = mixer.clipAction( animation );
      action.play();

    }

    mesh.add( model );

    // pick a pose from the animation
    mixer.update( 2.9 );

  };

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( -0.1, -0.9, -0.25 );
  const rotation = new THREE.Euler();
  const scale = new THREE.Vector3( 1, 1, 1 );
  app.loader.load( 'models/Samba Dancing.glb', gltf => onLoad( gltf, position, rotation, scale ), null, onError );

}

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 0, 6 );

  initLights();
  initMeshes();
  loadModels();

  app.start();

}

init();
