function wireframeControl( material ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    material.wireframe = !material.wireframe;

    e.preventDefault();

  } );
}

function createMeshes() {

  const geometry = createGeometry();

  const map = new THREE.TextureLoader().load( 'textures/color/phoenix_park_dublin.jpg' );
  map.encoding = THREE.sRGBEncoding;

  const material = new THREE.MeshBasicMaterial( { map, wireframe: false } );
  wireframeControl( material );

  const box = new THREE.Mesh( geometry, material );

  return { box };

}
