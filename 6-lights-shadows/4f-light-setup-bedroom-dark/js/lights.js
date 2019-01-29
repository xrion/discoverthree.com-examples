function initLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xcccccc, 0x555555, 100 );

  scene.add( ambientLight );

  return { ambientLight };

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
