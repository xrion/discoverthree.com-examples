
import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel( gltf ) {

  const model = gltf.scene.children[ 0 ];
  const modelGUI = model.clone();

  modelGUI.scale.set( 4, 4, 4 );
  modelGUI.rotation.set( Math.PI / 2, -Math.PI / 2, 0 );
  modelGUI.material = new MeshBasicMaterial( {
    color: 0x00ff00,
    morphTargets: true,
  } );

  const animation = gltf.animations[ 0 ];
  const mixer = new AnimationMixer( model );
  const mixerGUI = new AnimationMixer( modelGUI );

  // we'll want to make the horse animate while it's moving
  // we'll need access to the mixer for that, so we'll store
  // a reference to it in userData
  model.userData.mixer = mixer;
  modelGUI.userData.mixer = mixerGUI;

  const action = mixer.clipAction( animation );
  action.play();

  const actionGUI = mixerGUI.clipAction( animation );
  actionGUI.play();

  // we'll use these to reset the model's position later
  model.userData.initialPosition = model.position.clone();
  model.userData.initialRotation = model.rotation.clone();;

  // and we'll do the same for the model's proxy
  modelGUI.userData.initialPosition = modelGUI.position.clone();
  modelGUI.userData.initialRotation = modelGUI.rotation.clone();

  return { main: model, gui: modelGUI };

}

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  return setupModel(
    await loader.load( 'models/Horse.glb' ),
  );

}
