import {
  TransformControls,
} from './vendor/three/controls/TransformControls.js';

import setupGizmoTypeSelect from './interactivity.js';

function initOverlay( orbitControls, transformControls ) {

  orbitControls.enabled = false;

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    document.querySelector( '#controls' ).style.display = 'initial';

    orbitControls.enabled = true;
    transformControls.visible = true;

  } );

}

function setupEventListeners( mesh, orbitControls, transformControls ) {

  transformControls.addEventListener( 'dragging-changed', ( e ) => {

    orbitControls.enabled = !e.value;

  } );

  transformControls.addEventListener( 'axis-changed', ( e ) => {

    if ( e.value !== null ) {

      mesh.userData.animate = false;
      console.log( `You highlighted the ${e.value} axis` );

    } else {

      mesh.userData.animate = true;

    }

  } );

  transformControls.addEventListener( 'change', ( e ) => {

    console.log( 'Change event fired' );

  } );

  transformControls.addEventListener( 'objectChange', ( e ) => {

    console.log( 'objectChange event fired' );

  } );

  transformControls.addEventListener( 'mouseDown', ( e ) => {

    console.log( `Mouse down ${e.mode} event fired` );

  } );

  transformControls.addEventListener( 'mouseUp', ( e ) => {

    console.log( `Mouse up ${e.mode} event fired` );

  } );

}

export default function setupTransformControls( mesh, app ) {

  const orbitControls = app.controls;
  const transformControls = new TransformControls( app.camera, app.container );

  initOverlay( orbitControls, transformControls );

  setupGizmoTypeSelect( transformControls );

  // attach the controls to the mesh that we want to control
  transformControls.attach( mesh );

  // if we later want to detach we can use the detach method
  // transformControls.detach( mesh );

  // add the controls to the scene so that the gizmo is visible
  app.scene.add( transformControls );
  transformControls.visible = false;

  setupEventListeners( mesh, orbitControls, transformControls );

  // If we want to stop using controls, we need to call this function.
  // It removes all the eventListeners that that controls set up
  // transformControls.dispose();

}
