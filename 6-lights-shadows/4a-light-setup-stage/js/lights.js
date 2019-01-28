function initLights( scene, dummies ) {

  const ambientLight = new THREE.HemisphereLight( 0xcccccc, 0x555555, 10 );

  scene.add( ambientLight );

  const mainSpot = new THREE.SpotLight(
    0xffffff, // color
    1, // intensity,
    0, // distance
    Math.PI / 6,
    0.25, // exponent,
    2, // decay
  );

  mainSpot.power = 1700;

  console.log( 'mainSpot.target', mainSpot.target );

  mainSpot.position.set( -1.58, 3.58, -2.42 );
  mainSpot.target.position.set( -10, 0, -5 );


  // mainSpot.target.pos = dummies.center;

  scene.add( mainSpot, mainSpot.target );

  const helper = new THREE.SpotLightHelper( mainSpot );
  helper.update()
  scene.add( helper );


  return { ambientLight, mainSpot };

}


function initShadowLight( scene ) {



  spotLight.position.set( -12, 10, -12 );

  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024; // default
  spotLight.shadow.mapSize.height = 1024; // default
  spotLight.shadow.camera.near = 10;
  spotLight.shadow.camera.far = 15;

  scene.add( new THREE.SpotLightHelper( spotLight ) );
  scene.add( new THREE.CameraHelper( spotLight.shadow.camera ) );

  return spotLight;

}
