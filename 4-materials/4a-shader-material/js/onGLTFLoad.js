// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onGLTFLoad = ( gltf, position, rotation, scale ) => {

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

  app.scene.add( model );

};