function setupModels( gltf ) {

  const warehouse = gltf.scene.children[ 0 ];

  console.log( 'model: ', warehouse );

  return warehouse;

};


async function loadModels() {

  const gltfLoader = new THREE.GLTFLoader();

  THREE.DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new THREE.DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const warehouse = setupModels(
    await asyncLoader.load( 'models/lighting/warehouse.glb' )
  );

  return { warehouse };

}
