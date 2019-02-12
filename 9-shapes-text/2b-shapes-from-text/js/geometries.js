import {
  BufferGeometry,
} from './vendor/three/three.module.js';

function createGeometriesFromShapes( glyphs ) {

  const geometries = [];

  // loop over the glyphs (letter shapes) and turn each into
  // a buffergeometry representing lines
  glyphs.forEach( ( glyph ) => {

    // the points are an array of Vector2
    const points = glyph.getPoints();

    // bufferGeometry.setFromPoints accepts an array of either 2d points (Vector2)
    // or 3D points (Vector3). In the case of Vector2, it will set z=0 for each point
    const geometry = new BufferGeometry().setFromPoints( points );

    // for each shape, check if it contains holes, such as the inside of the letter "e"
    // add meshes for these too
    if ( glyph.holes && glyph.holes.length > 0 ) {

      for ( let j = 0; j < glyph.holes.length; j++ ) {

        const hole = glyph.holes[ j ];
        // bufferGeometry.setFromPoints accepts an array of either 2d points (Vector2)
        // or 3D points (Vector3). In the case of Vector2, it will set z=0 for each point
        const holePoints = hole.getPoints();

        const holeGeometry = new BufferGeometry().setFromPoints( holePoints );

        geometries.push( holeGeometry );

      }

    }

    geometries.push( geometry );

  } );

  return geometries;

}

export default function createGeometries( shapes ) {

  return {
    glyphGeometries: createGeometriesFromShapes( shapes.glyphs ),
  };

}
