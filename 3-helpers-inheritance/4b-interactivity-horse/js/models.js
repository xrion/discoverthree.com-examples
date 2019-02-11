import {
  AnimationMixer,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel( gltf ) {

  const horse = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  const mixer = new AnimationMixer( horse );

  // we'll want to make the horse animate while it's moving
  // we'll need access to the mixer for that, so we'll store
  // a reference to the mixer in userData
  horse.userData.mixer = mixer;

  // we'll use these to reset the horse's position later
  horse.userData.initialPosition = horse.position.clone();
  horse.userData.initialRotation = horse.rotation.clone();

  const action = mixer.clipAction( animation );
  action.play();

  return horse;

}

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const horse = setupModel(
    await loader.load( 'models/Horse.glb' ),
  );

  return { horse };

}
