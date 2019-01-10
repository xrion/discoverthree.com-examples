// average theta step between birds
const step = Math.PI / 48;

const models = [];

const group = new THREE.Group();

group.userData.onUpdate = ( delta ) => {

  group.rotation.y += delta / 18 ;

}

const positions = createSphericalPositions();

function initAnimation( model, animation ) {

  const mixer = new THREE.AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  const action = mixer.clipAction( animation );

  return action;

}

const onGLTFLoad = ( gltf, position, rotation, scale, scene, offset ) => {

  // get the correct model from the loaded object
  const model = gltf.scene.children[ 0 ];

  if( position ) model.position.copy( position );
  if( rotation ) model.rotation.copy( rotation );
  if( scale ) model.scale.copy( scale );

  const animation = gltf.animations[ 0 ];

  let rotationFactor = 0;
  positions.forEach( ( position, index ) => {

     rotationFactor += position.rot;

    if( index % 2 === offset ) {

      const newModel = model.clone();

      newModel.position.copy( position.vec );
      newModel.rotation.y = rotationFactor;

      const action = initAnimation( newModel, animation );
      // set the birds to start at random times so that they  don't flap in sync
      action.startAt( THREE.Math.randFloat( 0, 1.2 ) ).play();

      models[ index ] = newModel;

    }

  } );

  // create the big bird model and do some setup
  if( offset === 0 ) {

    scene.add( group );

    model.scale.set( 1.5, 1.5, 1.5 );
    model.position.set( 0, 140, 30 );
    scene.add( model );

    const action = initAnimation( model, animation );
    action.play();

    initModelsAmountSlider( group, models );

  }

};