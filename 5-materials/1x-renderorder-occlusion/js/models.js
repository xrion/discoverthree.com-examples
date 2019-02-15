import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadGLTFModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/Parrot.glb' );

  const parrot = gltf.scene.children[ 0 ];
  parrot.animations = gltf.animations;

  parrot.position.y = 2;
  parrot.rotation.z = Math.PI / 2;

  parrot.renderOrder = 0;
  parrot.material.colorWrite = false;

  return { parrot };

}
