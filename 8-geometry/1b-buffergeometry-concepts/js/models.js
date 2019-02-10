function setupModel( gltf ) {

  const horse = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  horse.position.set( -2, -2, 0 );

  console.log( 'And here\'s the buffer geometry from the loaded model: ', horse.geometry );

  horse.material = new THREE.MeshBasicMaterial( {
    wireframe: true,
    morphTargets: true,
    vertexColors: THREE.VertexColors,
  } );


  const mixer = new THREE.AnimationMixer( horse );

  horse.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

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
