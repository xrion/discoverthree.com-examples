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

  const map = new THREE.TextureLoader().load( 'textures/color/phoenix_park_dublin.jpg' );
  map.encoding = THREE.sRGBEncoding;

  const material = new THREE.MeshBasicMaterial( { map, wireframe: false } );

  wireframeControl( material );

  const leftQuad = new THREE.Mesh( geometry, material );
  leftQuad.position.x -= 1.5;

  const rightQuad = new THREE.Mesh( geometryIndexed, material );
  rightQuad.position.x += 1.5;

  return { leftQuad, rightQuad };

}
