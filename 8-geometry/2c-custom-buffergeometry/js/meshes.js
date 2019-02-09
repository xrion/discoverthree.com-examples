function wireframeControl( material ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    material.wireframe = !material.wireframe;

    e.preventDefault();

  } );
}

function createMeshes( scene ) {

  const geometry = createGeometry();
  const geometryIndexed = createGeometryIndexed();

  const material = new THREE.MeshBasicMaterial( { wireframe: true } );
  wireframeControl( material );

  const meshA = new THREE.Mesh( geometry, material );
  meshA.position.x -= 2;

  const meshB = new THREE.Mesh( geometryIndexed, material );
  meshB.position.x += 2;

  scene.add( meshA, meshB );

  // add a helper to show normals in the left square.
  // red lines are normals
  scene.add( new THREE.VertexNormalsHelper( meshA ) );

  return { meshA, meshB };

}
