function createShape( font ) {

  const text = 'Discover three.js! \n :)';

  const shapes = font.generateShapes( text, 1 );

  const geometry = new THREE.ShapeBufferGeometry( shapes );
  geometry.computeBoundingBox();
  const centerOffset = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
  geometry.translate( centerOffset, 0, 0 );

  const material = new THREE.LineBasicMaterial( {
    side: THREE.DoubleSide
  } );

  const mesh = new THREE.Mesh( geometry, material );
  // mesh.scale.multiplyScalar

  return mesh;

}


function loadFont( scene ) {

  const loader = new THREE.FontLoader();

  loader.load( 'fonts/droid_serif_regular.typeface.json', function ( font ) {

    console.log( 'Here\s the font you just loaded: ', font );
    const mesh = createShape( font );

    scene.add( mesh );

  } );

}