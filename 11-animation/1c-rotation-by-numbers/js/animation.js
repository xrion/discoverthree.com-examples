import {
  AnimationClip,
  AnimationMixer,
  NumberKeyframeTrack,
} from './vendor/three/three.module.js';

function createRotationKeyframeTrack( axis ) {

  const times = [ 0, 12 ];

  const values = [ 0, 2 * Math.PI ];

  axis = axis || 'x';
  const xRotationKF = new NumberKeyframeTrack( `.rotation[${axis}]`, times, values  );

  return xRotationKF;

}

export default function setupAnimation( meshes ) {

  const mixer = new AnimationMixer( meshes.shapes );

  const xRotationKF = createRotationKeyframeTrack( 'x', 5 );
  const yRotationKF = createRotationKeyframeTrack( 'y', 1 );

  const clip = new AnimationClip( 'Action', -1, [ xRotationKF, yRotationKF ] );

  const clipAction = mixer.clipAction( clip );
  clipAction.play();

  meshes.shapes.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

}
