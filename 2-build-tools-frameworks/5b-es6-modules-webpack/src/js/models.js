import {
  AnimationMixer,
  Vector3,
} from 'three';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

import Parrot from '../models/Parrot.glb';
import Stork from '../models/Stork.glb';
import Flamingo from '../models/Flamingo.glb';


const onLoad = ( gltf, scene, position ) => {

  const model = gltf.scene.children[ 0 ];

  model.position.copy( position );

  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new AnimationMixer( model );

    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };

    const action = mixer.clipAction( animation );
    action.play();

  }

  scene.add( model );

};

export default function loadModels( scene ) {

  const loader = new GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const parrotPosition = new Vector3( 0, 0, 2.5 );
  loader.load( Parrot, gltf => onLoad( gltf, scene, parrotPosition ), null, onError );

  const flamingoPosition = new Vector3( 7.5, 0, -10 );
  loader.load( Flamingo, gltf => onLoad( gltf, scene, flamingoPosition ), null, onError );

  const storkPosition = new Vector3( 0, -2.5, -10 );
  loader.load( Stork, gltf => onLoad( gltf, scene, storkPosition ), null, onError );

}
