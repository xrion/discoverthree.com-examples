function setupModels( gltf ) {

  const room = gltf.scene.children[ 0 ];

  console.log( 'model: ', room );

  return room;

};

async function loadModels() {

  const gltfLoader = new THREE.GLTFLoader();

  THREE.DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new THREE.DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const room = setupModels(
    await asyncLoader.load( 'models/lighting/bedroom_bright.glb' )
  );

  return { room };

}
