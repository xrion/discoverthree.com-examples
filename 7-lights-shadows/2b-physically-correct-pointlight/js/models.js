function setupModels( gltf ) {

  const protoHorse = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  protoHorse.position.set( 0, 0.5, -15 );
  protoHorse.rotation.set( Math.PI / 2, 0, -Math.PI / 2 );

  const horsesArray = [];

  // create ten clones of our protoHorse
  for ( let i = 0; i < 10; i++ ) {

    const horse = protoHorse.clone();

    horse.position.z += 1.6 * i;
    horse.scale.setScalar( 0.66 - 0.066 * i );

    const spherical = new THREE.Spherical().setFromVector3( horse.position );

    const mixer = new THREE.AnimationMixer( horse );

    horse.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

      spherical.theta -= delta / 2;
      horse.position.setFromSpherical( spherical );

      horse.rotation.z += delta / 2;

    };

    const action = mixer.clipAction( animation );
    action.startAt( THREE.Math.randFloat( 0, 0.5 ) ).play();

    horsesArray.push( horse );

  }

  return horsesArray;

}

async function loadModels() {

  const loader = createAsyncLoader( new THREE.GLTFLoader() );

  const horsesArray = setupModels(
    await loader.load( 'models/Horse.glb' ),
  );

  return { horsesArray };

}
