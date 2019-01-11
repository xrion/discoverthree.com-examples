// We'l use this flag to make sure that the horse can't move in two directions at one
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
function start( model, direction, rotation ) {

  // if we're already moving, do nothing
  if( moving ) return;

  // point horsey in the right direction
  model.rotation.y = rotation;

  // here the onUpdate function will update the "run" animation,
  // and also move the horse in one of the four directions
  model.userData.onUpdate = ( delta ) => {

    // reset the direction vector, then multiply it by the time elapsed since
    // the previous frame
    dir.copy( direction ).multiplyScalar( delta * speed );

    model.userData.mixer.update( delta );
    model.position.add( dir );

  };

  // set the moving flag to true to prevent double movements
  moving = true;

}

function stop( model ) {

  model.userData.onUpdate = null;
  moving = false;

}

function simpleControls( model ) {

  resetControl( model );
  forwardsControl( model );
  backwardControl( model );
  leftControl( model );
  rightControl( model );

}

function resetControl( model ) {

  window.addEventListener( 'keydown', ( e ) => {

    if( e.key === 'r' || e.key === 'R' ) {

      resetPosition( model );
      resetRotation( model );

    }

  } );

}

function resetPosition( model ) {

  model.position.copy( model.userData.initialPosition );

}

function resetRotation( model ) {

  model.rotation.copy( model.userData.initialRotation );

}

function forwardsControl( model ) {

  window.addEventListener( 'keydown', ( e ) => {

    if( e.key === 'ArrowUp' ) start( model, forwards, Math.PI );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if( e.key === 'ArrowUp' ) stop( model );

  } );

}

function backwardControl( model ) {

  window.addEventListener( 'keydown', ( e ) => {

    if( e.key === 'ArrowDown' ) start( model, backward, 0 );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if( e.key === 'ArrowDown' ) stop( model );

  } );

}

function leftControl( model ) {

  window.addEventListener( 'keydown', ( e ) => {

    if( e.key === 'ArrowLeft' ) start( model, left, -Math.PI / 2 );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if( e.key === 'ArrowLeft' ) stop( model );

  } );

}

function rightControl( model ) {

  window.addEventListener( 'keydown', ( e ) => {

    if( e.key === 'ArrowRight' ) start( model, right, Math.PI / 2 );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if( e.key === 'ArrowRight' ) stop( model );

  } );

}