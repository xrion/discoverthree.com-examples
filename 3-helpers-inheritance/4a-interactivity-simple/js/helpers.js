import {
  ArrowHelper,
  Vector3,
} from './vendor/three/three.module.js';

function createArrowHelper() {

  const origin = new Vector3( 0, 0, 0 );
  const length = 3;
  const headLength = 1;
  const headWidth = 1;
  const direction = new Vector3( 1, 0, 0 );

  const arrowHelper = new ArrowHelper( direction, origin, length, 0xff0000, headLength, headWidth );

  return { arrowHelper };

}

export default function createHelpers() {

  return {
    arrowHelper: createArrowHelper(),
  };
}
