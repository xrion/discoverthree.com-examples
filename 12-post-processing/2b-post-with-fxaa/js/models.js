import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel(  gltf ) {

  const parrot = gltf.scene.children[ 0 ];

  parrot.position.y = 1.5;
  parrot.scale.multiplyScalar( 3 );

  return parrot;

}

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const parrot = setupModel(
    await loader.load( 'models/Parrot.glb' ),
  );

  return { parrot };

}
