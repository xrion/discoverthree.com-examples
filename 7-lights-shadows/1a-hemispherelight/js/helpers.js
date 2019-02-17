import {
  HemisphereLightHelper,
} from './vendor/three/three.module.js';

function createHemisphereLightHelper( light ) {

  return new HemisphereLightHelper( light );

}

export default function createHelpers( lights ) {

  return {

    hemisphereLightHelper: createHemisphereLightHelper( lights.ambient ),

  };

}
