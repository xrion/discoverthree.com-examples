import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

export default async function loadGLTFModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/Parrot.glb' );

  const parrot = gltf.scene.children[ 0 ];

  parrot.animations = gltf.animations;
  parrot.position.y = 3;
  parrot.scale.multiplyScalar( 1.5 );

  return {

    parrot,

  };

}
