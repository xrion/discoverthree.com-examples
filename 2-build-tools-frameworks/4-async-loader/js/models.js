import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

export default async function loadGLTFModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  let gltf = await loader.load( 'models/Parrot.glb' );

  const parrot = gltf.scene.children[ 0 ];
  parrot.animations = gltf.animations;
  parrot.position.set( 0, 0, 2.5 );

  gltf = await loader.load( 'models/Flamingo.glb' );

  const flamingo = gltf.scene.children[ 0 ];
  flamingo.animations = gltf.animations;
  flamingo.position.set( 7.5, 0, -10 );

  gltf = await loader.load( 'models/Stork.glb' );

  const stork = gltf.scene.children[ 0 ];
  stork.animations = gltf.animations;
  stork.position.set( 0, -2.5, -10 );

  return {

    parrot,
    flamingo,
    stork,

  };

}
