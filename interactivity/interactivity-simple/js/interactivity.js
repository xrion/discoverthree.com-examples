
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

function setupLeftControl( object ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'ArrowLeft' ) start( object, left );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if ( e.key === 'ArrowLeft' ) stop( object );

  } );

}

function setupRightControl( object ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'ArrowRight' ) start( object, right );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if ( e.key === 'ArrowRight' ) stop( object );

  } );

}

export default function setupControls( object ) {

  setupLeftControl( object );
  setupRightControl( object );

}
