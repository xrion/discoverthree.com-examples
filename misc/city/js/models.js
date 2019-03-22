import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

import { DRACOLoader } from './vendor/three/loaders/DRACOLoader.js';
import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.js';

export default async function loadModels( environments ) {

  const gltfLoader = new GLTFLoader();

  DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const gltf = await asyncLoader.load( 'models/city.glb' );

  const city = gltf.scene.children[ 0 ];
  city.scale.multiplyScalar( 0.01 );

  city.rotation.y = Math.PI / 2;

  city.traverse( ( child ) => {

    if ( child.isMesh ) {
      child.material.envMap = environments.sky;
      child.material.color.set( 0xffffff );
      child.material.metalness = 0;
    }

  } );

  return {

    city,

  };

}
