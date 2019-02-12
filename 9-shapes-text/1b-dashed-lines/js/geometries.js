import {
  BufferAttribute,
  BufferGeometry,
} from './vendor/three/three.module.js';

function createSquareGeometry() {

  const geometry = new BufferGeometry();

  const vertices = new Float32Array( [
    -1, -1, 0, // vertex A
    1, -1, 0, // vertex B
    1, 1, 0, // vertex C
    -1, 1, 0, // vertex D

    // LineDashedMaterial doesn't play well with LineLoop,
    // so to create a square we'll have to add a 5th vertex
    -1, -1, 0, // vertex E (same as vertex A)
  ] );

  // itemSize = 3 because there are 3 components (x, y, z) per vertex
  geometry.addAttribute( 'position', new BufferAttribute( vertices, 3 ) );

  return geometry;

}

export default function createGeometries() {

  return {
    square: createSquareGeometry(),
  };

}
