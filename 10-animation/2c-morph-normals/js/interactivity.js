function wireframeControl( materials ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    materials.forEach( ( material ) => {

      material.wireframe = !material.wireframe;

    } );

    e.preventDefault();

  } );
}

function morphControl( mesh ) {

  const slider = document.querySelector( '#morph-slider' );
  const value = document.querySelector( '#morph-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    mesh.morphTargetInfluences[ 0 ] = slider.value;

    e.preventDefault();

  } );

}
