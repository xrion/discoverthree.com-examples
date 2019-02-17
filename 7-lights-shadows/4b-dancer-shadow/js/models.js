import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadGLTFModels( environments ) {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/dancer.glb' );

  const dancer = gltf.scene.children[ 0 ];
  dancer.animations = gltf.animations;

  dancer.traverse( ( child ) => {

    child.castShadow = true;
    child.receiveShadow = true;

    if ( child.material ) {

      child.material.envMap = environments.castle;
      child.material.envMapIntensity = 10;

    }

  } );

  return {

    dancer,

  };

}
