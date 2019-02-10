function setupModel( gltf ) {

  const morphCube = gltf.scene.children[ 0 ];

  // the model already has a material set up correctly,
  // but we'll recreate it here  for demonstration purposes
  morphCube.material = new THREE.MeshStandardMaterial( {

    color: 0xff0000,

    // this needs to be set for any mesh that has
    // morph targets. If you leave it out, then morphing
    // will not work!
    morphTargets: true,

    // set this if the mesh also has morph normals
    // our mesh doesn't, so we can leave it at false
    // morphNormals: true

    // finally, since we are not morphing the normals here,
    // lighting will not work smoothly so we'll use flatshading
    flatShading: true,

  } );

  console.log( 'Here\'s the model we just loaded: ', morphCube );

  return morphCube;

}

async function loadModels() {

  const loader = createAsyncLoader( new THREE.GLTFLoader() );

  const morphCube = setupModel(
    await loader.load( 'models/morphCube.glb' ),
  );

  return { morphCube };

}
