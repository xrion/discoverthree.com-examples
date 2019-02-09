async function loadModels() {

  const gltfLoader = new THREE.GLTFLoader();

  THREE.DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new THREE.DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const gltf = await asyncLoader.load( 'models/statues/rhino/rhino-draco.glb' );

  const rhino = gltf.scene.children[ 0 ];

  return { rhino };

}
