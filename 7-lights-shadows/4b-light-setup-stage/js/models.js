function setupModels( gltf ) {

  const stage = gltf.scene.children[ 0 ];

  console.log( 'model: ', stage );

  return stage;

};


async function loadModels() {

  const gltfLoader = new THREE.GLTFLoader();

  THREE.DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new THREE.DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const stage = setupModels(
    await asyncLoader.load( 'models/lighting/stage.glb' )
  );

  return { stage };

}