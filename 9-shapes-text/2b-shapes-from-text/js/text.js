// Create some shapes from the Font we just loaded
function createShapes( font ) {

  const text = 'Discover three.js! \n :)';

  const shapes = font.generateShapes( text, 0.5 );

  return shapes;

}

// Method one: use the shapes to create a ShapeBufferGeometry.
// This gives similar results to TextBufferGeometry,
// except that the text doesn't have height or bevelling
function createSolidText( shapes ) {

  const geometry = new THREE.ShapeBufferGeometry( shapes );

  // as usual, we'll need to translate the text geometry "left" by half it's width
  // to make sure it's centered at the origin
  geometry.computeBoundingBox();
  const centerOffset = -0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
  geometry.translate( centerOffset, 0, 0 );

  const material = new THREE.MeshBasicMaterial( {
    side: THREE.DoubleSide, // needed so that the text is visible from behind
  } );

  return new THREE.Mesh( geometry, material );

}

function createLineText( shapes ) {

  const material = new THREE.LineBasicMaterial( {
    side: THREE.DoubleSide, // needed so that the text is visible from behind
  } );

  const lineText = new THREE.Group();

  function addShapeMesh( shape ) {

    const points = shape.getPoints();
    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const lineMesh = new THREE.Line( geometry, material );

    spinAtRandomIntervals( lineMesh, 3000, 15000 );

    lineText.add( lineMesh );

  }

  for ( let i = 0; i < shapes.length; i++ ) {

    // add a mesh for each outer shape.
    // letters such as i or j are made up of multiple shapes
    const shape = shapes[ i ];
    addShapeMesh( shape );

    // for each shape, check if it contains holes, such as the inside of the letter "e"
    // add meshes for these too
    if ( shape.holes && shape.holes.length > 0 ) {

      for ( let j = 0; j < shape.holes.length; j++ ) {

        const hole = shape.holes[ j ];
        addShapeMesh( hole );

      }

    }

  }

  // this time we can't there are lots of separate geometries,
  // so we'll have to use the final Group's bounding box to calculate
  // how much to offset to the center the text
  const bb = new THREE.Box3().setFromObject( lineText );
  const size = new THREE.Vector3();
  bb.getSize( size );
  const centerOffset = -size.x / 2;

  // however, we still want to translate the geometries rather than the mesh
  lineText.traverse( ( child ) => {

    if ( child.geometry ) child.geometry.translate( centerOffset, 0, 0 );

  } );

  return lineText;

}

function loadFont( scene ) {

  const loader = new THREE.FontLoader();

  loader.load( 'fonts/droid_serif_regular.typeface.json', ( font ) => {

    console.log( 'Here\s the font we just loaded: ', font );

    const shapes = createShapes( font );
    console.log( 'And here\s the shapes we created from them: ', shapes );

    const shapeMesh = createSolidText( shapes );

    const lineText = createLineText( shapes );

    // scene.add( shapeMesh );
    scene.add( lineText );

  } );

}
