// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
function setupModel( gltf ) {

  const morphCube = gltf.scene.children[ 0 ];

  return morphCube;


};

async function loadModels() {

  const loader = createAsyncLoader( new THREE.GLTFLoader() );

  const morphCube = setupModel(
    await loader.load( 'models/morphCube.glb' ),
  );

  return { morphCube };

}
