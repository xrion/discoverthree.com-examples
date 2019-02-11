import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel(  gltf ) {

  const room = gltf.scene.children[ 0 ];

  console.log( 'model: ', room );

  return room;

};


export default async function loadModels() {

  const gltfLoader = new GLTFLoader();

  THREE.DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new THREE.DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const room = setupModel(
    await asyncLoader.load( 'models/lighting/japanese_room.glb' )
  );

  return { room };

}
