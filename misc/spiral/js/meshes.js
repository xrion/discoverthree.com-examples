import {
  Group,
  Mesh,
} from './vendor/three/three.module.js';

import pointOnSphericalSpiral from './utility/pointOnSphericalSpiral.js';

function createSpiral( geometries, materials ) {

  const spiral = new Group();

  const sphere = new Mesh( geometries.sphere, materials.basic );

  for ( let i = -500; i < 500; i++ ) {

    const nextSphere = sphere.clone();
    const position = pointOnSphericalSpiral( i );
    nextSphere.position.copy( position );
    spiral.add( nextSphere );

  }

  return spiral;

}


export default function createMeshes( geometries, materials ) {

  return {

    spiral: createSpiral( geometries, materials ),

  };

}
