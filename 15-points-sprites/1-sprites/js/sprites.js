function initSprites( scene ) {

  const spriteGroup = new THREE.Group();
  scene.add( spriteGroup );

  // we'll create a group to hold all the sprites, and
  // then set that to rotating to give a swirling wind effect
  spriteGroup.userData.onUpdate = ( delta ) => {

    spriteGroup.rotation.x += delta / 10;
    spriteGroup.rotation.y += delta;
    spriteGroup.rotation.z -= delta / 10;

  };

  const loader = new THREE.TextureLoader();

  const spriteMap = loader.load( 'textures/leaf.png' );
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

    spriteGroup.add( sprite );

  }

}
