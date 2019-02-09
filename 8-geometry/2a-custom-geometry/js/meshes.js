function wireframeControl( material ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    material.wireframe = !material.wireframe;

    e.preventDefault();

  } );
}

function createMeshes() {

  const geometry = createGeometry();

  const material = new THREE.MeshBasicMaterial( { wireframe: true } );
  wireframeControl( material );

  const box = new THREE.Mesh( geometry, material );

  return { box };

}
