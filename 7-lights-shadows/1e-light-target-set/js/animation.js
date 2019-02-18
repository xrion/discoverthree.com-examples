import {
  AnimationMixer,
} from './vendor/three/three.module.js';

function setupAnimationClips( model ) {

  const mixer = new AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  model.animations.forEach( ( clip ) => {

    const action = mixer.clipAction( clip );
    action.play();

  } );

}
function setupSimpleRotation( object, axis ) {

  object.userData.onUpdate = ( delta ) => {

    object.rotation[ axis ] += delta / 2;

  };

}

export default function setupAnimations( models ) {

  setupAnimationClips( models.horse );
  setupSimpleRotation( models.duck, 'y' );
  setupSimpleRotation( models.head, 'z' );

}
