import {
  AnimationMixer,
  Vector3,
} from 'three';

// should be possible to use from NPM as of R102
import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

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

  const parrotPosition = new Vector3( 0, 0, 2.5 );
  loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, scene, parrotPosition ), null, onError );

  const flamingoPosition = new Vector3( 7.5, 0, -10 );
  loader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, scene, flamingoPosition ), null, onError );

  const storkPosition = new Vector3( 0, -2.5, -10 );
  loader.load( 'models/Stork.glb', gltf => onLoad( gltf, scene, storkPosition ), null, onError );

}
