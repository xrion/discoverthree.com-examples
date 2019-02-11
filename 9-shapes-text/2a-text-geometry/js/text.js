function setupText( font ) {

  const textGeometry = new THREE.TextBufferGeometry( 'Discover three.js! \n :)', {

    font,
    size: 1,
    height: 0.1,
    curveSegments: 12,
    bevelEnabled: false,
    bevelThickness: 0.25,
    bevelSize: 0.5,
    bevelSegments: 5,

  } );

  // We want to center the mesh (horizontall) on the screen.
  // However, the geometry is created with it's "pivot" or zero point
  // at the bottom edge of the first letter, so we'll need to translate the geometry

  // To do this, compute the bounding box
  textGeometry.computeBoundingBox();

  // then offset the geometry by half the width of the box
  const centerOffset = -0.5 * ( textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x );
  textGeometry.translate( centerOffset, 0, 0 );

  console.log( 'Here\'s the font you just loaded: ', font );
  console.log( 'And here\'s the textGeomtry: ', textGeometry );

  const material = new MeshBasicMaterial();

  const text = new Mesh( textGeometry, material );

  return text;

}

async function loadFont() {

  const loader = createAsyncLoader( new THREE.FontLoader() );

  const discover = setupText(
    await loader.load( 'fonts/droid_serif_regular.typeface.json' ),
  );

  return { discover };

}
