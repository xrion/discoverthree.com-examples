function wireframeControl( materials ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    materials.forEach( ( material ) => {

      material.wireframe = !material.wireframe;

    } );

    e.preventDefault();

  } );
}

function leftMorphControl( mesh ) {

  const slider = document.querySelector( '#left-morph-slider' );
  const value = document.querySelector( '#left-morph-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    mesh.morphTargetInfluences[ 0 ] = slider.value;

    e.preventDefault();

  } );

}


function rightMorphControl( mesh ) {

  rotateControl( mesh );
  scaleControl( mesh );

}

function rotateControl( mesh ) {

  const slider = document.querySelector( '#right-rotate-slider' );
  const value = document.querySelector( '#right-rotate-value' );

  const targetIndex = mesh.morphTargetDictionary.rotate;

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    mesh.morphTargetInfluences[ targetIndex ] = slider.value;

    e.preventDefault();

  } );

}


function scaleControl( mesh ) {

  const slider = document.querySelector( '#right-scale-slider' );
  const value = document.querySelector( '#right-scale-value' );

  const targetIndex = mesh.morphTargetDictionary.scale;

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    mesh.morphTargetInfluences[ targetIndex ] = slider.value;

    e.preventDefault();

  } );

}

