import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import {
  GLTFLoader,
} from './vendor/three/loaders/GLTFLoader.module.js';

// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, scene, position ) => {

  const model = gltf.scene.children[ 0 ];

  model.position.copy( position );

  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new AnimationMixer( model );

    // we'll check every object in the scene for
    // this function and call it once per frame
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
  loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, scene, parrotPosition ), null, onError );

  const flamingoPosition = new Vector3( 7.5, 0, -10 );
  loader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, scene, flamingoPosition ), null, onError );

  const storkPosition = new Vector3( 0, -2.5, -10 );
  loader.load( 'models/Stork.glb', gltf => onLoad( gltf, scene, storkPosition ), null, onError );

}
