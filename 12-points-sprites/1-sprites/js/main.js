const app = new THREE_APP( '#container' );

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  app.scene.add( ambientLight );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 1 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  app.scene.add( frontLight, backLight );

}

function initSprites() {

  const spriteGroup = new THREE.Group();
  app.scene.add( spriteGroup );

  spriteGroup.userData.onUpdate = ( delta ) => {
    spriteGroup.rotation.x += delta;
  }

  const loader = new THREE.TextureLoader();

  const spriteMap = loader.load( '../textures/leaf_rgba8_256.png' );
  spriteMap.encoding = THREE.sRGBEncoding;

  const spriteMaterial = new THREE.SpriteMaterial( {
    map: spriteMap,
    // sizeAttenuation: false,
   } );

  for( let i = 0; i < 250; i ++ ) {

    const sprite = new THREE.Sprite( spriteMaterial.clone() );

    sprite.position.set(
      THREE.Math.randFloatSpread( -15, 15 ),
      THREE.Math.randFloatSpread( -15, 15 ),
      THREE.Math.randFloatSpread( -15, 15 )
    );

    sprite.rotation.x += Math.PI / 2
    sprite.rotation.y += Math.PI / 2
    sprite.rotation.z += Math.PI / 2

    const factor = THREE.Math.randFloat( -5, 5 );

    sprite.userData.onUpdate = function ( delta ) {

      sprite.material.rotation += delta * factor;

    }

    spriteGroup.add( sprite );

  }
}

function init() {

  app.init();

  // app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -1, 1, 15 );
  app.camera.far = 100;
  app.camera.updateProjectionMatrix();

  app.renderer.gammaOutput = true;
  app.renderer.gammaFactor = 2.2;

  // app.renderer.toneMapping = THREE.NoToneMapping;
  // app.renderer.toneMapping = THREE.LinearToneMapping;
  // app.renderer.toneMapping = THREE.ReinhardToneMapping;
  // app.renderer.toneMapping = THREE.Uncharted2ToneMapping;
  // app.renderer.toneMapping = THREE.CineonToneMapping;
  // app.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  // app.renderer.toneMappingExposure = 2;
  // app.renderer.toneMappingWhitePoint = 5;

  initLights();

  initSprites();

  app.start();

}

init();
