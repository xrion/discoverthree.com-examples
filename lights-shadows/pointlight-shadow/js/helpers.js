import {
  CameraHelper,
} from './vendor/three/three.module.js';

function createShadowCameraHelper( light ) {

  return new CameraHelper( light.shadow.camera );

}

export default function createHelpers( lights ) {

  return {

    shadowCameraHelper: createShadowCameraHelper( lights.main ),

  };

}
