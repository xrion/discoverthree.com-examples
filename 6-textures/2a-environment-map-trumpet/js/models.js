function setupModels( gltf, materials ) {

  const trumpet = gltf.scene.getObjectByName( 'trumpet' );

  trumpet.rotation.set( 0, 0, 0 );

  trumpet.children[ 0 ].material = materials.silver;
  trumpet.children[ 1 ].material = materials.brass;

  return trumpet;

}

async function loadModels( materials ) {

  const loader = createAsyncLoader( new THREE.GLTFLoader() );

  const trumpet = setupModels(
    await loader.load( 'models/trumpet/trumpet.glb' ),
    materials,
  );

  return { trumpet };

}
