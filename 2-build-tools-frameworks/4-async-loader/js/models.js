function setupModel( gltf, position ) {

  const model = gltf.scene.children[ 0 ];
  model.position.copy( position );

  const animation = gltf.animations[ 0 ];

  const mixer = new THREE.AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  const action = mixer.clipAction( animation );
  action.play();

  return model;

}

async function loadModels() {

  const loader = createAsyncLoader( new THREE.GLTFLoader() );

  const parrot = setupModel(
    await loader.load( 'models/Parrot.glb' ),
    new THREE.Vector3( 0, 0, 2.5 ),
  );

  const flamingo = setupModel(
    await loader.load( 'models/Flamingo.glb' ),
    new THREE.Vector3( 7.5, 0, -10 ),
  );

  const stork = setupModel(
    await loader.load( 'models/Stork.glb' ),
    new THREE.Vector3( 0, -2.5, -10 ),
  );

  return { parrot, flamingo, stork };

}
