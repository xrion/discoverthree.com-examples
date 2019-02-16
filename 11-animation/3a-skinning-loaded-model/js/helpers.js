import {
  SkeletonHelper,
} from './vendor/three/three.module.js';

function createSkeletonHelper( model ) {

  return new SkeletonHelper( model );

}

export default function createHelpers( models ) {

  return {

    skeletonHelper: createSkeletonHelper( models.cesiumMan ),

  };

}
