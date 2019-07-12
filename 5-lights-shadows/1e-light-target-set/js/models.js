import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';


export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  // first, start all the async operations
  const horsePromise = loader.load( 'models/Horse.glb' );
  const duckPromise = loader.load( 'models/Duck.glb' );
  const waltHeadPromise = loader.load( 'models/WaltHead.glb' );

  // ...wait for them to complete
  const horseResult = await horsePromise;
  const duckResult = await duckPromise;
  const waltHeadResult = await waltHeadPromise;

  // finally, set up all the models
  const horse = horseResult.scene.children[ 0 ];
  horse.animations = horseResult.animations;
  horse.rotation.z = -Math.PI / 2;
  horse.position.set( -12, 0, 0 );

  const duck = duckResult.scene.children[ 0 ].children[ 1 ];
  duck.position.set( 10, 1, -10 );
  duck.scale.set( 0.03, 0.03, 0.03 );

  const head = waltHeadResult.scene.children[ 0 ];
  head.position.set( 5, 10, 5 );
  head.scale.set( 0.1, 0.1, 0.1 );

  return {

    horse,
    duck,
    head,

  };

}
