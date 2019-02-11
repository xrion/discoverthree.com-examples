function setupAnimation( models ) {


  const mixer = new AnimationMixer( models );

  models.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  const twistIndex = models.morphTargetDictionary.twist;
  const twistMorphTrack = new NumberKeyframeTrack(
    `.morphTargetInfluences[${twistIndex}]`,
    [ 0, 4, 8 ],
    [ 0, 1, 0 ],
  );


  const spherifyIndex = models.morphTargetDictionary.spherify;
  const spherifyMorphTrack = new NumberKeyframeTrack(
    `.morphTargetInfluences[${spherifyIndex}]`,
    [ 0, 1, 2, 3, 4, 5, 6 ],
    [ 0, 1, 0, 1, 0, 1, 0 ],
  );

  const animationClip = new AnimationClip(
    'morph',
    -1, // set automatically from the longest track
    [
      twistMorphTrack,
      spherifyMorphTrack
    ],
  );

  console.log('Here\'s the model we just loaded: ', models );
  console.log( 'Here\'s the keyframe track for the twist morph: ', twistMorphTrack );
  console.log( 'Here\'s the keyframe track for the spherify morph: ', spherifyMorphTrack );
  console.log( '... and here\'s the animation clip : ', animationClip );

  const action = mixer.clipAction( animationClip );
  action.play();

}
