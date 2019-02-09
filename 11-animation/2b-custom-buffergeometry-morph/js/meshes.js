function createMeshes() {

  const geometry = createGeometry();
  const geometryIndexed = createGeometryIndexed();

  const map = new THREE.TextureLoader().load( 'textures/phoenix_park_dublin.jpg' );
  map.encoding = THREE.sRGBEncoding;

  const materialA = new THREE.MeshBasicMaterial( {
    map,
    wireframe: false,
    morphTargets: true,
  } );

  // we can't use the same material on two meshes with
  // different morph targets
  const materialB = materialA.clone();

  wireframeControl( [ materialA, materialB ] );

  const leftQuad = new THREE.Mesh( geometry, materialA );
  leftQuad.position.x -= 2;

  const rightQuad = new THREE.Mesh( geometryIndexed, materialB );
  rightQuad.position.x += 2;

  return { leftQuad, rightQuad };

}
