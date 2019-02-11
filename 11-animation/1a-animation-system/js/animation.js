import {
  AnimationClip,
  AnimationMixer,
  InterpolateDiscrete,
  InterpolateLinear,
  InterpolateSmooth,
  NumberKeyframeTrack,
  Quaternion,
  QuaternionKeyframeTrack,
  Vector3,
  VectorKeyframeTrack,
} from './vendor/three/three.module.js';

import {
  AnimationClip,
  AnimationMixer,
} from './vendor/three/three.module.js';

export default function initAnimation( object ) {

  // create some KeyframeTracks
  const positionKF = initPositionKeyframeTrack(); // a VectorKeyframeTrack
  const scaleKF = initScaleKeyframeTrack(); // a VectorKeyframeTrack
  const quaternionKF = initRotationKeyframeTrack(); // a QuaternionKeyframeTrack
  const colorKF = initColorKeyframeTrack(); // a ColorKeyframeTrack
  const opacityKF = initOpacityKeyframeTrack(); // a NumberKeyframeTrack

  // Other KeyframeTrack types: BooleanKeyframeTrack, StringKeyframeTrack

  const clip = new AnimationClip(

    // name the clip anything you like
    'clipA',

    // set the length, or enter -1 to use the length of the longest keyframe track
    -1,

    // an array containing any number of keyframe tracks
    [ positionKF, scaleKF, quaternionKF, colorKF, opacityKF ],
  );

  // setup the AnimationMixer
  const mixer = new AnimationMixer( object );

  // create a ClipAction and set it to play
  const clipAction = mixer.clipAction( clip );
  clipAction.play();

  // finally, we need to update the mixer by the amount of time
  // that has elapsed since the previous frame
  object.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

}

function initPositionKeyframeTrack() {

  // times are in seconds
  const times = [ 0, 1, 2 ];

  const values = [

    -8, 4, 0, // x, y, z positions at t=0
    10, 0, 0, // x, y, z positions at t=1
    -8, 4, 0, // x, y, z positions at t=2

  ];

  const positionKF = new VectorKeyframeTrack(

    // a string representing the attribute that we want to animate
    // here, object.position
    '.position',

    times,
    values,

  );

  console.log( 'Here\'s the VectorKeyframeTrack for position: ', positionKF );

  return positionKF;

}

function initScaleKeyframeTrack() {

  const times = [ 0, 1, 2 ];

  const values = [

    1, 1, 1, // x, y, z scale at t=0
    4, 1, 5, // x, y, z scale t t=1
    1, 1, 1, // x, y, z scale at t=2

  ];

  const scaleKF = new VectorKeyframeTrack(
    '.scale',
    times,
    values,

    // the final (optional) argument that can be passed
    // in to a keyframe track is the interpolation type

    // the default most keyframe track types
    // use Linear interpolation
    // InterpolateLinear

    // Jump directly from one value to the next
    // InterpolateDiscrete

    // use Cubic interpolation
    // InterpolateSmooth

  );

  console.log( 'Here\'s the VectorKeyframeTrack for scale: ', scaleKF );

  return scaleKF;

}

// setting up a key frame track for rotation is a bit more complicated, since we need to
// use Quaternions - there is no key frame track for Euler angles
function initRotationKeyframeTrack() {

  const times = [ 0, 1, 2 ];

  // create a vector representing the axis we want to rotate around
  const yAxis = new Vector3( 0, 1, 0 );

  // a quaternion representing 0 rotation around the y axis
  const qInitial = new Quaternion().setFromAxisAngle( yAxis, 0 );

  // a quaternion representing 180 rotation around the y axis
  const qFinal = new Quaternion().setFromAxisAngle( yAxis, Math.PI );

  // quaternions have x, y, z and w properties
  const values = [

    // rotation at t = 0
    qInitial.x, qInitial.y, qInitial.z, qInitial.w,

    // rotation at t = 1
    qFinal.x, qFinal.y, qFinal.z, qFinal.w,

    // and back to original rotation for t = 1
    qInitial.x, qInitial.y, qInitial.z, qInitial.w,

  ];

  // QuaternionKeyframeTrack only supports InterpolateLinear
  const quaternionKF = new QuaternionKeyframeTrack( '.quaternion', times, values );

  console.log( 'Here\'s the QuaternionKeyframeTrack for rotation: ', quaternionKF );

  return quaternionKF;

}

function initColorKeyframeTrack() {

  const times = [ 0, 1, 2 ];

  const values = [

    1, 0, 0, // r, g, b at t=0
    0, 1, 0, // r, g, b t t=1
    0, 0, 1, // r, g, b at t=2

  ];

  // note that ColorKeyframeTrack is currently identical to VectorKeyframeTrack,
  // however it may be expanded on in the future to allow for
  // more sophisticated color manipulation
  const colorKF = new ColorKeyframeTrack( '.material.color', times, values );

  console.log( 'Here\'s the ColorKeyframeTrack for color: ', colorKF );

  return colorKF;

}

function initOpacityKeyframeTrack() {

  const times = [ 0, 1, 2 ];

  const values = [

    1, // object.material.opacity at t=0
    0.5, // object.material.opacity at t=1
    1, // object.material.opacity at t=2

  ];

  const opacityKF = new NumberKeyframeTrack( '.material.opacity', times, values );

  console.log( 'Here\'s the KeyframeTrack for opacity: ', opacityKF );

  return opacityKF;

}
