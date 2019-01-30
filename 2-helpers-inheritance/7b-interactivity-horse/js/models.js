// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, scene ) => {

  const model = gltf.scene.children[ 0 ];

  // model.position.y = 2;
  model.scale.set( 0.025, 0.025, 0.025 );

  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    // we'll want to make the horse animate while it's moving
    // we'll need access to the mixer for that, so we'll store
    // a reference to it in userData
    model.userData.mixer = mixer;

    // we'll use these to reset the model's position later
    model.userData.initialPosition = model.position.clone();
    model.userData.initialRotation = model.rotation.clone();

    const action = mixer.clipAction( animation );
    action.play();

  }

  initControls( model );

  scene.add( model );

};

function loadModels( scene ) {

  const loader = new THREE.GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, scene ), null, onError );

}
