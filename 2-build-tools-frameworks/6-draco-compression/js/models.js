import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { DRACOLoader } from './vendor/three/loaders/DRACOLoader.module.js';
import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

export default async function loadGLTFModels() {

  const gltfLoader = new GLTFLoader();

  DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const gltf = await asyncLoader.load( 'models/statues/rhino/rhino-draco.glb' );

  const rhino = gltf.scene.children[ 0 ];

  return { rhino };

}
