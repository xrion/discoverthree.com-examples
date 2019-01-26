// We'll use this flag to make sure that the horse can't move in two directions at one
let moving = false;

// speed scaling factor
const speed = 10;

// always create all your objects first, never inside a loop
// since object creation in JS is expensive
const dir = new THREE.Vector3();

const forwards = new THREE.Vector3( 0, 0, -1 );
const backward = new THREE.Vector3( 0, 0, 1 );
const left = new THREE.Vector3( -1, 0, 0 );
const right = new THREE.Vector3( 1, 0, 0 );

// called whenever one of the arrow keys is pressed
function start( object, direction, rotation ) {

  // if we're already moving, do nothing
  if ( moving ) return;

  // point horsey in the right direction
  object.rotation.y = rotation;

  // here the onUpdate function will update the "run" animation,
  // and also move the horse in one of the four directions
  object.userData.onUpdate = ( delta ) => {

    // reset the direction vector, then multiply it by the time elapsed since
    // the previous frame
    dir.copy( direction ).multiplyScalar( delta * speed );

    object.userData.mixer.update( delta );
    object.position.add( dir );

  };

  // set the moving flag to true to prevent double movements
  moving = true;

}

function stop( object ) {

  object.userData.onUpdate = null;
  moving = false;

}

function resetControl( object ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'r' || e.key === 'R' ) {

      resetPosition( object );
      resetRotation( object );

    }

  } );

}

function resetPosition( object ) {

  object.position.copy( object.userData.initialPosition );

}

function resetRotation( object ) {

  object.rotation.copy( object.userData.initialRotation );

}

function forwardsControl( object ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'ArrowUp' ) start( object, forwards, Math.PI );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if ( e.key === 'ArrowUp' ) stop( object );

  } );

}

function backwardControl( object ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'ArrowDown' ) start( object, backward, 0 );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if ( e.key === 'ArrowDown' ) stop( object );

  } );

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

  resetControl( object );
  forwardsControl( object );
  backwardControl( object );
  leftControl( object );
  rightControl( object );

}
