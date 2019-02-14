import {
  Vector3,
} from './vendor/three/three.module.js';

// We'll use this flag to make sure that the horse can't move in two directions at one
let moving = false;

// speed scaling factor
const speed = 10;

// always create all your objects first, never inside a loop
// since object creation in JS is expensive
const dir = new Vector3();

const forwards = new Vector3( 0, 0, -1 );
const backward = new Vector3( 0, 0, 1 );
const left = new Vector3( -1, 0, 0 );
const right = new Vector3( 1, 0, 0 );

// rotate on y-axis
const yAxis = new Vector3( 0, 1, 0 );

function resetPosition( horse ) {

  horse.main.position.copy( horse.main.userData.initialPosition );
  horse.gui.position.copy( horse.gui.userData.initialPosition );

}

function resetRotation( horse ) {

  horse.main.rotation.copy( horse.main.userData.initialRotation );
  horse.gui.rotation.copy( horse.gui.userData.initialRotation );

}

// called whenever one of the arrow keys is pressed
function start( horse, direction, rotation ) {

  // if we're already moving, do nothing
  if ( moving ) return;

  // point horsey in the right direction
  resetRotation( horse );
  horse.main.rotateOnWorldAxis( yAxis, rotation );

  if ( direction === left ) {

    horse.gui.rotation.set( Math.PI, -Math.PI, -Math.PI / 2 );

  } else if ( direction === right ) {

    horse.gui.rotation.set( Math.PI, -Math.PI, Math.PI / 2 );

  } else if ( direction === forwards ) {

    horse.gui.rotation.set( -Math.PI / 2, -Math.PI / 2, 0 );

  } // final case 'backward' is original rotation


  // here the onUpdate function will update the "run" animation,
  // and also move the horse in one of the four directions
  horse.main.userData.onUpdate = ( delta ) => {

    // reset the direction vector, then multiply it by the time elapsed since
    // the previous frame
    dir.copy( direction ).multiplyScalar( delta * speed );

    horse.main.userData.mixer.update( delta );
    horse.gui.userData.mixer.update( delta );

    horse.main.position.add( dir );
    horse.gui.position.add( dir.multiplyScalar( 5 ) );

  };

  // set the moving flag to true to prevent double movements
  moving = true;

}

function stop( horse ) {

  horse.main.userData.onUpdate = null;
  moving = false;

}

function resetControl( horse ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'r' || e.key === 'R' ) {

      resetPosition( horse );
      resetRotation( horse );

    }

  } );

}

function forwardsControl( horse ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'ArrowUp' ) start( horse, forwards, Math.PI );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if ( e.key === 'ArrowUp' ) stop( horse );

  } );

}

function backwardControl( horse ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'ArrowDown' ) start( horse, backward, 0 );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if ( e.key === 'ArrowDown' ) stop( horse );

  } );

}

function leftControl( horse ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'ArrowLeft' ) start( horse, left, -Math.PI / 2 );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if ( e.key === 'ArrowLeft' ) stop( horse );

  } );

}

function rightControl( horse ) {

  window.addEventListener( 'keydown', ( e ) => {

    if ( e.key === 'ArrowRight' ) start( horse, right, Math.PI / 2 );

  } );

  window.addEventListener( 'keyup', ( e ) => {

    if ( e.key === 'ArrowRight' ) stop( horse );

  } );

}

export default function setupControls( models ) {

  resetControl( models.horse );
  forwardsControl( models.horse );
  backwardControl( models.horse );
  leftControl( models.horse );
  rightControl( models.horse );

}
