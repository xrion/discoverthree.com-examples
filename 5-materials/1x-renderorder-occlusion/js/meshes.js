import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const map = new TextureLoader().load( 'textures/color/moon.jpg' );
  map.encoding = sRGBEncoding;

  const geometry = new THREE.CircleBufferGeometry( 8, 128 );
  const material = new MeshBasicMaterial( { map } );

  const moon = new Mesh( geometry, material );

  moon.position.set( 0, 0, -10 );

  moon.renderOrder = 1;

  return { moon };

}
