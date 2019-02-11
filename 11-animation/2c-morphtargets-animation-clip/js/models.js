// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel( gltf ) {

  const morphCube = gltf.scene.children[ 0 ];

  return morphCube;


};

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const morphCube = setupModel(
    await loader.load( 'models/morphCube.glb' ),
  );

  return { morphCube };

}
