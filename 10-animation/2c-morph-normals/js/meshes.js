function initMeshes( scene ) {

  const geometry = createGeometry();

  const material = new THREE.MeshStandardMaterial( {
    wireframe: false,
    morphTargets: true,
    morphNormals: true,
  } );

  wireframeControl( [ material ] );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

  console.log( mesh );

  return mesh;

}
