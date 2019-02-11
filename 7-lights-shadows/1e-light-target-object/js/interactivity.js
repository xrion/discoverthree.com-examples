function setupRetargetButton( lights, lightHelper, targetName, targetObjects ) {

  const button = document.querySelector( `#target-${targetName}` );

  button.addEventListener( 'click', () => {

    lights.main.target = targetObjects[ targetName ];
    lightHelper.update();

  } );
}
export default function setupLightTargetControls( lights, lightHelper, targetObjects ) {

  targetObjects.default = lights.main.target;

  setupRetargetButton( lights, lightHelper, 'default', targetObjects );
  setupRetargetButton( lights, lightHelper, 'front', targetObjects );
  setupRetargetButton( lights, lightHelper, 'middle', targetObjects );
  setupRetargetButton( lights, lightHelper, 'rear', targetObjects );

}

