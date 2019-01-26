function wireframeControl( materials ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    materials.forEach( ( material ) => {

      material.wireframe = !material.wireframe;

    } );

    e.preventDefault();

  } );
}
