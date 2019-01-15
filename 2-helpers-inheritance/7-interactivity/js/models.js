// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, position, rotation, scale, scene ) => {

  const model = gltf.scene.children[ 0 ];

  if( position ) model.position.copy( position );
  if( rotation ) model.rotation.copy( rotation );
  if( scale ) model.scale.copy( scale );

  if( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    // we'll want to make the horse animate while it's moving
    // we'll need access to the mixer for that, so we'll store
    // a reference to it in userData
    model.userData.mixer = mixer;

    // we'll use these to reset the model's position later
    model.userData.initialPosition = position;
    model.userData.initialRotation = rotation;

    simpleControls( model );

    const action = mixer.clipAction( animation );
    action.play();

  }

  scene.add( model );

};

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 2, 0 );
  const rotation = new THREE.Euler( 0, 0, 0 );
  const scale = new THREE.Vector3( 0.025, 0.025, 0.025 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, position, rotation, scale, scene ), null, onError );

}