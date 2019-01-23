function wireframeControl( material ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    material.wireframe = !material.wireframe;

    e.preventDefault();

  } );
}

function initMeshes( scene ) {

  const geometry = createGeometry();

  const map = new THREE.TextureLoader().load( '/textures/phoenix_park_dublin.jpg' );

  const material = new THREE.MeshBasicMaterial( { map, wireframe: false } );
  wireframeControl( material );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

  return mesh;

}
