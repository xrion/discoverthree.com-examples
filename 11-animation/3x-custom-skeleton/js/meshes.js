import {
  SkinnedMesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials, skeleton ) {

  const skinnedMesh = new SkinnedMesh( geometries.cylinder, materials.skinning );

  const rootBone = skeleton.bones[ 0 ];
  skinnedMesh.add( rootBone );
  skinnedMesh.bind( skeleton );

  return {

    skinnedMesh,

  };

}
