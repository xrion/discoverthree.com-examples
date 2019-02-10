function setupLightTargetControls( lights, lightHelper, targetObjects ) {

  targetObjects.default = lights.main.target;

  initRetargetButton( lights, lightHelper, 'default', targetObjects );
  initRetargetButton( lights, lightHelper, 'front', targetObjects );
  initRetargetButton( lights, lightHelper, 'middle', targetObjects );
  initRetargetButton( lights, lightHelper, 'rear', targetObjects );

}

function initRetargetButton( lights, lightHelper, targetName, targetObjects ) {

  const button = document.querySelector( `#target-${targetName}` );

  button.addEventListener( 'click', () => {

    lights.main.target = targetObjects[ targetName ];
    lightHelper.update();

  } );
}
