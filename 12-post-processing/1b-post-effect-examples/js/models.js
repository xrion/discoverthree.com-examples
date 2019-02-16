import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/Parrot.glb' );

  const parrot = gltf.scene.children[ 0 ];
  parrot.animations = gltf.animations;
  parrot.position.y = 1.5;
  parrot.scale.multiplyScalar( 3 );
  return {

    parrot,

  };

}
