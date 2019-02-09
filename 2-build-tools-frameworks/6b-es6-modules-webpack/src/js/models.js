import {
  AnimationMixer,
  Vector3,
} from 'three';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

import Parrot from '../models/Parrot.glb';
import Flamingo from '../models/Flamingo.glb';
import Stork from '../models/Stork.glb';

function setupModel( gltf, position ) {

  const model = gltf.scene.children[ 0 ];
  model.position.copy( position );

  const animation = gltf.animations[ 0 ];

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
    await loader.load( Parrot ),
    new Vector3( 0, 0, 2.5 ),
  );

  const flamingo = setupModel(
    await loader.load( Flamingo ),
    new Vector3( 7.5, 0, -10 ),
  );

  const stork = setupModel(
    await loader.load( Stork ),
    new Vector3( 0, -2.5, -10 ),
  );

  return { parrot, flamingo, stork };

}
