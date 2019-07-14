import {
  SpotLightHelper,
} from './vendor/three/three.module.js';

function createSpotLightHelper( light ) {

  return new SpotLightHelper( light );

}

export default function createHelpers( lights ) {

  return {

    spotLightHelper: createSpotLightHelper( lights.main ),

  };

}
