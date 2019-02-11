import {
  CylinderBufferGeometry,
  MeshStandardMaterial,
  SkinnedMesh,
} from './vendor/three/three.module.js';

function addSkeletonToMesh( mesh ) {

  const skeleton = createSkeleton();
  const rootBone = skeleton.bones[ 0 ];
  mesh.add( rootBone );

  mesh.bind( skeleton );

}

export default function createMeshes() {

  const geometry = new CylinderBufferGeometry( 1, 1, 8, 8, 16 );

  const material = new MeshStandardMaterial( {
    color: 0x800080,

    // if we forget to set this then moving the bones will have no effect!
    skinning: true,
  } );

  const skinnedMesh = new SkinnedMesh( geometry, material );

  addSkeletonToMesh( skinnedMesh );

  return { skinnedMesh };

}
