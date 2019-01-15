function createTextMesh( font ) {

  const textGeometry = new THREE.TextBufferGeometry( 'Discover three.js! \n :)', {

    font,
    size: 1,
    height: 0.1,
    curveSegments: 12,
		bevelEnabled: false,
		bevelThickness: 0.25,
		bevelSize: 0.5,
    bevelSegments: 5

  } );

  // We want to center the mesh (horizontall) on the screen.
  textGeometry.computeBoundingBox();
  const centerOffset = - 0.5 * ( textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x );
  textGeometry.translate( centerOffset, 0, 0 );

  console.log( 'And here\'s the textGeomtry: ', textGeometry );

  const material = new THREE.MeshBasicMaterial();

  const mesh = new THREE.Mesh( textGeometry, material );



  return mesh;

}

function loadFont( scene ) {

  const loader = new THREE.FontLoader();

  loader.load( 'fonts/droid_serif_regular.typeface.json', function ( font ) {

    console.log( 'Here\s the font you just loaded: ', font );
    const mesh = createTextMesh( font );

    scene.add( mesh );

  } );

}