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

  positions.forEach( ( position ) => {

    const protoBird = getRandomArrayElement( birds );

    const nextBird = protoBird.clone();
    nextBird.animations = protoBird.animations;

    nextBird.scale.setScalar( 0.15 );

    nextBird.position.copy( position.vec );
    nextBird.rotateOnWorldAxis( rotationAxis, position.rot );

    birdsArray.push( nextBird );

  } );

  return birdsArray;

}

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  // let gltf = await loader.load( 'models/Flamingo.glb' );

  // const flamingo = gltf.scene.children[ 0 ];
  // flamingo.animations = gltf.animations;

  let gltf = await loader.load( 'models/Parrot.glb' );

  const parrot = gltf.scene.children[ 0 ];
  parrot.animations = gltf.animations;

  gltf = await loader.load( 'models/Stork.glb' );

  const stork = gltf.scene.children[ 0 ];
  stork.animations = gltf.animations;

  const bigParrot = parrot.clone();
  bigParrot.position.set( 0, 4.5, 2 );
  bigParrot.scale.set( 3, 3, 3 );
  bigParrot.animations = parrot.animations;

  return {

    parrot: bigParrot,
    birdsArray: createBirdsArray( [ parrot, stork ] ),

  };

}
