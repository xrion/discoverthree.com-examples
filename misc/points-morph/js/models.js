import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadModels() {

  const gltfLoader = new GLTFLoader();

  const asyncLoader = createAsyncLoader( gltfLoader );

  const gltf = await asyncLoader.load( 'models/Samba.glb' );

  const dancer = gltf.scene.children[ 0 ];

  return {

    dancer,

  };

}
