import {
  AnimationMixer,
} from './vendor/three/three.module.js.js';

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

export default function setupAnimation( models ) {

  for ( const model of Object.values( models ) ) {

    setupAnimationClips( model );

  }

}
