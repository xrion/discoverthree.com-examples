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

export default function setupAnimation( models ) {

  Object.values( models ).forEach( ( model ) => {

    setupAnimationClips( model );

  } );

}
