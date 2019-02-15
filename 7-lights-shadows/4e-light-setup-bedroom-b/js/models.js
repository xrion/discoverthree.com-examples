import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { DRACOLoader } from './vendor/three/loaders/DRACOLoader.js';
import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadGLTFModels() {

  const gltfLoader = new GLTFLoader();

  DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const gltf = await asyncLoader.load( 'models/lighting/bedroom_bright.glb' );

  return {

    bedroom: gltf.scene.children[ 0 ],

  };

}
