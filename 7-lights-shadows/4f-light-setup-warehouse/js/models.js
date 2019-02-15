import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { DRACOLoader } from './vendor/three/loaders/DRACOLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

function setupModel( gltf ) {

  const warehouse = gltf.scene.children[ 0 ];

  console.log( 'model: ', warehouse );

  return warehouse;

}


export default async function loadModels() {

  const gltfLoader = new GLTFLoader();

  DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const warehouse = setupModel(
    await asyncLoader.load( 'models/lighting/warehouse.glb' ),
  );

  return { warehouse };

}
