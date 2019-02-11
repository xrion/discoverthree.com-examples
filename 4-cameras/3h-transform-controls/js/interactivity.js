export default function setupGizmoTypeSelect( transformControls ) {

  const select = document.querySelector( '#gizmo-select' );

  select.addEventListener( 'change', ( e ) => {

    e.preventDefault();

    transformControls.mode = e.target.value;

  } );

}
