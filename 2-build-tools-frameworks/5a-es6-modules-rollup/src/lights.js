import {
  AmbientLight,
  DirectionalLight,
} from 'three';

export default function initLights( scene ) {

  const ambientLight = new AmbientLight( 0xffffff, 1 );

  const frontLight = new DirectionalLight( 0xffffff, 1 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  scene.add( ambientLight, frontLight, backLight );

  return { ambientLight, frontLight, backLight };

}
