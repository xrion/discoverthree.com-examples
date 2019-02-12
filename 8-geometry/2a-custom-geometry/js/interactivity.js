export default function setupMaterialControl( materials ) {
  console.log(materials);
  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    materials.basic.wireframe = !materials.basic.wireframe;

    e.preventDefault();

  } );
}
