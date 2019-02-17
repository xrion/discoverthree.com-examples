function setupHelperVisibilityToggle( helper ) {

  const toggle = document.querySelector( '#show-helper' );

  toggle.addEventListener( 'input', () => {

    helper.visible = !helper.visible;

  } );

}

function setupPositionButton( lights, targetName, lightHelper, x, y, z ) {

  const button = document.querySelector( `#target-${targetName}` );

  button.addEventListener( 'click', () => {

    lights.main.target.position.set( x, y, z );

    // we need to wait until after the next frame has rendered
    // before we update the target
    setTimeout( () => {

      lightHelper.update();

    }, 50 );

  } );

}

function setupAddTargetToSceneButton( lights, app, lightHelper ) {

  const button = document.querySelector( '#add-target-to-scene' );

  const warning = document.querySelector( '#target-warn' );

  button.addEventListener( 'click', () => {

    if ( lights.main.target.parent === null ) {

      app.scene.add( lights.main.target );
      button.textContent = 'Remove Target from Scene';
      warning.style.visibility = 'hidden';

    } else {

      app.scene.remove( lights.main.target );
      button.textContent = 'Add Target to Scene';
      warning.style.visibility = 'visible';

    }

    lightHelper.update();

  } );

}

export default function setupControls( app, lights, helpers ) {

  const helper = helpers.spotLightHelper;

  setupHelperVisibilityToggle( helper );

  setupAddTargetToSceneButton( lights, app, helper );

  setupPositionButton( lights, 'default', helper, 0, 0, 0 );
  setupPositionButton( lights, 'front', helper, 10, 6, 0 );
  setupPositionButton( lights, 'middle', helper, 10, 6, -10 );
  setupPositionButton( lights, 'rear', helper, -15, 6, 10 );

}
