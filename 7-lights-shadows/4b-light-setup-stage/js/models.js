import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';


import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import {
  DRACOLoader,
} from './vendor/three/loaders/todo.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

function setupModel( gltf ) {

  const stage = gltf.scene.children[ 0 ];

  console.log( 'model: ', stage );

  return stage;

}


export default async function loadModels() {

  const gltfLoader = new GLTFLoader();

  DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const stage = setupModel(
    await asyncLoader.load( 'models/lighting/stage.glb' ),
  );

  return { stage };

}
