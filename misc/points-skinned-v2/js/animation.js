import {
  AnimationClip,
  AnimationMixer,
  Matrix4,
  NumberKeyframeTrack,
  Vector3,
  Vector4,
} from './vendor/three/three.module.js';

import pointOnSpiral from './utilities/pointOnSpiral.js';

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

function dissolve( points, surfaceClone ) {

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

  const endVertex = new Vector3();

  points.userData.onUpdate = ( delta ) => {

    // points.updateMatrixWorld();
    skeleton.update();

    const hDiff = height - offset;

    for ( let i = 0; i < count; i++ ) {

      const fraction = count / i;

      const bOffset = 0.05 * ( -5 - i % 5 );

      position.fromBufferAttribute( positions, i );
      skinIndex.fromBufferAttribute( skinIndices, i );
      skinWeight.fromBufferAttribute( skinWeights, i );

      transformed.copy( position );

      tempSkinnedVertex.copy( transformed ).applyMatrix4( bindMatrix );

      if ( transformed.y + bOffset > hDiff ) {

        pointOnSpiral( transformed, fraction, endVertex );

        transformed.lerp( endVertex, transformed.y - hDiff );

        if ( transformed.y <= 0 ) {

          transformed.y = 0;

        }


      } else {

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

      }


      transformed.toArray( clonePositions.array, i * 3 );

    }

    // offset = ( offset + delta / 2 ) % 3;


    clonePositions.needsUpdate = true;

  };

  window.addEventListener( 'mousemove', ( e ) => {

    offset = -0.5 + e.screenX / window.innerWidth * 5;

  } );


}

export default function setupAnimations( points, models ) {

  setupAnimationClips( points.dancer, models.dancer.animations );

  dissolve( points.dancer.getObjectByName( 'surface' ), points.surfaceClone );
  // dissolve( points.dancer.getObjectByName( 'joints' ) );

}
