
function initWireframeToggle( mesh ) {

  const toggle = document.querySelector( '#wireframe' );

  toggle.addEventListener( 'input', ( e ) => {

    mesh.material.wireframe = e.target.checked;

  } );

}

let index = 0;

function initAddModelsButton( amount, models, group ) {

  const maxModelsMessage = document.querySelector( '#max-models-message' )
  const value = document.querySelector( '#models-value' );

  const button = document.querySelector( `#add-${amount}` );
  button.addEventListener( 'click', () => {

    for ( let i = index; i < index + amount; i++ ) {

      if ( models[ i ] !== undefined ) {

        group.add( models[ i ] );
        value.textContent = index + 1;

      } else {

        maxModelsMessage.style.display = 'inherit';
        value.textContent = models.length + 1;

      }

    }


    index += amount;

  } );

}

function initButtons( models, group ) {

  initAddModelsButton( 1, models, group );
  initAddModelsButton( 10, models, group );
  initAddModelsButton( 100, models, group );

}
