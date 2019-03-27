import {
  AnimationClip,
  AnimationMixer,
  NumberKeyframeTrack,
  Vector3,
} from './vendor/three/three.module.js';

function setupMorphTargetAnims( model ) {

  model.traverse( ( child ) => {

    if ( !child.morphTargetDictionary ) return;

    const mixer = new AnimationMixer( child );

    child.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };

    const twistAIndex = child.morphTargetDictionary.twistA;
    const twistAMorphTrack = new NumberKeyframeTrack(
      `.morphTargetInfluences[${twistAIndex}]`,
      [ 1, 4, 8 ],
      [ 0, 1, 0 ],
    );

    const twistBIndex = child.morphTargetDictionary.twistB;
    const twistBMorphTrack = new NumberKeyframeTrack(
      `.morphTargetInfluences[${twistBIndex}]`,
      [ 5, 12, 16 ],
      [ 0, 1, 0 ],
    );

    const twistCIndex = child.morphTargetDictionary.twistC;
    const twistCMorphTrack = new NumberKeyframeTrack(
      `.morphTargetInfluences[${twistCIndex}]`,
      [ 11, 16, 20, 21 ],
      [ 0, 1, 0, 0 ],
    );

    const animationClip = new AnimationClip(
      'morph',
      -1, // set automatically from the longest track
      [
        twistAMorphTrack,
        twistBMorphTrack,
        twistCMorphTrack,
      ],
    );

    const action = mixer.clipAction( animationClip );
    action.play();

  } );

}

export default function setupAnimations( points ) {

  setupMorphTargetAnims( points.dancer );

}
