function initSprites() {

  const leaves = new THREE.Group();

  // we'll create a group to hold all the sprites, and
  // then set that to rotating to give a swirling wind effect
  leaves.userData.onUpdate = ( delta ) => {

    leaves.rotation.x += delta / 10;
    leaves.rotation.y += delta;
    leaves.rotation.z -= delta / 10;

  };

  const loader = new THREE.TextureLoader();

  const spriteMap = loader.load( 'textures/color/leaf/leaf.png' );
  spriteMap.encoding = THREE.sRGBEncoding;

  const spriteMaterial = new THREE.SpriteMaterial( {
    map: spriteMap,
    sizeAttenuation: true, // default
  } );

  for ( let i = 0; i < 100; i++ ) {

    const sprite = new THREE.Sprite( spriteMaterial.clone() );

    sprite.position.set(
      THREE.Math.randFloat( -20, 20 ),
      THREE.Math.randFloat( -20, 20 ),
      THREE.Math.randFloat( -20, 20 ),
    );

    const factor = THREE.Math.randFloat( -5, 5 );

    sprite.userData.onUpdate = function ( delta ) {

      // we can't rotate the sprite directly, instead
      // we need to apply a rotation to the material
      sprite.material.rotation += delta * factor;

    };

    leaves.add( sprite );

  }

  return { leaves };

}
