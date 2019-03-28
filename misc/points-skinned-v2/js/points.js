import {
  Group, Points,
} from './vendor/three/three.module.js';

import SkinnedPoints from './SkinnedPoints.js';

export default function createPoints( geometries, materials, models ) {

  const skeleton = models.dancer.getObjectByName( 'Alpha_Surface' ).skeleton;
  const rootBone = skeleton.bones[ 0 ];

  const surface = new SkinnedPoints( geometries.surface, materials.surface );
  surface.name = 'surface';
  surface.add( rootBone );
  surface.bind( skeleton );

  const joints = new SkinnedPoints( geometries.joints, materials.joints );
  joints.name = 'joints';
  joints.add( rootBone );
  joints.bind( skeleton );

  const dancer = new Group().add( surface, joints, rootBone );

  const surfaceClone = new Points( geometries.surfaceClone, materials.surfaceClone );
  // surfaceClone.position.x = -2;

  return {

    dancer,
    surfaceClone,

  };

}
