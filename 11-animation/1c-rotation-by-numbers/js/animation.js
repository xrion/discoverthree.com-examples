function initRotationKeyframeTrack( axis ) {

  const times = [ 0, 12 ];

  const values = [ 0, 2 * Math.PI ];

  axis = axis || 'x';
  const xRotationKF = new THREE.NumberKeyframeTrack( `.rotation[${axis}]`, times, values, THREE.InterpolateLinear );

  return xRotationKF;

}

function initAnimation( object ) {

  // setup the AnimationMixer
  const mixer = new THREE.AnimationMixer( object );

  const xRotationKF = initRotationKeyframeTrack( 'x', 5 );
  const yRotationKF = initRotationKeyframeTrack( 'y', 1 );

  const clip = new THREE.AnimationClip( 'Action', -1, [ xRotationKF, yRotationKF ] );

  const clipAction = mixer.clipAction( clip );
  clipAction.play();

  // finally, we need to update the mixer by the amount of time
  // that has elapsed since the previous frame
  object.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

}
