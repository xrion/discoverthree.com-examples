import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

function setupAnimationClips( model ) {

  const mixer = new AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  for ( const clip of model.animations ) {

    const action = mixer.clipAction( clip );
    action.play();

  }

}
function setupSimpleRotation( object ) {

  const yAxis = new Vector3( 0, 1, 0 );
  object.userData.onUpdate = ( delta ) => {

    object.rotateOnWorldAxis( yAxis, delta / 2 );

  };

}

export default function setupAnimations( models ) {

  setupAnimationClips( models.horse );
  setupSimpleRotation( models.duck );
  setupSimpleRotation( models.head );

}
