import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel(  gltf ) {

  const stage = gltf.scene.children[ 0 ];

  console.log( 'model: ', stage );

  return stage;

};


export default async function loadModels() {

  const gltfLoader = new GLTFLoader();

  THREE.DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new THREE.DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const stage = setupModel(
    await asyncLoader.load( 'models/lighting/stage.glb' )
  );

  return { stage };

}