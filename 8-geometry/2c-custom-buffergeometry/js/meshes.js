function wireframeControl( material ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    material.wireframe = !material.wireframe;

    e.preventDefault();

  } );
}

function createMeshes() {

  const geometry = createGeometry();
  const geometryIndexed = createGeometryIndexed();

  const material = new THREE.MeshBasicMaterial( { wireframe: true } );
  wireframeControl( material );

  const leftQuad = new THREE.Mesh( geometry, material );
  leftQuad.position.x -= 2;

  const rightQuad = new THREE.Mesh( geometryIndexed, material );
  rightQuad.position.x += 2;

  return { leftQuad, rightQuad };

}
