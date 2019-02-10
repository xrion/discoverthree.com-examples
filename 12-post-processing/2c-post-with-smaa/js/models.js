function setupModels( gltf ) {

  const parrot = gltf.scene.children[ 0 ];

  parrot.position.y = 1.5;
  parrot.scale.multiplyScalar( 3 );

  return parrot;

}

async function loadModels() {

  const loader = createAsyncLoader( new THREE.GLTFLoader() );

  const parrot = setupModels(
    await loader.load( 'models/Parrot.glb' ),
  );

  return { parrot };

}
