function setupModel( gltf, position ) {

  const parrot = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  parrot.position.y = 2;
  parrot.rotation.z = Math.PI / 2;

  parrot.renderOrder = 0;

  parrot.material.colorWrite = false;

  const max = new THREE.Vector3( 8, 5, -10 );
  const min = new THREE.Vector3( -8, -5, 4 );

  let t = 0;

  parrot.position.x = max.x;

  const mixer = new THREE.AnimationMixer( parrot );

  // we'll check every object in the scene for
  // this function and call it once per frame
  parrot.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

    // once t reaches 1,
    // move the bird to a new random position
    if ( t > 1 ) {

      t = 0;
      parrot.position.y = THREE.Math.randFloat( min.y, max.y );
      parrot.position.z = THREE.Math.randFloat( min.z, max.z );

    }

    t += delta / 3;

    parrot.position.x = THREE.Math.lerp( max.x, min.x, t );


    const action = mixer.clipAction( animation );
    action.play();

  };

  return parrot;

}

async function loadModels() {

  const loader = createAsyncLoader( new THREE.GLTFLoader() );

  const parrot = setupModel(
    await loader.load( 'models/Parrot.glb' ),
  );

  return { parrot };

}
