import {
  AnimationClip,
  AnimationMixer,
  NumberKeyframeTrack,
  Vector3,
  Group,
} from './vendor/three/three.module.js';

let fadeOut = true;
const speed = 0.005;

function setupAnimationClips( model, animations ) {

  const mixer = new AnimationMixer( model );

  const action = mixer.clipAction( animations[ 0 ] );
  action.timeScale = 0.75;
  action.play();

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

    if ( fadeOut && action.weight > 0 ) action.weight -= speed;
    else if ( !fadeOut && action.weight < 1 ) action.weight += speed;

  };

  return action;

}

function dummyAnims( app, danceAction ) {

  // let fadeOut = false;

  const dummy = new Group();

  const mixer = new AnimationMixer( dummy );

  dummy.userData.onUpdate = ( delta ) => {

    mixer.update( delta );


  };

  const dummyTrack = new NumberKeyframeTrack(
    '.rotation[ x ]',
    [ 0, 6 ],
    [ 0, 1 ],
  );

  const clip = new AnimationClip( 'Action', -1, [ dummyTrack ] );

  const clipActionA = mixer.clipAction( clip );
  clipActionA.play();

  mixer.addEventListener( 'loop', ( e ) => {

    fadeOut = !fadeOut;

  } );

  app.scene.add( dummy );

}

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
      [ 2, 6, 10 ],
      [ 0, 1, 0 ],
    );

    const twistBIndex = child.morphTargetDictionary.twistB;
    const twistBMorphTrack = new NumberKeyframeTrack(
      `.morphTargetInfluences[${twistBIndex}]`,
      [ 13, 17, 21 ],
      [ 0, 1, 0 ],
    );

    const twistCIndex = child.morphTargetDictionary.twistC;
    const twistCMorphTrack = new NumberKeyframeTrack(
      `.morphTargetInfluences[${twistCIndex}]`,
      [ 23, 27, 31],
      [ 0, 1, 0 ],
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

function explode( points ) {

  points.geometry.computeBoundingBox();
  const minY = points.geometry.boundingBox.min.y;

  const positions = points.geometry.attributes.position;

  const count = positions.count;

  let verticesDown = 0;
  const speed = 1;

  let move = true;

  const vec = new Vector3();

  points.userData.onUpdate = ( delta ) => {

    if ( !move ) return;

    verticesDown = 0;

    for ( let i = 0; i < count; i++ ) {

      vec.fromBufferAttribute( positions, i );

      if ( vec.y > minY ) {

        positions.setXYZ(
          i,
          vec.x + 1.5 * ( 0.50 - Math.random() ) * speed * delta,
          vec.y + 3.0 * ( 0.25 - Math.random() ) * speed * delta,
          vec.z + 1.5 * ( 0.50 - Math.random() ) * speed * delta,
        );

      } else {

        verticesDown++;

      }

    }

    if ( verticesDown >= count ) {

      move = false;

    }

    positions.needsUpdate = true;

  };


}

export default function setupAnimations( points, models, app ) {

  const danceAction = setupAnimationClips( points.dancer, models.dancer.animations );
  setupMorphTargetAnims( points.dancer );

  dummyAnims( app, danceAction );

  // explode( points.dancer.children[ 0 ] );
  // explode( points.dancer.children[ 1 ] );

}
