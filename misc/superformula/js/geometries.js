// the 3D superformula is obtained via the spherical product
// of two 2D superformulas
import {
  Float32BufferAttribute,
  BufferGeometry,
} from './vendor/three/three.module.js';

function createSuperGeometry() {

  const geometry = new BufferGeometry();
  const positions = [];

  const step = 0.05;
  const scaleFactor = 1;

  // first 2D superformula params
  const a1 = 6;
  const b1 = 1;
  const m1 = 6;
  const n11 = 1;
  const n21 = 2;
  const n31 = 1;

  // second 2D superformula params
  const m2 = 2;
  const a2 = 2;
  const b2 = 2;
  const n12 = 1;
  const n22 = 1;
  const n32 = 1;

  const q = parseInt( 2 * Math.PI / step + 1.3462 );
  const o = parseInt( Math.PI / step + 1.5 );

  for ( let l = 0; l < ( q ); l++ ) {

    const u = -Math.PI + l * step;

    for ( let h = 0; h < ( o ); h++ ) {

      const s = -Math.PI / 2 + h * step;

      // first 2D superformula
      let m = Math.cos( m1 * u / 4 );
      m = 1 / a1 * Math.abs( m );
      m = Math.abs( m );
      let k = Math.sin( m1 * u / 4 );
      k = 1 / b1 * Math.abs( k );
      k = Math.abs( k );
      const g = m ** n21 + k ** n31;
      let v = Math.abs( g );
      v **= ( -1 / n11 );

      // second 2D superformula
      m = Math.cos( m2 * s / 4 );
      m = 1 / a2 * Math.abs( m );
      m = Math.abs( m );
      k = Math.sin( m2 * s / 4 );
      k = 1 / b2 * Math.abs( k );
      k = Math.abs( k );
      const e = m ** n22 + k ** n32;
      let t = Math.abs( e );
      t **= -1 / n12;

      positions.push(
        v * Math.cos( u ) * t * Math.cos( s ) * scaleFactor,
        v * Math.sin( u ) * t * Math.cos( s ) * scaleFactor,
        t * Math.sin( s ) * scaleFactor,
      );

    }
  }

  const indices = [];

  for ( let u = 0; u < ( q - 1 ); u++ ) {
    for ( let s = 0; s < ( o - 1 ); s++ ) {
      const d = u * o + s;
      const c = u * o + s + 1;
      const b = ( u + 1 ) * o + s + 1;
      const a = ( u + 1 ) * o + s;

      indices.push(
        a, b, c,
        c, d, a,
      );

    }
  }

  geometry.addAttribute( 'position', new Float32BufferAttribute( positions, 3 ) );

  geometry.setIndex( indices );

  geometry.computeVertexNormals();


  console.log( geometry );

  return geometry;

}

export default function createGeometries() {

  return {

    super: createSuperGeometry(),

  };

}
