function setupModel( gltf ) {

  const model = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  model.position.y = 2;
  model.scale.multiplyScalar( 1.5 );

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
  );

  return { parrot };

}
