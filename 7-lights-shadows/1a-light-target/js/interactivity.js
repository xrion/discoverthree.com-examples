function setupLightTargetControls( lights, targetObjects ) {

  targetObjects.default = lights.mainLight.target;

  initRetargetButton( lights, 'default', targetObjects );
  initRetargetButton( lights, 'front', targetObjects );
  initRetargetButton( lights, 'middle', targetObjects );
  initRetargetButton( lights, 'rear', targetObjects );

}

function initRetargetButton( lights, name, targetObjects ) {

  const button = document.querySelector( `#target-${name}` );

  button.addEventListener( 'click', () => {

    lights.mainLight.target = targetObjects[ name ];
    lights.mainLightHelper.update();

  } );
}
