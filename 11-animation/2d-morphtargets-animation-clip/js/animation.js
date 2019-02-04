function setupAnimation( object ) {

  console.log(object);

  const mixer = new THREE.AnimationMixer( object );

  object.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  const twistIndex = object.morphTargetDictionary.twist;
  const twistMorphTrack = new THREE.NumberKeyframeTrack(
    `.morphTargetInfluences[${twistIndex}]`,
    [ 0, 4, 8 ],
    [ 0, 1, 0 ],
  );

  console.log( 'Here\'s the keyframe track for the twist morph: ', twistMorphTrack );

  const spherifyIndex = object.morphTargetDictionary.spherify;
  const spherifyMorphTrack = new THREE.NumberKeyframeTrack(
    `.morphTargetInfluences[${spherifyIndex}]`,
    [ 0, 1, 2, 3, 4, 5, 6 ],
    [ 0, 1, 0, 1, 0, 1, 0 ],
  );

  const animationClip = new THREE.AnimationClip(
    'morph',
    -1, // set automatically from the longest track
    [
      twistMorphTrack,
      spherifyMorphTrack
    ],
  );

  console.log( '... and here\'s the animation clip : ', animationClip );

  const action = mixer.clipAction( animationClip );
  action.play();

}

