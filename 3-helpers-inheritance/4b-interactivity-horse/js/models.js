import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

export default async function loadGLTFModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/Horse.glb' );

  const horse = gltf.scene.children[ 0 ];

  horse.animations = gltf.animations;

  // we'll use these to reset the horse's position later
  horse.userData.initialPosition = horse.position.clone();
  horse.userData.initialRotation = horse.rotation.clone();

  console.log(horse);
  return {

    horse,

  };

}
