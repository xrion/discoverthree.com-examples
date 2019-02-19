import {
  SkeletonHelper,
} from './vendor/three/three.module.js';

function createSkeletonHelper( skinnedMesh ) {

  return new SkeletonHelper( skinnedMesh );

}

export default function createHelpers( meshes ) {

  return {

    skeletonHelper: createSkeletonHelper( meshes.skinnedMesh ),

  };

}
