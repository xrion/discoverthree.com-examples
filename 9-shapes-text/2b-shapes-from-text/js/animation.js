import {
  Math as MathUtils,
} from './vendor/three/three.module.js';

function selectAxis() {

  const axisNum = MathUtils.randInt( 0, 2 );
  if ( axisNum === 0 ) return 'x';
  if ( axisNum === 1 ) return 'y';
  return 'z';

}

function spinAtRandomIntervals( object ) {

  let spinning = false;
  let axis = selectAxis();

  setTimeout(
    () => { spinning = true; },
    MathUtils.randInt( 0, 5000 ),
  );

  object.userData.onUpdate = ( delta ) => {

    if ( spinning ) {

      object.rotation[ axis ] += delta * 4;

      if ( object.rotation[ axis ] >= 2 * Math.PI ) {

        object.rotation[ axis ] = 0;
        spinning = false;
        axis = selectAxis();

        setTimeout(
          () => { spinning = true; },
          MathUtils.randInt( 3000, 5000 ),
        );

      }

    }

  };

}

export default function setupAnimation( lines ) {

  lines.text.traverse( ( child ) => {

    if ( child.isLine ) {

      spinAtRandomIntervals( child );

    }

  } );

}
