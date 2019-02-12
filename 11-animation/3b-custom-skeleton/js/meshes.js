import {
  CylinderBufferGeometry,
  MeshStandardMaterial,
  SkinnedMesh,
} from './vendor/three/three.module.js';

export default function createMeshes( skeleton ) {

  const geometry = new CylinderBufferGeometry( 1, 1, 8, 8, 16 );

  const material = new MeshStandardMaterial( {
    color: 0x800080,

    // if we forget to set this then moving the bones will have no effect!
    skinning: true,
  } );

  const skinnedMesh = new SkinnedMesh( geometry, material );

  const rootBone = skeleton.bones[ 0 ];
  skinnedMesh.add( rootBone );
  skinnedMesh.bind( skeleton );

  return { skinnedMesh };

}
