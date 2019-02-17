function setupPointsAnimation( points ) {

  const positions = points.sphere.geometry.attributes.position.array;

  const originalPositions = positions.slice();

  let elapsedTime = 0;

  points.sphere.userData.onUpdate = ( delta ) => {

    elapsedTime += delta;

    points.sphere.rotation.y -= delta / 3;

    for ( let i = 0; i < positions.length; i += 3 ) {

      positions[ i ] = originalPositions[ i ] + ( Math.sin( ( elapsedTime * i / 100 ) * 0.3 ) * 5 )
      positions[ i + 2 ] = originalPositions[ i + 2 ]  + ( Math.sin( ( elapsedTime * i / 100 ) * 0.3 ) * 5 )

    }

    points.sphere.geometry.attributes.position.needsUpdate = true;

  };

}

export default function setupAnimation( points ) {

  setupPointsAnimation( points );

}
