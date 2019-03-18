function setupWireframeControl( materials ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    materials.forEach( ( material ) => {

      material.wireframe = !material.wireframe;

    } );

    e.preventDefault();

  } );
}

function setupMorphSlider( mesh, morphName ) {

  const slider = document.querySelector( `#${morphName}-slider` );
  const value = document.querySelector( `#${morphName}-value` );

  const targetIndex = mesh.morphTargetDictionary[ morphName ];

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    mesh.morphTargetInfluences[ targetIndex ] = slider.value;

    e.preventDefault();

  } );

}

export default function setupControls( meshes ) {

  setupMorphSlider( meshes.leftQuad, 'explode' );
  setupMorphSlider( meshes.rightQuad, 'rotate' );
  setupMorphSlider( meshes.rightQuad, 'scale' );

  setupWireframeControl( [ meshes.leftQuad.material, meshes.rightQuad.material ] );

}
