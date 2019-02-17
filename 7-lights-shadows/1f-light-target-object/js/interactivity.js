function setupHelperVisibilityToggle( helper ) {

  const toggle = document.querySelector( '#show-helper' );

  toggle.addEventListener( 'input', () => {

    helper.visible = !helper.visible;

  } );

}

function initRetargetButton( lights, targetName, targets, lightHelper ) {

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

  initRetargetButton( lights, 'default', targets, helpers.spotLightHelper );
  initRetargetButton( lights, 'front', targets, helpers.spotLightHelper );
  initRetargetButton( lights, 'middle', targets, helpers.spotLightHelper );
  initRetargetButton( lights, 'rear', targets, helpers.spotLightHelper );

}
