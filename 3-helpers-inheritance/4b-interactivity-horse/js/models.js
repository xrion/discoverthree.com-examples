function setupModel( gltf ) {

  const horse = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  const mixer = new THREE.AnimationMixer( horse );

  // we'll want to make the horse animate while it's moving
  // we'll need access to the mixer for that, so we'll store
  // a reference to the mixer in userData
  horse.userData.mixer = mixer;

  // we'll use these to reset the horse's position later
  horse.userData.initialPosition = horse.position.clone();
  horse.userData.initialRotation = horse.rotation.clone();

  const action = mixer.clipAction( animation );
  action.play();

  return horse;

}

async function loadModels() {

  const loader = createAsyncLoader( new THREE.GLTFLoader() );

  const horse = setupModel(
    await loader.load( 'models/Horse.glb' ),
  );

  return { horse };

}
