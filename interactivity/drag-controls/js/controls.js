import {
  DragControls,
} from './vendor/three/controls/DragControls.js';

function initOverlay( controls ) {

  controls.enabled = false;

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    controls.enabled = true;

  } );

}

function setMoving( selectedMesh, meshesArray, dragControls, orbitControls ) {

  selectedMesh.material = selectedMesh.userData.materials.highlight;

  for ( const mesh of meshesArray ) {

    mesh.userData.animate = false;

  }

  dragControls.enabled = true;
  orbitControls.enabled = false;

}

function reset( meshesArray, dragControls, orbitControls ) {

  for ( const mesh of meshesArray ) {

    mesh.userData.animate = true;

    mesh.material = mesh.userData.materials.main;

  }

  dragControls.enabled = false;
  orbitControls.enabled = true;

}

function setupEventListeners( meshesArray, dragControls, orbitControls ) {

  dragControls.addEventListener( 'hoveron', ( e ) => {

    setMoving( e.object, meshesArray, dragControls, orbitControls );

  } );


  dragControls.addEventListener( 'hoveroff', () => {

    setTimeout( reset( meshesArray, dragControls, orbitControls ), 500 );

  } );


  dragControls.addEventListener( 'dragstart', () => {

    console.log( 'Started moving object' );

  } );

  dragControls.addEventListener( 'dragend', () => {

    console.log( 'Finished moving object' );

  } );

  dragControls.addEventListener( 'drag', () => {

    // fires continuously while moving object

  } );

}


export default function setupDragControls( meshesArray, app ) {

  const orbitControls = app.controls;
  const dragControls = new DragControls( meshesArray, app.camera, app.container );

  initOverlay( orbitControls );

  dragControls.enabled = false;

  setupEventListeners( meshesArray, dragControls, orbitControls );

}
