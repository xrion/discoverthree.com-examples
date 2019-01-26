function initMeshes( scene ) {

  const geometry = setupGeometry();

  const material = new THREE.MeshStandardMaterial( {
    color: 0x800080,
    skinning: true,
  } );

  wireframeControl( [ material ] );

  const mesh = new THREE.SkinnedMesh( geometry, material );

  addSkeletonToMesh( mesh );

  scene.add( mesh );

  const helper = new THREE.SkeletonHelper( mesh );
  scene.add( helper );

  return mesh;

}

function addSkeletonToMesh( mesh ) {

  const skeleton = createSkeleton();
  const rootBone = skeleton.bones[ 0 ];
  mesh.add( rootBone );

  mesh.bind( skeleton );

}
