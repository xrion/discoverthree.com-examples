import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel( gltf ) {

  const parrot = gltf.scene.children[ 0 ];
  const parrotAnimation = gltf.animations[ 0 ];

  parrot.position.set( 0, 2, 0 );

  return {
    parrot,
    parrotAnimation,
  };

}

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const { parrot, parrotAnimation } = setupModel(
    await loader.load( 'models/Parrot.glb' ),
  );

  return {
    models: {
      parrot,
    },
    animations: {
      parrotAnimation,
    },
  };

}
