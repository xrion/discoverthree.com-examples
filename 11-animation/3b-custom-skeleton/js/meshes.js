function addSkeletonToMesh( mesh ) {

  const skeleton = createSkeleton();
  const rootBone = skeleton.bones[ 0 ];
  mesh.add( rootBone );

  mesh.bind( skeleton );

}

function createMeshes() {

  const geometry = new THREE.CylinderBufferGeometry( 1, 1, 8, 8, 16 );

  const material = new THREE.MeshStandardMaterial( {
    color: 0x800080,

    // if we forget to set this then moving the bones will have no effect!
    skinning: true,
  } );

  const skinnedMesh = new THREE.SkinnedMesh( geometry, material );

  addSkeletonToMesh( skinnedMesh );

  return { skinnedMesh };

}
