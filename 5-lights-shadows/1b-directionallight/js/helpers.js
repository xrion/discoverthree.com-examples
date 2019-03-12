import {
  DirectionalLightHelper,
} from './vendor/three/three.module.js';

function createDirectionalLightHelper( light ) {

  return new DirectionalLightHelper( light );

}

export default function createHelpers( lights ) {

  return {

    directionalLightHelper: createDirectionalLightHelper( lights.main ),

  };

}
