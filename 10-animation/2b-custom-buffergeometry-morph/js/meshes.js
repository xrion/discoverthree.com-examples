function initMeshes( scene ) {

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

  const meshA = new THREE.Mesh( geometry, materialA );
  meshA.position.x -= 2;

  const meshB = new THREE.Mesh( geometryIndexed, materialB );
  meshB.position.x += 2;

  scene.add( meshA, meshB );

  console.log( meshA, meshB );

  return { meshA, meshB };

}
