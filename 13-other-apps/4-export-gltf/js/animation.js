// we want to rotate a full 360 degrees,
// however quaternions can represent a maximum rotation
// of 180 degrees, so we will need to use more than one
function initRotationKeyframeTrack() {

  const times = [ 0, 6, 12 ];

  // create a vector representing the axis we want to rotate around
  const yAxis = new THREE.Vector3( 1, 1, 1 ).normalize();

  // a quaternion representing 0 rotation around the y axis
  const qInitial = new THREE.Quaternion().setFromAxisAngle( yAxis, 0 );

  // a quaternion representing 180 rotation around the y axis
  const qMiddle = new THREE.Quaternion().setFromAxisAngle( yAxis, Math.PI );

  // a quaternion representing 180 rotation around the y axis
  const qFinal = new THREE.Quaternion().setFromAxisAngle( yAxis, 2 * Math.PI );

  // quaternions have x, y, z and w properties
  const values = [

    // rotation at t = 0
    qInitial.x, qInitial.y, qInitial.z, qInitial.w,

    // rotation at t = 8
    qMiddle.x, qMiddle.y, qMiddle.z, qMiddle.w,

    // rotation at t = 8
    qFinal.x, qFinal.y, qFinal.z, qFinal.w,

  ];

  return new THREE.QuaternionKeyframeTrack( '.quaternion', times, values );;

}

function initOpacityKeyframeTrack() {

  const times = [ 0, 1, 2 ];

  const values = [

    1, // object.material.opacity at t=0
    0.5, // object.material.opacity at t=1
    1, // object.material.opacity at t=2

  ];

  const opacityKF = new THREE.NumberKeyframeTrack( '.material.opacity', times, values );

  return opacityKF;

}

function initAnimation( object ) {

  const mixer = new THREE.AnimationMixer( object );

  const rotationKF = initRotationKeyframeTrack();

  // NumberKeyframeTracks are not supported - this will result in an error
  // and your exported file will have no animations
  // const opacityKF = initOpacityKeyframeTrack();
  // const clip = new THREE.AnimationClip( 'Action', -1, [ rotationKF, opacityKF ] );

  const clip = new THREE.AnimationClip( 'Action', -1, [ rotationKF ] );

  const clipAction = mixer.clipAction( clip );
  clipAction.play();

  // finally, we need to update the mixer by the amount of time
  // that has elapsed since the previous frame
  object.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  return [ clip ];

}
