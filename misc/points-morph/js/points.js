import {
  Group,
  Points,
} from './vendor/three/three.module.js';

export default function createPoints( geometries, materials ) {

  const updateMorphTargets = function( points ) {

    const geometry = points.geometry;
    let m; let ml; let name;

    const morphAttributes = geometry.morphAttributes;
    const keys = Object.keys( morphAttributes );

    if ( keys.length > 0 ) {

      const morphAttribute = morphAttributes[ keys[ 0 ] ];

      if ( morphAttribute !== undefined ) {

        points.morphTargetInfluences = [];
        points.morphTargetDictionary = {};

        for ( m = 0, ml = morphAttribute.length; m < ml; m++ ) {

          name = morphAttribute[ m ].name || String( m );

          points.morphTargetInfluences.push( 0 );
          points.morphTargetDictionary[ name ] = m;

        }

      }

    }

  }

  const surface = new Points( geometries.surface, materials.surface );
  surface.name = 'surface';
  updateMorphTargets( surface );

  const joints = new Points( geometries.joints, materials.joints );
  joints.name = 'joints';
  updateMorphTargets( joints );

  const dancer = new Group().add( surface, joints );

  return {

    dancer,

  };

}
