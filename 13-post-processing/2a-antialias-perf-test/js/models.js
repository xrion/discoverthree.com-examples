import {
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

import getRandomArrayElement from './utility/getRandomArrayElement.js';
import createSphericalPositions from './utility/createSphericalPositions.js';

function createBirdsArray( birds ) {

  const birdsArray = [];

  const positions = createSphericalPositions();
  const rotationAxis = new Vector3( 0, 1, 0 );

  for ( const position of positions ) {

    const protoBird = getRandomArrayElement( birds );

    const nextBird = protoBird.clone();
    nextBird.animations = protoBird.animations;

    nextBird.scale.setScalar( 0.15 );

    nextBird.position.copy( position.vec );
    nextBird.rotateOnWorldAxis( rotationAxis, position.rot );

    birdsArray.push( nextBird );

  }

  return birdsArray;

}

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  // first, start all the async operation
  const parrotPromise = loader.load( 'models/Parrot.glb' );
  // const flamingoPromise = loader.load( 'models/Flamingo.glb' );
  const storkPromise = loader.load( 'models/Stork.glb' );

  // next, wait for them to complete
  const parrotResult = await parrotPromise;
  // const flamingoResult = await flamingoPromise;
  const storkResult = await storkPromise;

  // finally, set up the models
  const parrot = parrotResult.scene.children[ 0 ];
  parrot.animations = parrotResult.animations;


  // const flamingo = flamingoResult.scene.children[ 0 ];
  // flamingo.animations = flamingoResult.animations;

  const stork = storkResult.scene.children[ 0 ];
  stork.animations = storkResult.animations;

  // const flamingo = gltf.scene.children[ 0 ];
  // flamingo.animations = gltf.animations;

  const bigParrot = parrot.clone();
  bigParrot.position.set( 0, 4.5, 2 );
  bigParrot.scale.set( 3, 3, 3 );
  bigParrot.animations = parrot.animations;

  return {

    parrot: bigParrot,
    birdsArray: createBirdsArray( [ parrot, stork ] ),

  };

}
