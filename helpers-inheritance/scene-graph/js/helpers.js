import {
  AxesHelper,
} from './vendor/three/three.module.js';


function createAxesHelper() {

  const size = 1;

  const axesHelper = new AxesHelper( size );
  axesHelper.position.set( 0, 0, 0 );

  return axesHelper;

}

export default function createHelpers() {

  return {

    axesHelper: createAxesHelper(),

  };

}
