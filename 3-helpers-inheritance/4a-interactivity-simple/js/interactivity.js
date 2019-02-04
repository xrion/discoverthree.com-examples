
const left = -1;
const right = 1;

// called whenever left or right arrow key is pressed
function start( object, direction ) {

  const speed = 10;

  object.userData.onUpdate = ( delta ) => {

    object.position.x += direction * delta * speed;

  };


}

// called whenever left or right arrow key is released
function stop( object ) {

  object.userData.onUpdate = null;

}

function leftControl( object ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'ArrowLeft' ) start( object, left, -Math.PI / 2 );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if ( e.key === 'ArrowLeft' ) stop( object );

  } );

}

function rightControl( object ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'ArrowRight' ) start( object, right, Math.PI / 2 );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if ( e.key === 'ArrowRight' ) stop( object );

  } );

}

function initControls( object ) {

  leftControl( object );
  rightControl( object );

}
