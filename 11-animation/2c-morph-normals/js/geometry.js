function createGeometry() {

  // let geometry = new THREE.TorusBufferGeometry( 2, 0.5, 8, 32 );
  let geometry = new THREE.BoxBufferGeometry( 2, 2, 2, 4, 4 );


  // turn the geometry into "triangle soup" so that we can explodify it
  geometry = geometry.toNonIndexed();

  geometry.morphAttributes.position = [];
  geometry.morphAttributes.normal = [];

  // initShearMorph( geometry );

  initExplodeMorph( geometry );

  console.log(geometry);

  return geometry;

}

function initShearMorph( geometry ) {

  const morphPositionAttribute = geometry.attributes.position.clone();

  const shearMatrix = new THREE.Matrix4().makeShear( 0.5, 0.5, -0.5 );

  shearMatrix.applyToBufferAttribute( morphPositionAttribute );

  geometry.morphAttributes.position[ 0 ] = morphPositionAttribute;

}

function initExplodeMorph( geometry ) {

  const faceVertexA = new THREE.Vector3();
  const faceVertexB = new THREE.Vector3();
  const faceVertexC = new THREE.Vector3();

  const faceNormalA = new THREE.Vector3();
  const faceNormalB = new THREE.Vector3();
  const faceNormalC = new THREE.Vector3();

  const transform = new THREE.Matrix4().makeRotationZ( -Math.PI / 4 );
  transform.scale( new THREE.Vector3( -1, -1, -1 ) )

  const normalTransform = transform.clone();
  normalTransform.transpose().getInverse( normalTransform );

  const positions = geometry.attributes.position.array.slice();
  const normals = geometry.attributes.normal.array.slice();

  for ( let i = 0; i < positions.length; i += 9 ) {

    faceVertexA.fromArray( positions, i );
    faceVertexB.fromArray( positions, i + 3 );
    faceVertexC.fromArray( positions, i + 6 );

    faceVertexA.applyMatrix4( transform );
    faceVertexB.applyMatrix4( transform );
    faceVertexC.applyMatrix4( transform );

    faceVertexA.toArray( positions, i );
    faceVertexB.toArray( positions, i + 3 );
    faceVertexC.toArray( positions, i + 6 );

    faceNormalA.fromArray( normals, i );
    faceNormalB.fromArray( normals, i + 3 );
    faceNormalC.fromArray( normals, i + 6 );

    faceNormalA.applyMatrix4( normalTransform );
    faceNormalB.applyMatrix4( normalTransform );
    faceNormalC.applyMatrix4( normalTransform );

    faceNormalA.toArray( normals, i );
    faceNormalB.toArray( normals, i + 3 );
    faceNormalC.toArray( normals, i + 6 );


  }

  geometry.morphAttributes.position[ 0 ] = new THREE.Float32BufferAttribute( positions, 3 );
  geometry.morphAttributes.normal[ 0 ] = new THREE.Float32BufferAttribute( normals, 3 );

}
