import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

function setupModel( gltf, materials ) {

  const trumpet = gltf.scene.getObjectByName( 'trumpet' );

  trumpet.rotation.set( 0, 0, 0 );

  trumpet.children[ 0 ].material = materials.silver;
  trumpet.children[ 1 ].material = materials.brass;

  return trumpet;

}

export default async function loadModels( materials ) {

  const loader = createAsyncLoader( new GLTFLoader() );

  const trumpet = setupModel(
    await loader.load( 'models/trumpet/trumpet.glb' ),
    materials,
  );

  return { trumpet };

}
