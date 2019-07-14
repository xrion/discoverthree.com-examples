import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadModels( materials ) {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/trumpet/Trumpet.glb' );

  const trumpet = gltf.scene.getObjectByName( 'trumpet' );

  trumpet.rotation.set( 0, 0, 0 );

  trumpet.children[ 0 ].material = materials.silver;
  trumpet.children[ 1 ].material = materials.brass;

  trumpet.children[ 0 ].castShadow = true;
  trumpet.children[ 0 ].receiveShadow = true;

  trumpet.children[ 1 ].castShadow = true;
  trumpet.children[ 1 ].receiveShadow = true;

  return {

    trumpet,

  };

}
