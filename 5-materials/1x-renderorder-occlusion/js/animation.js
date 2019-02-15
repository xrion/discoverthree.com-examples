import {
  AnimationMixer,
  Math as MathUtils,
  Vector3,
} from './vendor/three/three.module.js';

function setupRandomizedFlyby( parrot ) {

  const max = new Vector3( 8, 5, -10 );
  const min = new Vector3( -8, -5, 4 );

  let t = 0;

  parrot.position.x = max.x;

  const mixer = new AnimationMixer( parrot );

  // we'll check every object in the scene for
  // this function and call it once per frame
  parrot.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

    // once t reaches 1,
    // move the bird to a new random position
    if ( t > 1 ) {

      t = 0;
      parrot.position.y = MathUtils.randFloat( min.y, max.y );
      parrot.position.z = MathUtils.randFloat( min.z, max.z );

    }

    t += delta / 3;

    parrot.position.x = MathUtils.lerp( max.x, min.x, t );

  };

  parrot.animations.forEach( ( clip ) => {

    const action = mixer.clipAction( clip );
    action.play();

  } );

}

export default function setupAnimations( models ) {

  setupRandomizedFlyby( models.parrot );

}
