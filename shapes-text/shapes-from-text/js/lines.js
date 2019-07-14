import {
  Box3,
  Color,
  Group,
  Line,
  Vector3,
} from './vendor/three/three.module.js';

// this time we can't there are lots of separate geometries,
// so we'll have to use the final Group's bounding box to calculate
// how much to offset to the center the text
function centerGeomtriesByGroupDimension( group ) {

  const boundingBx = new Box3().setFromObject( group );
  const size = new Vector3();
  boundingBx.getSize( size );
  const centerOffset = -size.x / 2;

  // however, we still want to translate the geometries rather than the mesh
  // to make the animations work correctly
  group.traverse( ( child ) => {

    if ( child.geometry ) child.geometry.translate( centerOffset, 0, 0 );

  } );

}

function createGlyphMeshes( glyphGeometries, materials ) {

  const textGroup = new Group();

  for ( const geometry of glyphGeometries ) {

    // create a clone of our material and give it a random color
    const material = materials.basic.clone();
    material.color = new Color( Math.random() * 0xffffff );

    const glyphMesh = new Line( geometry, material );

    textGroup.add( glyphMesh );

    // spinAtRandomIntervals( lineMesh, 3000, 15000 );

  }

  centerGeomtriesByGroupDimension( textGroup );

  return textGroup;

}


export default function createMeshes( geometries, materials ) {

  return {

    text: createGlyphMeshes( geometries.glyphGeometries, materials ),

  };

}
