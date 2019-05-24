import {
  AnimationMixer,
} from './vendor/three/three.module.js';

function setupAnimationClips( model ) {

  const mixer = new AnimationMixer( model );

  // in this example, we don't want the animation
  // to play continuously so we'll skip this step

  // model.userData.onUpdate = ( delta ) => {

  //   mixer.update( delta );

  // };

  // but we'll want to make the horse animate while it's moving
  // we'll need access to the mixer for that, so we'll store
  // a reference to the mixer in userData
  model.userData.mixer = mixer;

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
