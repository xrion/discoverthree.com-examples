import {
  Vector3,
  B,
} from './vendor/three/three.module.js';

import {
  xControls,
} from './vendor/three/controls/todo.js';

export default function setupControls( app ) {

  app.controlsAutoUpdate = false;

  // call control.update()
  // to move the camera into the correct position
  // we could also use camera.lookat( 0, 0, 0 )
  app.controls.update();

  initOverlay();

  app.controls.addEventListener( 'change', () => {

    app.update();
    app.render();

  } );

}

function initOverlay() {

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';

  } );

}
