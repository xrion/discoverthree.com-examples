import {
  AnimationClip,
  AnimationMixer,
  Matrix4,
  NumberKeyframeTrack,
  Vector3,
  Vector4,
  Points,
} from './vendor/three/three.module.js';


function setupAnimationClips( model, animations ) {

  model.visible = false;
  const mixer = new AnimationMixer( model );

  const action = mixer.clipAction( animations[ 0 ] );
  action.play();

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  return action;

}

function setupMorphTargetAnims( model ) {

  model.traverse( ( child ) => {

    if ( !child.morphTargetDictionary ) return;

    const mixer = new AnimationMixer( child );

    child.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };


    const dissolveIndex = child.morphTargetDictionary.dissolve;
    const dissolveMorphTrack = new NumberKeyframeTrack(
      `.morphTargetInfluences[${dissolveIndex}]`,
      [ 2, 10, 15, 18],
      [ 0, 0.8, 0, 0 ],
    );

    const animationClip = new AnimationClip(
      'morph',
      -1, // set automatically from the longest track
      [

        dissolveMorphTrack,
      ],
    );

    const action = mixer.clipAction( animationClip );
    action.play();

  } );

}

function dissolve( points, surfaceClone ) {

  // console.log( points.geometry.userData.height );
  const height = points.geometry.userData.height;
  const skeleton = points.skeleton;

  const positions = points.geometry.attributes.position;
  const clonePositions = surfaceClone.geometry.attributes.position;

  const skinIndices = points.geometry.attributes.skinIndex;
  const skinWeights = points.geometry.attributes.skinWeight;

  const count = positions.count;

  const position = new Vector3();
  const transformed = new Vector3();
  const temp1 = new Vector3();
  const tempBoneMatrix = new Matrix4();
  const tempSkinnedVertex = new Vector3();
  const tempSkinned = new Vector3();

  const bindMatrix = points.bindMatrix;
  const bindMatrixInverse = points.bindMatrixInverse;

  const skinIndex = new Vector4();
  const skinWeight = new Vector4();

  let offset = 0;

  points.userData.onUpdate = ( delta ) => {

    // points.updateMatrixWorld();
    skeleton.update();

    const hDiff = height - offset;

    // if( hDiff < 0 ) return;

    for ( let i = 0; i < count; i++ ) {

      position.fromBufferAttribute( positions, i );
      skinIndex.fromBufferAttribute( skinIndices, i );
      skinWeight.fromBufferAttribute( skinWeights, i );

      transformed.copy( position );

      tempSkinnedVertex.copy( transformed ).applyMatrix4( bindMatrix );
      tempSkinned.set( 0, 0, 0 );

      for ( let j = 0; j < 4; j++ ) {

        const boneNdx = skinIndex.getComponent( j );
        const weight = skinWeight.getComponent( j );
        tempBoneMatrix.fromArray( skeleton.boneMatrices, boneNdx * 16 );
        temp1.copy( tempSkinnedVertex );
        tempSkinned.add( temp1.applyMatrix4( tempBoneMatrix ).multiplyScalar( weight ) );

      }

      transformed.copy( tempSkinned ).applyMatrix4( bindMatrixInverse );
      transformed.applyMatrix4( points.matrixWorld );


      if ( transformed.y > hDiff ) {

        if ( transformed.y - hDiff < 0.25 ) {

          transformed.x += offset * Math.random() * Math.random();
          transformed.y += offset * Math.random() * Math.random();
          transformed.z += offset * Math.random() * Math.random();

        } else {

          transformed.set( 9999, 9999, 9999 );

        }



      }



      transformed.toArray( clonePositions.array, i * 3 );

    }

    offset += delta / 2;

    clonePositions.needsUpdate = true;

  };


}

export default function setupAnimations( points, models ) {

  const danceAction = setupAnimationClips( points.dancer, models.dancer.animations );
  // setupMorphTargetAnims( points.dancer );

  dissolve( points.dancer.getObjectByName( 'surface' ), points.surfaceClone );
  // dissolve( points.dancer.getObjectByName( 'joints' ) );

}
