import Parrot from '../models/Parrot.glb';
import Flamingo from '../models/Flamingo.glb';
import Stork from '../models/Stork.glb';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

export default async function loadGLTFModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  let gltf = await loader.load( Parrot );

  const parrot = gltf.scene.children[ 0 ];
  parrot.animations = gltf.animations;
  parrot.position.set( 0, 2.5, 0 );

  gltf = await loader.load( Flamingo );

  const flamingo = gltf.scene.children[ 0 ];
  flamingo.animations = gltf.animations;
  flamingo.position.set( 4, 0, 0 );
  flamingo.scale.multiplyScalar( 0.75 );

  gltf = await loader.load( Stork );

  const stork = gltf.scene.children[ 0 ];
  stork.animations = gltf.animations;
  stork.position.set( -4, 0, 0 );
  stork.scale.multiplyScalar( 0.75 );

  return {

    parrot,
    flamingo,
    stork,

  };

}
