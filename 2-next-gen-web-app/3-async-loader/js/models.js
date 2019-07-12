import createAsyncLoader from './utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  // first, start all the async operations
  const parrotPromise = loader.load( 'models/Parrot.glb' );
  const flamingoPromise = loader.load( 'models/Flamingo.glb' );
  const storkPromise = loader.load( 'models/Stork.glb' );

  // ...wait for them to complete
  const parrotResult = await parrotPromise;
  const flamingoResult = await flamingoPromise;
  const storkResult = await storkPromise;

  // finally, set up the models
  const parrot = parrotResult.scene.children[ 0 ];
  parrot.animations = parrotResult.animations;
  parrot.position.set( 0, 0, 2.5 );

  const flamingo = flamingoResult.scene.children[ 0 ];
  flamingo.animations = flamingoResult.animations;
  flamingo.position.set( 7.5, 0, -10 );

  const stork = storkResult.scene.children[ 0 ];
  stork.animations = storkResult.animations;
  stork.position.set( 0, -2.5, -10 );

  return {

    parrot,
    flamingo,
    stork,

  };

}
