function createSpiral() {

  const spiral = new Group();

  const geometry = new SphereBufferGeometry( 0.015, 12, 12 );
  const material = new MeshBasicMaterial( { color: 0xffffff } );

  const sphere = new Mesh( geometry, material );

  for ( let i = -500; i < 500; i++ ) {

    const nextSphere = sphere.clone();
    const position = pointOnSphericalSpiral( i );
    nextSphere.position.copy( position );
    spiral.add( nextSphere );

  }

  spiral.userData.onUpdate = ( delta ) => {

    spiral.rotation.x -= delta / 8;
    spiral.rotation.y += delta / 6;
    spiral.rotation.z -= delta / 5;

  };

  return spiral;

}

import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  return {
    spiral: createSpiral(),
  };

}
