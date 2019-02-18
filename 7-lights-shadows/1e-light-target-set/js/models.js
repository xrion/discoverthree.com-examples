import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';


export default async function loadGLTFModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  let gltf = await loader.load( 'models/Horse.glb' );

  const horse = gltf.scene.children[ 0 ];
  horse.animations = gltf.animations;
  horse.rotation.z = -Math.PI / 2;
  horse.position.set( -12, 0, 0 );

  gltf = await loader.load( 'models/Duck.glb' );

  const duck = gltf.scene.children[ 0 ].children[ 1 ];
  duck.position.set( 10, 1, -10 );
  duck.scale.set( 0.03, 0.03, 0.03 );

  gltf = await loader.load( 'models/WaltHead.glb' );

  const head = gltf.scene.children[ 0 ];
  head.position.set( 5, 10, 5 );
  head.scale.set( 0.1, 0.1, 0.1 );

  return {

    horse,
    duck,
    head,

  };

}
