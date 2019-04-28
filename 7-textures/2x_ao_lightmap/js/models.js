import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/lighting/ao/ao_test.glb' );

  const sculptures = gltf.scene.children[ 0 ];

  // console.log(sculptures.children[2].geometry);

  return {

    sculptures,

  };

}