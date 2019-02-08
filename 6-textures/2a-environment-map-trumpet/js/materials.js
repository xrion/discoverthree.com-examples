function initMaterials( scene, envMap ) {

  const brassColor = 0xB5A642;
  const silverColor = 0xC4CACE;

  const materials = {

    brass: new THREE.MeshStandardMaterial( {
      metalness: 0.9,
      roughness: 0.2,
      color: brassColor,
      envMap,
      envMapIntensity: 1, // default is 1
    } ),

    silver: new THREE.MeshStandardMaterial( {
      metalness: 0.9,
      roughness: 0.2,
      color: silverColor,
      envMap,
      envMapIntensity: 1,
    } ),

    plinth: new THREE.MeshStandardMaterial( {
      metalness: 0.25,
      roughness: 0.25,
      envMap,
    } ),

  };

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  for ( material in materials ) {

    materials[ material ].color.convertSRGBToLinear();

  }

  return materials;

}
