import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

function createHorsesArray( protoHorse ) {

  protoHorse.position.set( 0, 0.5, -15 );
  protoHorse.rotation.set( Math.PI / 2, 0, -Math.PI / 2 );

  const horsesArray = [];

  // create ten clones of our protoHorse
  for ( let i = 0; i < 10; i++ ) {

    const horse = protoHorse.clone();
    horse.animations = protoHorse.animations;

    horse.position.z += 1.6 * i;
    horse.scale.setScalar( 0.66 - 0.066 * i );

    horsesArray.push( horse );

  }

  return horsesArray;

}


export default async function loadGLTFModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/Horse.glb' );

  const horse = gltf.scene.children[ 0 ];
  horse.animations = gltf.animations;

  return {

    horsesArray: createHorsesArray( horse ),

  };

}
