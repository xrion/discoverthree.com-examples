
import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadGLTFModels( materials ) {

  const loader = createAsyncLoader( new GLTFLoader() );

  const gltf = await loader.load( 'models/Horse.glb' );

  const mainHorse = gltf.scene.children[ 0 ];
  mainHorse.animations = gltf.animations;

  const guiHorse = mainHorse.clone();
  guiHorse.animations = gltf.animations;

  guiHorse.material = materials.guiHorse

  guiHorse.scale.set( 4, 4, 4 );
  guiHorse.rotation.set( Math.PI / 2, -Math.PI / 2, 0 );

  // we'll use these to reset the horse's position later
  mainHorse.userData.initialPosition = mainHorse.position.clone();
  mainHorse.userData.initialRotation = mainHorse.rotation.clone();

  // and we'll do the same for the model's proxy
  guiHorse.userData.initialPosition = guiHorse.position.clone();
  guiHorse.userData.initialRotation = guiHorse.rotation.clone();

  return {

    horse: {

      main: mainHorse,
      gui: guiHorse,

    }

  };

}
