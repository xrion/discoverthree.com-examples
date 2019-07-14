function setupWireframeToggle( material ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    material.wireframe = !material.wireframe;

    e.preventDefault();

  } );

}

export default function setupControls( materials ) {

  setupWireframeToggle( materials.basic );

}
