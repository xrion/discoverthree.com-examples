function initAnimation( model, animation ) {

  const mixer = new THREE.AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  const action = mixer.clipAction( animation );

  return action;

}

const models = [];

const onLoad = ( gltf, scene, offset ) => {

  const model = gltf.scene.children[ 0 ];

  model.scale.setScalar( 100 );

  const animation = gltf.animations[ 0 ];

  const positions = createSphericalPositions();
  const rotationAxis = new THREE.Vector3( 0, 1, 0 );

  const group = new THREE.Group();

  group.userData.onUpdate = ( delta ) => {

    group.rotation.y += delta / 18;

  };

  positions.forEach( ( position, index ) => {

    if ( index % 2 === offset ) {

      const newModel = model.clone();

      newModel.scale.setScalar( 0.15 );

      newModel.position.copy( position.vec );
      newModel.rotateOnWorldAxis( rotationAxis, position.rot );

      const action = initAnimation( newModel, animation );

      // set the birds to start at random times so that they  don't flap in sync
      action.startAt( THREE.Math.randFloat( 0, 1.2 ) ).play();

      models[ index ] = newModel;

    }

  } );

  // create the big bird model and do some setup
  if ( offset === 0 ) {

    scene.add( group );

    model.scale.setScalar( 3 );
    model.position.set( 0, 5, 0 );
    scene.add( model );

    const action = initAnimation( model, animation );
    action.play();

    initButtons( models, group );

  }

};

async function loadModels() {

  const loader = createAsyncLoader( new THREE.GLTFLoader() );

  const parrots = setupModels(
    await loader.load( 'models/Parrot.glb' ),
  );

  const storksArray = setupModels(
    await loader.load( 'models/Stork.glb' ),
  );

  return { bigBird: parrots.bigBird, parrotsArray, storksArray };

}
