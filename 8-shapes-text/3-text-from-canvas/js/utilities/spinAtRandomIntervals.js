function selectAxis() {

  const axisNum = THREE.Math.randInt( 0, 2 );
  if ( axisNum === 0 ) return 'x';
  else if ( axisNum === 1 ) return 'y';
  return 'z';

}

function spinAtRandomIntervals( model, intervalMin, intervalMax ) {

  let spinning = false;
  let axis = selectAxis();

  const randomInterval = THREE.Math.randInt( intervalMin, intervalMax );

  setTimeout( () => { spinning = true; }, randomInterval );

  model.userData.onUpdate = ( delta ) => {

    if( spinning ) {

      model.rotation[ axis ] += delta * 4;

      if( model.rotation[ axis ] >= 2 * Math.PI ) {

        model.rotation[ axis ] = 0;
        spinning = false;
        axis = selectAxis();

        const randomInterval = THREE.Math.randInt( intervalMin, intervalMax );

        setTimeout( () => {
          spinning = true;
        }, randomInterval );

      }

    }


  };

}