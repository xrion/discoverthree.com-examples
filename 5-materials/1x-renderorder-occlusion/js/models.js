import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel( gltf, position ) {

  const parrot = gltf.scene.children[ 0 ];
  const animation = gltf.animations[ 0 ];

  parrot.position.y = 2;
  parrot.rotation.z = Math.PI / 2;

  parrot.renderOrder = 0;

  parrot.material.colorWrite = false;

  const max = new Vector3( 8, 5, -10 );
  const min = new Vector3( -8, -5, 4 );

  let t = 0;

  parrot.position.x = max.x;

  const mixer = new AnimationMixer( parrot );

  // we'll check every object in the scene for
  // this function and call it once per frame
  parrot.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

    // once t reaches 1,
    // move the bird to a new random position
    if ( t > 1 ) {

      t = 0;
      parrot.position.y = MathUtils.randFloat( min.y, max.y );
      parrot.position.z = MathUtils.randFloat( min.z, max.z );

    }

    t += delta / 3;

    parrot.position.x = MathUtils.lerp( max.x, min.x, t );


    const action = mixer.clipAction( animation );
    action.play();

  };

  return parrot;

}

export default async function loadModels() {

  const loader = createAsyncLoader( new GLTFLoader() );

  const parrot = setupModel(
    await loader.load( 'models/Parrot.glb' ),
  );

  return { parrot };

}
