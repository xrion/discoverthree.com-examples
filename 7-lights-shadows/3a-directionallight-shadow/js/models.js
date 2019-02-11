import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel(  gltf ) {

  const protoHorse = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  protoHorse.position.set( 0, 0.5, -15 );
  protoHorse.rotation.set( Math.PI / 2, 0, -Math.PI / 2 );

  const horsesArray = [];

  // create ten clones of our protoHorse
  for ( let i = 0; i < 10; i++ ) {

    const horse = protoHorse.clone();

    horse.position.z += 1.6 * i;
    horse.scale.setScalar( 0.66 - 0.066 * i );

    const spherical = new THREE.Spherical().setFromVector3( horse.position );

    const mixer = new AnimationMixer( horse );

    horse.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

      spherical.theta -= delta / 2;
      horse.position.setFromSpherical( spherical );

      horse.rotation.z += delta / 2;

    };

    const action = mixer.clipAction( animation );
    action.startAt( MathUtils.randFloat( 0, 0.5 ) ).play();

    horse.castShadow = true;
    horse.receiveShadow = true;

    horsesArray.push( horse );

  }

  return horsesArray;

}

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const horsesArray = setupModel(
    await loader.load( 'models/Horse.glb' ),
  );

  return { horsesArray };

}
