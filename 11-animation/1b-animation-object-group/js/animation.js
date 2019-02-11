import {
  AnimationClip,
  AnimationObjectGroup,
  AnimationMixer,
  NumberframeTrack,
  VectorKeyframeTrack,
} from './vendor/three/three.module.js';

import {
  AnimationClip,
  AnimationMixer,
} from './vendor/three/three.module.js';

export default function initAnimation( meshes ) {

  const objectGroupA = new AnimationObjectGroup( ...meshes.groupA );
  const objectGroupB = new AnimationObjectGroup( ...meshes.groupB );
  const objectGroupC = new AnimationObjectGroup( ...meshes.groupC );
  const objectGroupD = new AnimationObjectGroup( ...meshes.groupD );

  const mixerA = new AnimationMixer( objectGroupA );
  const mixerB = new AnimationMixer( objectGroupB );
  const mixerC = new AnimationMixer( objectGroupC );
  const mixerD = new AnimationMixer( objectGroupD );

  // We need to update the mixer by the amount of time
  // that has elapsed since the previous frame
  // We can pick any one of the meshes and
  // use that meshes onUpdate function sto update all the mixers
  meshes.groupA[ 0 ].userData.onUpdate = ( delta ) => {

    mixerA.update( delta );
    mixerB.update( delta );
    mixerC.update( delta );
    mixerD.update( delta );

  };

  const colorKF = initColorKeyframeTrack(); // a ColorKeyframeTrack
  const colorKF_b = initColorKeyframeTrackB(); // a ColorKeyframeTrack
  const opacityKF = initOpacityKeyframeTrack(); // a NumberKeyframeTrack
  const scaleKF = initScaleKeyframeTrack(); // a NumberKeyframeTrack

  // create some clips - one per objectGroup
  const clipA = new AnimationClip( 'clipA', -1, [ opacityKF ] );
  const clipB = new AnimationClip( 'clipB', -1, [ colorKF ] );
  const clipC = new AnimationClip( 'clipC', -1, [ scaleKF ] );
  const clipD = new AnimationClip( 'clipD', -1, [ colorKF_b ] );


  // match each clip to a mixer and set them all to play
  const clipActionA = mixerA.clipAction( clipA );
  clipActionA.play();

  const clipActionB = mixerB.clipAction( clipB );
  clipActionB.play();

  const clipActionC = mixerB.clipAction( clipC );
  clipActionC.play();

  const clipActionD = mixerB.clipAction( clipD );
  clipActionD.play();

}


function initColorKeyframeTrack() {

  const times = [ 0, 4, 7, 11 ];

  const values = [

    1, 0, 0, // r, g, b at t=0
    0, 1, 0,
    0, 0, 1,
    1, 0, 0, // r, g, b at final t

  ];

  const colorKF = new ColorKeyframeTrack( '.material.color', times, values );

  return colorKF;

}

function initColorKeyframeTrackB() {

  const times = [ 0, 1, 2, 3 ];

  const values = [

    1, 1, 1, // r, g, b at t=0
    0, 1, 0,
    1, 0, 1,
    1, 1, 1, // r, g, b at final t

  ];

  const colorKF = new ColorKeyframeTrack( '.material.color', times, values );

  return colorKF;

}

function initOpacityKeyframeTrack() {

  const times = [ 0, 2, 5 ];

  const values = [

    1, // object.material.opacity at t=0
    0, // object.material.opacity at t=1
    1, // object.material.opacity at t=2

  ];

  const opacityKF = new NumberKeyframeTrack( '.material.opacity', times, values );

  console.log( 'Here\'s the KeyframeTrack for opacity: ', opacityKF );

  return opacityKF;

}

function initScaleKeyframeTrack() {

  const times = [ 0, 4, 4.5 ];

  const values = [

    1, 1, 1, // x, y, z scale at t=0
    0.1, 0.1, 2, // x, y, z scale t t=1
    1, 1, 1, // x, y, z scale at t=2

  ];

  const scaleKF = new VectorKeyframeTrack(
    '.scale',
    times,
    values,

  );

  console.log( 'Here\'s the VectorKeyframeTrack for scale: ', scaleKF );

  return scaleKF;

}