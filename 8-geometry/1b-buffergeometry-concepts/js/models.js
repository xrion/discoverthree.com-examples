import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadGLTFModels( materials ) {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/Horse.glb' );

  const horse = gltf.scene.children[ 0 ];
  horse.animations = gltf.animations;

  horse.material = materials.horse;

  horse.position.set( 0, -2, 0 );

  return {

    horse,

  };

}
