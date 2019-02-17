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

export default function setupControls( lights, meshes, helpers ) {

  const targets = meshes.targets;

  targets.default = lights.main.target;

  setupHelperVisibilityToggle( helpers.spotLightHelper );

  setupTargetButton( lights, 'default', targets, helpers.spotLightHelper );
  setupTargetButton( lights, 'front', targets, helpers.spotLightHelper );
  setupTargetButton( lights, 'middle', targets, helpers.spotLightHelper );
  setupTargetButton( lights, 'rear', targets, helpers.spotLightHelper );

}
