function initSprites() {

  const spriteGroup = new THREE.Group();
  app.scene.add( spriteGroup );

  spriteGroup.userData.onUpdate = ( delta ) => {
    spriteGroup.rotation.x += delta * 1.5;
  }

  const loader = new THREE.TextureLoader();

  const spriteMap = loader.load( '../textures/leaf_rgba8_256.png' );

  const spriteMaterial = new THREE.SpriteMaterial( {
    map: spriteMap,
    sizeAttenuation: true, // default
   } );

  for( let i = 0; i < 500; i ++ ) {

    const sprite = new THREE.Sprite( spriteMaterial.clone() );

    sprite.position.set(
      THREE.Math.randFloatSpread( -15, 15 ),
      THREE.Math.randFloatSpread( -15, 15 ),
      THREE.Math.randFloatSpread( -15, 15 )
    );

    const factor = THREE.Math.randFloat( -5, 5 );

    sprite.userData.onUpdate = function ( delta ) {

      // we can't rotate the sprite directly, instead
      // we need to apply a rotation to the material
      sprite.material.rotation += delta * factor;

    }

    spriteGroup.add( sprite );

  }
}
