const app = new THREE_APP( '#container' );
let material;

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  app.scene.add( ambientLight );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 1 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  app.scene.add( frontLight, backLight );

}

function initMaterials() {

  material = new THREE.MeshBasicMaterial( {
    color: 0x800080
  } );

}

function initMeshes() {

  // create a geometry
  const boxGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
  mesh = new THREE.Mesh( boxGeo, material );

  app.scene.add( mesh );

}


function loadModels() {

  // A reusable function to setup the models
  // assumes that the gltf file contains a single model
  // and up to one animation track
  const onLoad = ( gltf, position, rotation, scale ) => {

    const model = gltf.scene.children[ 0 ];
    model.material = material.clone();
    model.material.morphTargets = true;
    model.material.vertexColors = THREE.VertexColors;


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

  };

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 2, 0 );
  const rotation = new THREE.Euler();
  const scale = new THREE.Vector3( 0.05, 0.05, 0.05 );
  app.loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, position, rotation, scale ), null, onError );

}

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 25 );

  initMaterials();
  initLights();
  initMeshes();
  loadModels();

  app.start();

  app.container.addEventListener( 'click', () => {

    app.running ? app.stop() : app.start();

  } );

}

init();
