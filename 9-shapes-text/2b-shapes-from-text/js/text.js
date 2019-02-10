// Create some shapes from the Font we just loaded
function createShapes( font ) {

  const text = 'Discover three.js! \n :)';

  const shapes = font.generateShapes( text, 0.5 );

  return shapes;

}

function setupText( font ) {

  const shapes = createShapes( font );

  console.log( 'Here\s the font we just loaded: ', font );
  console.log( 'And here\s the shapes we created from it: ', shapes );

  const material = new THREE.LineBasicMaterial( {
    // make the text is visible from behind
    side: THREE.DoubleSide,
  } );

  const lineText = new THREE.Group();

  function addShapeMesh( shape ) {

    const points = shape.getPoints();
    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const lineMesh = new THREE.Line( geometry, new THREE.LineBasicMaterial( {
      // make the text is visible from behind
      color: new THREE.Color( Math.random() * 0xffffff ),
      side: THREE.DoubleSide,
    } ) );

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


async function loadFont() {

  const loader = createAsyncLoader( new THREE.FontLoader() );

  const discover = setupText(
    await loader.load( 'fonts/droid_serif_regular.typeface.json' ),
  );

  return { discover };

}
