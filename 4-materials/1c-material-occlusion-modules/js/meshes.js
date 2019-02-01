import {
  CircleBufferGeometry,
  MeshBasicMaterial,
  Mesh,
} from './vendor/three.module.js';

export default function initMeshes( scene ) {
  const geometry = new CircleBufferGeometry( 8, 128 );
  const material = new MeshBasicMaterial( { color: 0x800080 } );

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  material.color.convertSRGBToLinear();

  const mesh = new Mesh( geometry, material );

  mesh.position.set( 0, 0, -15 );

  mesh.renderOrder = 1;

  scene.add( mesh );

  return mesh;
}
