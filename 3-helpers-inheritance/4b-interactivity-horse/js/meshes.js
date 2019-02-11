import {
  Mesh,
  MeshStandardMaterial,
  PlaneBufferGeometry,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const geometry = new PlaneBufferGeometry( 1000, 1000 );
  geometry.rotateX( -Math.PI / 2 );

  const material = new MeshStandardMaterial( {
    color: 0x001100,
    metalness: 0,
    roughness: 1,
  } );

  const ground = new Mesh( geometry, material );

  return { ground };

}
