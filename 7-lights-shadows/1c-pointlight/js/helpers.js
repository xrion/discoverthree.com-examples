import {
  PointLightHelper,
} from './vendor/three/three.module.js';

function createPointLightHelper( light ) {

  return new PointLightHelper( light );

}

export default function createHelpers( lights ) {

  return {

    pointLightHelper: createPointLightHelper( lights.main ),

  };

}
