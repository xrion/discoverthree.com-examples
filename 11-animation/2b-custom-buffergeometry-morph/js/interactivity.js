function setupWireframeControl( materials ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    materials.forEach( ( material ) => {

      material.wireframe = !material.wireframe;

    } );

    e.preventDefault();

  } );
}

function setupLeftMorphControl( mesh ) {

  const slider = document.querySelector( '#left-morph-slider' );
  const value = document.querySelector( '#left-morph-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    mesh.morphTargetInfluences[ 0 ] = slider.value;

    e.preventDefault();

  } );

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

function setupRightMorphControl( mesh ) {

  rotateControl( mesh );
  scaleControl( mesh );

}

export default function setupControls( meshes ) {

  setupLeftMorphControl( meshes.leftQuad );
  setupRightMorphControl( meshes.rightQuad );
  setupWireframeControl( [ meshes.leftQuad.material, meshes.rightQuad.material ] );

}
