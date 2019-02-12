import {
  AnimationMixer,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function logInfo( cesiumMan, animations ) {

  const bones = cesiumMan.children[ 0 ];
  const skinnedMesh = cesiumMan.children[ 1 ];

  console.log( 'The cesiumMan model that we just loads consists of two parts.' );

  console.log( 'The first is the array of bones that make up the skeleton: ', bones );

  console.log( 'The second part is the skinned mesh, the position of which is controlled by the bones": ', skinnedMesh );

  console.log( 'Finally, here are the AnimationClips that control the bones', animations );

}


function setupModel( gltf ) {

  const cesiumMan = gltf.scene.children[ 0 ];

  logInfo( cesiumMan, gltf.animations );

  console.log( 'Here\'s the model we just loaded: ', cesiumMan );

  const mixer = new AnimationMixer( cesiumMan );

  cesiumMan.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  // this model has a whole bunch of animation clips
  // when played all together they combine into
  // a funky walk animation
  gltf.animations.forEach( ( clip ) => {

    const action = mixer.clipAction( clip );
    action.play();

  } );


  // Cesium man already has a material set up correctly,
  // but we'll replace it here with a plane white material so
  // that we can examine the model more easily
  cesiumMan.children[ 1 ].material = new MeshStandardMaterial( {

    // this needs to be set for any mesh that has skeletal
    // animation. If you leave it out, then skinning
    // will not work!
    skinning: true,

  } );

  return cesiumMan;

}

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const cesiumMan = setupModel(
    await loader.load( 'models/CesiumMan.glb' ),
  );

  return { cesiumMan };

}
