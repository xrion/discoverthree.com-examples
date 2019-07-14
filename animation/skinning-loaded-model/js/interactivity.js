export default function setupControls( materials ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    materials.skinning.wireframe = !materials.skinning.wireframe;

    e.preventDefault();

  } );
}
