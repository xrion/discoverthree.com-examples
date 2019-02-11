import {
  AnimationClip,
  AnimationMixer,
  NumberKeyframeTrack,
} from './vendor/three/three.module.js';

function initRotationKeyframeTrack( axis ) {

  const times = [ 0, 12 ];

  const values = [ 0, 2 * Math.PI ];

  axis = axis || 'x';
  const xRotationKF = new NumberKeyframeTrack( `.rotation[${axis}]`, times, values  );

  return xRotationKF;

}

import {
  AnimationClip,
  AnimationMixer,
} from './vendor/three/three.module.js';

export default function initAnimation( object ) {

  // setup the AnimationMixer
  const mixer = new AnimationMixer( object );

  const xRotationKF = initRotationKeyframeTrack( 'x', 5 );
  const yRotationKF = initRotationKeyframeTrack( 'y', 1 );

  const clip = new AnimationClip( 'Action', -1, [ xRotationKF, yRotationKF ] );

  const clipAction = mixer.clipAction( clip );
  clipAction.play();

  // finally, we need to update the mixer by the amount of time
  // that has elapsed since the previous frame
  object.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

}
