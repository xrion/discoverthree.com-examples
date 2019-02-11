import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel( gltf ) {

  const model = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  model.position.y = 2;
  model.scale.multiplyScalar( 1.5 );

  const mixer = new AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  const action = mixer.clipAction( animation );
  action.play();

  return model;

}

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const parrot = setupModel(
    await loader.load( 'models/Parrot.glb' ),
  );

  return { parrot };

}
