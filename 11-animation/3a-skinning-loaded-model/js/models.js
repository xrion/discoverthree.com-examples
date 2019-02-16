
import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';
import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

export default async function loadGLTFModels( materials ) {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/CesiumMan.glb' );

  const cesiumMan = gltf.scene.children[ 0 ];
  cesiumMan.animations = gltf.animations;

  // The actual skinned mesh - the thing that we can see
  // - is a child of the main object
  cesiumMan.children[ 1 ].material = materials.skinning;

  return {

    cesiumMan,

  };

}
