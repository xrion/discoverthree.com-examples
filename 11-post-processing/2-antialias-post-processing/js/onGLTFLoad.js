// A reusable function to setup the models
// We need a reference to the model once it has loaded, s
// so we'll pass in an empty variable here and assign the model to that
const onGLTFLoad = ( gltf, position, rotation, scale, scene ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.getObjectByName( 'RootNode' );

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

  scene.add( model );

};