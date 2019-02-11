import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel( gltf ) {

  const horse = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  horse.position.set( -2, -2, 0 );

  console.log( 'And here\'s the buffer geometry from the loaded model: ', horse.geometry );

  horse.material = new MeshBasicMaterial( {
    wireframe: true,
    morphTargets: true,
    vertexColors: THREE.VertexColors,
  } );


  const mixer = new AnimationMixer( horse );

  horse.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  const action = mixer.clipAction( animation );
  action.play();

  return horse;

}


export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const horse = setupModel(
    await loader.load( 'models/Horse.glb' ),
  );

  return { horse };

}
