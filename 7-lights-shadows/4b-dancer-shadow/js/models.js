function setupModels( gltf, envMap ) {

  const dancer = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  dancer.rotation.y = Math.PI / 3;

  dancer.userData.animation = animation;

  dancer.traverse( ( child ) => {

    child.castShadow = true;
    child.receiveShadow = true;

    if ( child.material ) {

      child.material.envMap = envMap;
      child.material.envMapIntensity = 10;

    }

  } );

  return dancer;

}

async function loadModels( envMap ) {

  const loader = createAsyncLoader( new THREE.GLTFLoader() );

  const dancer = setupModels(
    await loader.load( 'models/dancer.glb' ),
    envMap,
  );

  return { dancer };

}
