import {
  CameraHelper,
} from './vendor/three/three.module.js';

function createCameraHelper( camera ) {

  const cameraHelper = new CameraHelper( camera );
  cameraHelper.visible = false;

  return cameraHelper;

}

export default function createHelpers( camera ) {

  return {

    cameraHelper: createCameraHelper( camera ),

  };

}
