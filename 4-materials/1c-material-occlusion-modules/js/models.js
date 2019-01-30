import {
  AnimationMixer,
  Euler,
  Vector3,
  Math as mathUtils,
} from './vendor/three.module.js';

import { GLTFLoader } from './vendor/GLTFLoader.js';

function onLoad( gltf, position, rotation, scale, scene ) {
  const model = gltf.scene.children[0];

  if ( position ) model.position.copy( position );
  if ( rotation ) model.rotation.copy( rotation );
  if ( scale ) model.scale.copy( scale );

  model.renderOrder = 0;

  model.material.colorWrite = false;

  const max = new Vector3( 8, 5, -10 );
  const min = new Vector3( -8, -5, 4 );

  let t = 0;

  model.position.x = max.x;

  if ( gltf.animations[0] ) {
    const animation = gltf.animations[0];
    const mixer = new AnimationMixer( model );

    model.userData.onUpdate = ( delta ) => {
      mixer.update( delta );

      // once t reaches 1,
      // move the bird to a new random position
      if ( t > 1 ) {
        t = 0;
        model.position.y = mathUtils.randFloat( min.y, max.y );
        model.position.z = mathUtils.randFloat( min.z, max.z );
      }

      t += delta / 3;

      model.position.x = mathUtils.lerp( max.x, min.x, t );
    };

    const action = mixer.clipAction( animation );
    action.play();
  }

  scene.add( model );
}

export default function loadModels( scene ) {

  const loader = new GLTFLoader();

  const onError = ( errorMessage ) => {

    console.log( errorMessage );

  };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new Vector3( 0, 2, 0 );
  const rotation = new Euler( 0, -Math.PI / 2, 0 );
  const scale = new Vector3( 0.05, 0.05, 0.05 );
  loader.load(
    parrot,
    gltf => onLoad( gltf, position, rotation, scale, scene ),
    null,
    onError,
  );
}
