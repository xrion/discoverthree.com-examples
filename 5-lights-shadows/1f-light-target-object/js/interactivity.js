function setupHelperVisibilityToggle( helper ) {

  const toggle = document.querySelector( '#show-helper' );

  toggle.addEventListener( 'input', () => {

    helper.visible = !helper.visible;

  } );

}

function setupTargetButton( lights, targetName, targets, lightHelper ) {

  const button = document.querySelector( `#target-${targetName}` );

  button.addEventListener( 'click', () => {

    lights.main.target = targets[ targetName ];
    lightHelper.update();

  } );
}

export default function setupControls( lights, models, helpers ) {

  models.default = lights.main.target;

  setupHelperVisibilityToggle( helpers.spotLightHelper );

  setupTargetButton( lights, 'default', models, helpers.spotLightHelper );
  setupTargetButton( lights, 'duck', models, helpers.spotLightHelper );
  setupTargetButton( lights, 'head', models, helpers.spotLightHelper );
  setupTargetButton( lights, 'horse', models, helpers.spotLightHelper );

}
